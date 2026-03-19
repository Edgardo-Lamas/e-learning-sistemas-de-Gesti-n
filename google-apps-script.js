// ============================================================
// GOOGLE APPS SCRIPT — Plataforma E-Learning Sistemas de Gestión
// ============================================================
//
// INSTRUCCIONES DE CONFIGURACIÓN:
//
// PASO 1: Crear el Google Sheet
//   1. Ir a https://sheets.google.com
//   2. Crear una hoja en blanco (puede estar vacía, el script crea todo solo)
//
// PASO 2: Abrir el editor de Apps Script
//   1. En el Google Sheet: Extensiones → Apps Script
//   2. Borrar todo el código existente
//   3. Copiar y pegar el código que está debajo de la línea punteada
//
// PASO 3: Guardar y desplegar
//   1. Ctrl+S para guardar
//   2. Implementar → Nueva implementación
//   3. Tipo: Aplicación web
//   4. Ejecutar como: tu cuenta de Google
//   5. Quién tiene acceso: Cualquier persona
//   6. Implementar → COPIAR la URL (termina en /exec)
//
// PASO 4: Pegar la URL en app.js
//   Buscar: const APPS_SCRIPT_URL = '';
//   Pegar la URL entre las comillas
//
// El script crea automáticamente:
//   - 16 hojas "Clase 01" a "Clase 16" con encabezados y columnas ajustadas
//   - 1 hoja "Resumen Alumnos" con el progreso de cada alumno
//
// ============================================================
// ↓↓↓ CÓDIGO PARA COPIAR EN APPS SCRIPT (desde aquí) ↓↓↓
// ============================================================
/*

// Encabezados para cada hoja de clase
var HEADERS_CLASE = [
  'Timestamp',
  'Alumno',
  'Módulo',
  'Clase',
  'Título Clase',
  'Respuestas',
  'Correctas',
  'Total Preguntas',
  'Porcentaje',
  'Aprobado'
];

// Encabezados para la hoja resumen
var HEADERS_RESUMEN = (function() {
  var h = ['Alumno'];
  for (var i = 1; i <= 16; i++) {
    h.push('Clase ' + (i < 10 ? '0' + i : i));
  }
  h.push('Promedio');
  h.push('Clases Completadas');
  h.push('Última Actividad');
  return h;
})();

// ─────────────────────────────────────────────
// Función principal: recibe los datos del sitio (GET)
// ─────────────────────────────────────────────
function doGet(e) {
  try {
    var data = JSON.parse(decodeURIComponent(e.parameter.data));

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    guardarEnHojaClase(ss, data);
    actualizarResumen(ss, data);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Datos guardados correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─────────────────────────────────────────────
// Guarda los datos en la hoja "Clase XX"
// ─────────────────────────────────────────────
function guardarEnHojaClase(ss, data) {
  var numClase = parseInt(data.clase) || 1;
  var nombreHoja = 'Clase ' + (numClase < 10 ? '0' + numClase : numClase);

  var sheet = ss.getSheetByName(nombreHoja);

  // Si la hoja no existe, crearla con encabezados
  if (!sheet) {
    sheet = ss.insertSheet(nombreHoja);
    sheet.appendRow(HEADERS_CLASE);
    formatearEncabezados(sheet, HEADERS_CLASE.length);
  }

  // Agregar fila de datos
  var row = [
    new Date().toLocaleString('es-AR'),
    data.alumno || 'Sin nombre',
    data.modulo || '',
    data.clase || '',
    data.tituloClase || '',
    JSON.stringify(data.respuestas) || '',
    data.correctas || 0,
    data.totalPreguntas || 0,
    (data.porcentaje || 0) + '%',
    data.aprobado ? 'SÍ' : 'NO'
  ];

  sheet.appendRow(row);

  // Ajustar ancho de columnas al contenido
  sheet.autoResizeColumns(1, HEADERS_CLASE.length);
}

// ─────────────────────────────────────────────
// Actualiza (o crea) la fila del alumno en "Resumen Alumnos"
// ─────────────────────────────────────────────
function actualizarResumen(ss, data) {
  var nombreHoja = 'Resumen Alumnos';
  var sheet = ss.getSheetByName(nombreHoja);

  // Si la hoja no existe, crearla
  if (!sheet) {
    sheet = ss.insertSheet(nombreHoja, 0); // posición 0 = primera hoja
    sheet.appendRow(HEADERS_RESUMEN);
    formatearEncabezados(sheet, HEADERS_RESUMEN.length);
  }

  var alumno = (data.alumno || 'Sin nombre').trim();
  var numClase = parseInt(data.clase) || 1;
  var porcentaje = data.porcentaje || 0;
  var timestamp = new Date().toLocaleString('es-AR');

  // Buscar si el alumno ya tiene fila
  var datos = sheet.getDataRange().getValues();
  var filaAlumno = -1;

  for (var i = 1; i < datos.length; i++) {
    if (datos[i][0] === alumno) {
      filaAlumno = i + 1; // +1 porque getValues es base 0, Sheets es base 1
      break;
    }
  }

  if (filaAlumno === -1) {
    // Alumno nuevo: crear fila vacía
    var nuevaFila = [alumno];
    for (var j = 0; j < 16; j++) nuevaFila.push('');
    nuevaFila.push(''); // Promedio
    nuevaFila.push(0);  // Clases Completadas
    nuevaFila.push(timestamp); // Última Actividad
    sheet.appendRow(nuevaFila);
    filaAlumno = sheet.getLastRow();
  }

  // Columna de la clase: columna 2 = Clase 01, columna 3 = Clase 02, etc.
  var colClase = numClase + 1;
  sheet.getRange(filaAlumno, colClase).setValue(porcentaje + '%');

  // Recalcular promedio y clases completadas
  var fila = sheet.getRange(filaAlumno, 1, 1, HEADERS_RESUMEN.length).getValues()[0];
  var suma = 0;
  var completadas = 0;

  for (var k = 1; k <= 16; k++) {
    var val = fila[k];
    if (val !== '' && val !== null) {
      suma += parseInt(val) || 0;
      completadas++;
    }
  }

  var promedio = completadas > 0 ? Math.round(suma / completadas) : 0;

  // Columnas: 18 = Promedio, 19 = Clases Completadas, 20 = Última Actividad
  sheet.getRange(filaAlumno, 18).setValue(promedio + '%');
  sheet.getRange(filaAlumno, 19).setValue(completadas + '/16');
  sheet.getRange(filaAlumno, 20).setValue(timestamp);

  // Ajustar columnas
  sheet.autoResizeColumns(1, HEADERS_RESUMEN.length);
}

// ─────────────────────────────────────────────
// Formatea la fila de encabezados (negrita + color)
// ─────────────────────────────────────────────
function formatearEncabezados(sheet, numColumnas) {
  var rango = sheet.getRange(1, 1, 1, numColumnas);
  rango.setFontWeight('bold');
  rango.setBackground('#085041');
  rango.setFontColor('#ffffff');
  sheet.setFrozenRows(1); // Dejar encabezado fijo al hacer scroll
}

// ─────────────────────────────────────────────
// Función de prueba (ejecutar desde el editor para verificar)
// ─────────────────────────────────────────────
function testDoGet() {
  var testData = {
    parameter: {
      data: encodeURIComponent(JSON.stringify({
        alumno: 'Alumno Prueba',
        modulo: 1,
        clase: 1,
        tituloClase: '¿Por qué existen los sistemas?',
        respuestas: [1, 1, 2],
        correctas: 3,
        totalPreguntas: 3,
        porcentaje: 100,
        aprobado: true
      }))
    }
  };

  var result = doGet(testData);
  Logger.log(result.getContent());
}

*/
// ============================================================
// ↑↑↑ CÓDIGO PARA COPIAR EN APPS SCRIPT (hasta aquí) ↑↑↑
// ============================================================
//
// SOLUCIÓN DE PROBLEMAS COMUNES:
//
// Problema: "Error de autorización"
// Solución: En Apps Script, ejecutar manualmente "testDoPost",
//   aceptar los permisos que pide Google, y volver a desplegar.
//
// Problema: Los datos no llegan al Sheet
// Solución:
//   1. Verificar que la URL en app.js termine en /exec
//   2. El acceso debe estar en "Cualquier persona"
//   3. Abrir la URL directo en el navegador — debe responder con JSON de error
//      (eso confirma que el script está activo)
//
// Problema: La URL expiró
// Solución: Extensiones → Apps Script → Implementar → Administrar implementaciones
//   Ver la URL vigente y actualizar en app.js
//
