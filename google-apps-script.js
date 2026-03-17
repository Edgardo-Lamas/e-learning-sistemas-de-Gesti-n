// ============================================================
// GOOGLE APPS SCRIPT — Plataforma E-Learning Sistemas de Gestión
// ============================================================
//
// INSTRUCCIONES DE CONFIGURACIÓN (leer antes de usar):
//
// PASO 1: Crear el Google Sheet
//   1. Ir a https://sheets.google.com
//   2. Crear una nueva hoja llamada: "Resultados E-Learning"
//   3. En la primera fila (encabezados), escribir en cada celda:
//      A1: Timestamp
//      B1: Alumno
//      C1: Modulo
//      D1: Clase
//      E1: Titulo Clase
//      F1: Respuestas
//      G1: Correctas
//      H1: Total Preguntas
//      I1: Porcentaje
//      J1: Aprobado
//
// PASO 2: Abrir el editor de Apps Script
//   1. En el Google Sheet, ir al menú: Extensiones → Apps Script
//   2. Se abre un editor de código
//   3. Borrar todo el código que hay
//   4. COPIAR Y PEGAR el código que está debajo de la línea punteada
//
// PASO 3: Guardar y desplegar
//   1. Hacer clic en el ícono de guardar (disquete) o Ctrl+S
//   2. Hacer clic en "Implementar" → "Nueva implementación"
//   3. En "Tipo": seleccionar "Aplicación web"
//   4. En "Ejecutar como": seleccionar tu cuenta de Google
//   5. En "Quién tiene acceso": seleccionar "Cualquier persona"
//   6. Hacer clic en "Implementar"
//   7. COPIAR la URL que aparece (es larga, termina en /exec)
//
// PASO 4: Configurar la URL en la plataforma
//   1. Abrir el archivo app.js
//   2. Buscar la línea: const APPS_SCRIPT_URL = '';
//   3. Pegar la URL entre las comillas
//   4. Guardar app.js
//
// PASO 5: Verificar que funciona
//   1. Abrir la plataforma, ingresar con un nombre
//   2. Completar el cuestionario de la Clase 1
//   3. Ir al Google Sheet y verificar que aparece una nueva fila con los datos
//
// ============================================================
// ↓↓↓ CÓDIGO PARA COPIAR EN APPS SCRIPT (desde aquí) ↓↓↓
// ============================================================
/*

function doPost(e) {
  try {
    // Parsear los datos recibidos
    var data = JSON.parse(e.postData.contents);

    // Abrir la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Preparar la fila de datos
    var row = [
      new Date().toLocaleString('es-AR'),  // Timestamp
      data.alumno || 'Sin nombre',          // Nombre del alumno
      data.modulo || '',                    // Número de módulo
      data.clase || '',                     // Número de clase
      data.tituloClase || '',               // Título de la clase
      JSON.stringify(data.respuestas) || '', // Respuestas como JSON
      data.correctas || 0,                  // Cantidad de respuestas correctas
      data.totalPreguntas || 0,             // Total de preguntas
      data.porcentaje || 0,                 // Porcentaje de aciertos
      data.aprobado ? 'SÍ' : 'NO'          // Aprobado o no
    ];

    // Agregar la fila al final de la hoja
    sheet.appendRow(row);

    // Devolver respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'ok',
        message: 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    // Devolver respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba (se puede ejecutar desde el editor para verificar)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        alumno: "Alumno de Prueba",
        modulo: 1,
        clase: 1,
        tituloClase: "El desorden",
        respuestas: [1, 2, 1],
        correctas: 3,
        totalPreguntas: 3,
        porcentaje: 100,
        aprobado: true
      })
    }
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}

*/
// ============================================================
// ↑↑↑ CÓDIGO PARA COPIAR EN APPS SCRIPT (hasta aquí) ↑↑↑
// ============================================================
//
// SOLUCIÓN DE PROBLEMAS COMUNES:
//
// Problema: "Error de CORS" en la consola del navegador
// Solución: Es normal al hacer fetch desde archivo local (file://)
//   Opciones:
//   a) Usar un servidor local (VS Code Live Server, o python -m http.server)
//   b) Subir la plataforma a GitHub Pages o Netlify (gratis)
//   c) El error no afecta el funcionamiento si ves los datos en el Sheet
//
// Problema: Los datos no llegan al Sheet
// Solución:
//   1. Verificar que la URL en app.js sea la correcta (termina en /exec)
//   2. Verificar que el despliegue esté como "Cualquier persona"
//   3. Abrir la URL directamente en el navegador — debe mostrar un error JSON
//      (eso significa que el script está activo)
//
// Problema: "Error de autorización" en Apps Script
// Solución:
//   1. En el editor de Apps Script, ejecutar manualmente la función "testDoPost"
//   2. Google va a pedir autorización — aceptar todos los permisos
//   3. Volver a desplegar
//
// Problema: La URL expiró o cambió
// Solución:
//   Ir a Extensiones → Apps Script → Implementar → Administrar implementaciones
//   Ver la URL actual y actualizar en app.js
