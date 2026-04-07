const COURSE_DATA = {
  titulo: "Introducción a los Sistemas de Gestión",
  codigo: "FP-SG-001",
  totalClases: 16,
  duracion: "4 meses — 32 hs cátedra",
  modalidad: "Participativa, narrativa, práctica · Explicación oral, cuaderno, celular",
  evaluacion: "Participación oral (40%) + Cuaderno (30%) + Proyecto final (30%)",
  formulaClase: "10 min apertura → 20 min historia → 30 min ejercicio → 20 min debate",

  modulos: [
    {
      id: 1,
      titulo: "El origen de la organización humana",
      subtitulo: "¿Por qué existen los sistemas?",
      clases: "1–4",
      color: "#085041",
      colorAccent: "#5dcaa5",
      colorLight: "#9fe1cb",
      icon: "🌱",
      clases_lista: [
        {
          id: 1,
          titulo: "¿Por qué existen los sistemas?",
          subtitulo: "¿Qué pasa cuando no hay organización?",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Piensen en algo. Hoy se levantaron. ¿Alguien les dijo que tenían que levantarse a una hora? ¿Que tenían que hacer algo en orden? Eso es organización. Sin que se den cuenta, viven dentro de sistemas todo el tiempo.\n\n¿Qué pasa si en una cocina hay cinco personas cocinando y nadie le dice a nadie qué hacer?\n\nEso se llama caos. Y el caos tiene un costo."
            },
            {
              tipo: "historia",
              titulo: "La cocina de Don Ramón (20 min)",
              texto: "Don Ramón tenía una fonda en el barrio. Arrancó solo: cocinaba, atendía las mesas, lavaba los platos y cobraba. Le iba bien.\n\nUn día le fue tan bien que contrató a cuatro personas más: a Mario para cocinar, a Sandra para atender, a Luis para lavar y a la señora Graciela para cobrar.\n\nPero Don Ramón no le explicó bien a nadie qué tenía que hacer cada uno. Mario cocinaba lo que se le ocurría. Sandra a veces cobraba, a veces atendía, a veces nada. Luis lavaba los platos antes de que la gente terminara de comer. Y la señora Graciela muchas veces no sabía cuánto cobrar porque nadie le avisaba qué se había pedido.\n\nEn una semana, la fonda perdió la mitad de los clientes. Don Ramón ganaba más plata cuando trabajaba solo.\n\n¿Qué le faltó a Don Ramón? Una cosa simple: organización."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Escribí 5 situaciones de tu vida donde las cosas salieron mal porque no había organización. Puede ser en tu casa, en tu barrio, en un trabajo, en cualquier lado.\n\nMaterial para dictar: La organización es la forma en que los seres humanos coordinan sus acciones para lograr un objetivo en común. Sin organización, los recursos se desperdician, los errores se multiplican y los objetivos no se alcanzan."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Creen que se puede aprender a organizarse, o la gente nace organizada?\n\nLa organización no es un talento. Es una habilidad. Y en este curso la vamos a aprender."
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué le faltó a Don Ramón cuando contrató a cuatro personas?",
              opciones: [
                "Dinero para pagar los sueldos",
                "Organización: explicarle a cada uno qué tenía que hacer",
                "Una cocina más grande",
                "Más clientes en la fonda"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Qué es la organización?",
              opciones: [
                "Tener muchas personas trabajando al mismo tiempo",
                "La forma en que los seres humanos coordinan sus acciones para lograr un objetivo en común",
                "Un sistema de computadoras para controlar empleados",
                "Algo que solo se aplica en empresas grandes"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué consecuencias tuvo la falta de organización en la fonda de Don Ramón?",
              opciones: [
                "Los clientes llegaron más temprano",
                "La fonda ganó más dinero",
                "La fonda perdió la mitad de los clientes en una semana",
                "Don Ramón pudo descansar más"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 2,
          titulo: "¿Qué es un sistema?",
          subtitulo: "Definición y ejemplos de sistemas",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "La clase pasada hablamos de organización. Hoy vamos a ponerle nombre a esa organización. El nombre es: sistema.\n\n¿Alguien escuchó alguna vez la palabra sistema? ¿En qué contexto?"
            },
            {
              tipo: "historia",
              titulo: "El equipo de fútbol que nunca ganaba (20 min)",
              texto: "Hay un equipo de fútbol del barrio, los Tigres del Sur. Tienen a los mejores jugadores del barrio: el Toro, que es el mejor goleador de la zona; el Flaco Ramos, que tiene una zurda que mata; y el Mono García, que en el arco para todo.\n\nPero los Tigres nunca ganan. ¿Por qué? Porque cada uno juega para él. El Toro siempre quiere hacer el gol él solo, aunque tenga a tres encima. El Flaco Ramos nunca pasa la pelota porque quiere lucirse. Y el Mono García a veces sale del arco a gambetear delanteros en mitad de cancha.\n\nUn día llega un técnico nuevo, el Viejo Pereyra. Lo primero que hace es reunirlos y decirles algo que ninguno esperaba: 'Acá no hay figuras. Acá hay un sistema. Cada uno tiene una función. Si cada uno hace la suya, el equipo gana. Si cada uno hace lo que quiere, el equipo pierde. Elijan.'\n\nEsa misma semana, los Tigres ganaron 3 a 0."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Escribí 3 sistemas que existen en tu vida. Para cada uno, respondé: ¿Cuáles son sus partes? ¿Cuál es su objetivo?\n\nEjemplo:\n• Sistema: Una familia | Partes: padre, madre, hijos, abuelos | Objetivo: cuidarse y crecer juntos\n\nMaterial para dictar: Un sistema es un conjunto de partes o elementos que trabajan juntos, de manera organizada, para lograr un objetivo común. Para que exista un sistema hacen falta tres cosas: 1. Elementos: las partes que lo componen. 2. Relación entre esos elementos: que se conecten y coordinen. 3. Un objetivo: para qué sirve todo eso. Ejemplos de sistemas: una familia, un equipo de fútbol, una empresa, una escuela, el cuerpo humano, una panadería."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Puede existir un sistema sin un objetivo claro? ¿Qué pasa?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Por qué los Tigres del Sur nunca ganaban si tenían a los mejores jugadores?",
              opciones: [
                "Porque el campo de juego era malo",
                "Porque cada uno jugaba para sí mismo, sin funcionar como sistema",
                "Porque el árbitro siempre los perjudicaba",
                "Porque el Viejo Pereyra era mal técnico"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Qué necesita un sistema para existir?",
              opciones: [
                "Solo dinero y tecnología",
                "Elementos, relación entre ellos y un objetivo común",
                "Al menos 10 personas",
                "Una computadora para coordinarlo"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Cuál de estos es un ejemplo de sistema?",
              opciones: [
                "Un ladrillo suelto en el suelo",
                "Una persona durmiendo",
                "Un equipo de fútbol donde cada uno tiene su función",
                "Una palabra escrita en un papel"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 3,
          titulo: "Las partes de un sistema",
          subtitulo: "Entrada, proceso y salida",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Todo sistema tiene tres partes. Hoy las vamos a aprender. Son tan simples que las vas a ver en todos lados para siempre.\n\nENTRADA → PROCESO → SALIDA\n\nTodo lo que existe en el mundo, si funciona como sistema, tiene estas tres partes."
            },
            {
              tipo: "historia",
              titulo: "El panadero y el inspector (20 min)",
              texto: "Una mañana llegó un inspector del municipio a la panadería de Don Jorge. Entró, miró todo, y le preguntó: '¿Qué hace usted acá?'\n\nDon Jorge pensó que era una pregunta rara. 'Hago pan', dijo.\n\n'No', dijo el inspector. 'Eso es el resultado. Le pregunto qué hace. Descríbame el proceso.'\n\nDon Jorge nunca había pensado en eso. Empezó a hablar despacio: 'Bueno… primero traigo la harina, el agua, la levadura y la sal. Eso es lo que entra. Después mezclo todo, amaso, dejo levar la masa, la corto, la formo y la meto en el horno. Eso es lo que hago. Y al final sale el pan. Eso es lo que entrego.'\n\nEl inspector sonrió. 'Perfecto. Usted acaba de describir un sistema. Entrada, proceso, salida. Si algún día algo sale mal en el pan, ya sabe dónde buscar el error: en la entrada, en el proceso, o en la salida.'\n\nDon Jorge nunca olvidó esa conversación."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Dibujá en el cuaderno el esquema entrada → proceso → salida para dos de estos casos. Usá flechas entre cada parte:\n• Una peluquería\n• Preparar el desayuno\n• Un partido de fútbol\n• Una escuela\n\nMaterial para dictar: Todo sistema tiene tres partes fundamentales: 1. Entrada: todo lo que entra al sistema para ser transformado. Puede ser materia prima, información, personas, dinero, tiempo. 2. Proceso: el conjunto de acciones o pasos que transforman la entrada. 3. Salida: el resultado del proceso. El producto, el servicio o la información que sale del sistema. Ejemplo — Panadería: Entrada: harina, agua, levadura, sal. Proceso: amasado, formado, horneado. Salida: pan."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Qué pasa si la entrada es mala? ¿Puede salir bien la salida?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Cuáles son las tres partes de todo sistema?",
              opciones: [
                "Inicio, desarrollo y final",
                "Entrada, proceso y salida",
                "Personas, máquinas y dinero",
                "Planificar, hacer y controlar"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "En una panadería, ¿qué sería la 'entrada' del sistema?",
              opciones: [
                "El pan terminado",
                "El horneado de la masa",
                "La harina, el agua, la levadura y la sal",
                "La venta a los clientes"
              ],
              correcta: 2
            },
            {
              id: 3,
              texto: "¿Para qué sirve el esquema entrada-proceso-salida?",
              opciones: [
                "Solo para fábricas industriales",
                "Para identificar en qué parte de un sistema puede estar el error",
                "Para calcular cuánto dinero gana un negocio",
                "Solo lo usan los inspectores del municipio"
              ],
              correcta: 1
            },
            {
              id: 4,
              texto: "Si en una peluquería el cliente sale con el pelo mal cortado, ¿en qué parte del sistema puede estar el error?",
              opciones: [
                "Solo en la entrada (el cliente)",
                "Solo en la salida (el corte)",
                "Solo en el proceso (cómo se cortó)",
                "En la entrada, el proceso o la salida: hay que analizar cada parte"
              ],
              correcta: 3
            }
          ]
        },
        {
          id: 4,
          titulo: "Los sistemas en la historia humana",
          subtitulo: "Cómo la organización permitió que la humanidad avanzara",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Hoy vamos a hacer un viaje en el tiempo. Vamos a ver cómo los seres humanos, desde que existen, siempre necesitaron organizarse en sistemas para sobrevivir."
            },
            {
              tipo: "historia",
              titulo: "El ejército que no tenía general (20 min)",
              texto: "Hace tres mil años, en las orillas de un gran río, vivían dos pueblos. Los Rojos y los Azules. Los Rojos eran más, tenían mejores armas y guerreros más fuertes.\n\nLos Azules eran menos, más pequeños, y sus armas eran simples. Pero tenían algo que los Rojos no: un sistema.\n\nCuando los Rojos atacaban, cada guerrero peleaba como quería. El más valiente corría al frente. El más cobarde se escondía. No había orden. Ganaba el que era más fuerte en ese momento.\n\nLos Azules en cambio tenían filas. La primera fila resistía el golpe. La segunda fila descansaba. Cuando la primera se cansaba, avanzaba la segunda. Mientras tanto, un grupo rodeaba por el costado. Y un pequeño grupo guardaba la retaguardia.\n\nLos Rojos nunca entendieron por qué perdían siempre contra un enemigo más débil. La respuesta era simple: los Azules no eran más fuertes. Eran más organizados."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Pensá en la siguiente pregunta y escribí al menos 10 líneas: ¿Por qué creés que las civilizaciones que más se organizaron fueron las que más avanzaron? Usá ejemplos que conozcas.\n\nMaterial para dictar: A lo largo de la historia, los grupos humanos que aprendieron a organizarse en sistemas fueron los que sobrevivieron y prosperaron. Las primeras tribus cazaban juntas porque era más eficiente que cazar solo. Los imperios antiguos construyeron pirámides, acueductos y ejércitos porque tenían sistemas de organización del trabajo. El comercio creció porque las personas aprendieron a dividir las tareas. La organización en sistemas no es una idea moderna: es una necesidad humana que existe desde el principio de los tiempos."
            },
            {
              tipo: "debate",
              titulo: "Cierre del Módulo 1 (20 min)",
              texto: "Repaso oral: ¿qué aprendieron en las cuatro clases de este módulo?\n\nTodo lo que vimos hasta acá tiene que ver con una sola idea: el ser humano siempre necesitó organizarse. Lo que vamos a aprender ahora es cómo esa organización se convirtió en una ciencia."
            }
          ],
          anexo: {
            titulo: "Anexo — Flujo de trabajo en una fábrica moderna",
            imagen: "flujo-trabajo/flujo-trabajo.png",
            descripcion: "1. ENTRADA\n\nLa entrada representa todo lo que el sistema necesita para comenzar a trabajar.\n\na) Materias primas — Son los materiales básicos: bobinas de acero, litio para baterías. La base física de la producción.\n\nb) Subensamblajes — Componentes que llegan parcialmente armados: motores eléctricos, módulos de batería, componentes electrónicos. No se fabrican desde cero, sino que se integran.\n\nc) Información de diseño y control — Especificaciones de ingeniería, niveles de inventario en tiempo real, datos de la cadena de suministro. La producción moderna funciona basada en datos.\n\n2. PROCESO\n\nEtapa donde las entradas se transforman en un producto.\n\na) Red logística integrada — Cintas transportadoras, sistemas de almacenamiento y estaciones de ensamblaje aseguran que cada pieza llegue al lugar correcto en el momento correcto.\n\nb) Decisiones del sistema — Un nodo central de 'Optimización impulsada por IA' prioriza pedidos, ajusta la producción y controla inventarios.\n\nc) Fabricación automatizada — Robots industriales realizan corte, soldadura y ensamblaje con mayor precisión y menos errores.\n\nd) Inspección de calidad — Antes del resultado final, el producto atraviesa un control que verifica el ensamblaje correcto, la ausencia de fallas y el cumplimiento de estándares.\n\n3. SALIDA\n\na) Vehículos eléctricos ensamblados — El producto principal, listo para su distribución.\n\nb) Módulos de batería para otros mercados — Un flujo de trabajo puede tener más de una salida.\n\nc) Datos de producción — Estadísticas de rendimiento y eficiencia que sirven para mejorar el sistema.\n\nRelación con los Sistemas de Gestión\n\nEn un sistema de gestión, definir el flujo de trabajo permite evitar errores, coordinar equipos, reducir tiempos y asegurar calidad. Si una etapa del flujo falla — material, proceso o control — el resultado final también fallará. Por eso, mapear el flujo de trabajo es una herramienta clave para administrar procesos complejos."
          },
          preguntas: [
            {
              id: 1,
              texto: "¿Por qué los Azules ganaban siempre contra los Rojos, aunque eran más débiles?",
              opciones: [
                "Porque tenían mejores armas",
                "Porque eran más valientes",
                "Porque tenían un sistema organizado de combate",
                "Porque los Rojos tenían miedo"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Qué hicieron las primeras tribus humanas que las hizo más eficientes?",
              opciones: [
                "Inventaron las computadoras",
                "Aprendieron a cazar juntas y dividir las tareas",
                "Construyeron ciudades modernas",
                "Usaron dinero para comerciar"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué demuestra la historia de los dos pueblos?",
              opciones: [
                "Que la fuerza siempre gana",
                "Que la organización puede superar a la fuerza",
                "Que los ejércitos más grandes siempre triunfan",
                "Que las armas son lo más importante en una batalla"
              ],
              correcta: 1
            }
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: "Nace la administración moderna",
      subtitulo: "Del taller a la fábrica moderna",
      clases: "5–8",
      color: "#3c3489",
      colorAccent: "#afa9ec",
      colorLight: "#d0cdf8",
      icon: "⚙️",
      clases_lista: [
        {
          id: 5,
          titulo: "La Revolución Industrial",
          subtitulo: "Cómo la producción masiva creó la necesidad de administrar",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "¿Alguno sabe qué es la Revolución Industrial? No importa si no saben, lo vamos a ver juntos. Es una de las cosas más importantes que le pasó a la humanidad en los últimos 300 años."
            },
            {
              tipo: "historia",
              titulo: "El sastre y la fábrica (20 min)",
              texto: "En 1780, en un pueblo de Inglaterra, vivía Tomás, un sastre. Tomás hacía un traje por semana. Cortaba la tela, cosía, bordaba, ponía los botones. Era él solo, con sus manos y sus herramientas. El traje tardaba siete días y costaba caro, porque tenía mucho trabajo puesto.\n\nVeinte años después, a pocas cuadras del taller de Tomás, abrió una fábrica. Adentro había 200 trabajadores. Uno solo cortaba telas todo el día. Otro cosía mangas todo el día. Otro ponía botones todo el día. Con esa organización, la fábrica producía 500 trajes por semana.\n\nTomás cerró su taller. No podía competir. Fue a la fábrica a pedir trabajo. Le dieron el puesto de 'cortador de telas'. Toda su vida, todo el día, cortando telas.\n\nTomás ganaba dinero, sí. Pero ya no hacía un traje. Hacía un pedazo de traje. La Revolución Industrial cambió para siempre la manera en que el ser humano trabaja."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Imaginá que sos el dueño de una fábrica con 50 empleados. Nadie sabe bien qué tiene que hacer.\n\n¿Cuáles serían los 5 primeros problemas que tendrías? Escribilos y al lado de cada uno escribí cómo los resolverías.\n\nMaterial para dictar: La Revolución Industrial fue un período que comenzó en Inglaterra alrededor del año 1760 y se extendió por todo el mundo durante el siglo XIX. Sus características principales fueron: 1. Se pasó de la producción artesanal a la producción en fábrica. 2. Las máquinas reemplazaron parte del trabajo manual. 3. Miles de trabajadores debían hacer tareas coordinadas al mismo tiempo. 4. Esto creó un problema nuevo: ¿cómo organizar a cientos o miles de personas para que trabajen juntas de manera eficiente? Ese problema fue el origen de la administración como ciencia."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Les parece que la Revolución Industrial fue buena o mala para los trabajadores? Puede ser las dos cosas al mismo tiempo."
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Por qué Tomás el sastre tuvo que cerrar su taller?",
              opciones: [
                "Porque sus trajes eran de mala calidad",
                "Porque la fábrica producía 500 trajes por semana dividiendo el trabajo, y él no podía competir",
                "Porque no tenía clientes",
                "Porque se mudó de ciudad"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Qué nuevo problema creó la Revolución Industrial?",
              opciones: [
                "Cómo hacer trajes más bonitos",
                "Cómo organizar y coordinar a cientos de personas para que trabajen juntas eficientemente",
                "Cómo vender más barato",
                "Cómo construir máquinas más rápidas"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué fue lo que originó la administración como ciencia?",
              opciones: [
                "La necesidad de fabricar más productos",
                "La necesidad de organizar a grandes grupos de personas que trabajaban juntas",
                "La invención de las computadoras",
                "El deseo de los dueños de ganar más dinero"
              ],
              correcta: 1
            }
          ]
        },
        {
          id: 6,
          titulo: "Nace la administración",
          subtitulo: "Las cuatro funciones básicas",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "El problema de cómo organizar una fábrica con miles de personas no lo resolvieron de un día para otro. Fueron varias personas, a lo largo de décadas, las que fueron encontrando respuestas. A esas respuestas las llamamos administración."
            },
            {
              tipo: "historia",
              titulo: "El relojero y el caos de la fábrica (20 min)",
              texto: "Frederick Taylor era un ingeniero norteamericano que a fines del 1800 entró a trabajar en una fábrica de acero. Lo primero que vio lo dejó perplejo: los obreros tardaban lo que querían en hacer cada tarea. Nadie medía nada. Nadie cronometraba nada. Si un obrero tardaba dos horas en hacer algo que podía hacerse en veinte minutos, nadie lo sabía.\n\nTaylor sacó su reloj y empezó a medir. Midió cada tarea, cada movimiento, cada paso. Después reorganizó el trabajo: cada operario debía hacer una tarea específica, de una manera específica, en un tiempo específico.\n\nLa producción se triplicó. Los salarios subieron. La fábrica ganó mucho más dinero.\n\nTaylor no inventó nada mágico. Solo aplicó orden donde había caos. A eso se le llamó administración científica del trabajo, y cambió el mundo."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Aplicá las cuatro funciones a organizar un partido de fútbol en el patio:\n• ¿Cómo planificarías?\n• ¿Cómo organizarías los equipos?\n• ¿Cómo dirigirías durante el partido?\n• ¿Cómo controlarías que se cumplan las reglas?\n\nMaterial para dictar: La administración es la ciencia que estudia cómo organizar los recursos de una organización para lograr sus objetivos de manera eficiente. Tiene cuatro funciones básicas: 1. Planificar: decidir qué se va a hacer, cuándo y cómo. 2. Organizar: distribuir las tareas y los recursos entre las personas. 3. Dirigir: guiar y motivar a las personas para que hagan su trabajo. 4. Controlar: verificar que todo salga según lo planeado y corregir si hay errores. Estas cuatro funciones se aplican en cualquier organización: una empresa, una escuela, un equipo de fútbol, una familia."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Cuál de las cuatro funciones les parece la más difícil? ¿Por qué?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué hizo Taylor para mejorar la producción de la fábrica?",
              opciones: [
                "Contrató más obreros",
                "Compró máquinas más caras",
                "Midió cada tarea y reorganizó el trabajo con orden claro",
                "Redujo los sueldos"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Cuáles son las 4 funciones básicas de la administración?",
              opciones: [
                "Comprar, vender, cobrar, pagar",
                "Planificar, organizar, dirigir y controlar",
                "Hablar, escuchar, escribir y leer",
                "Contratar, capacitar, pagar y despedir"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué significa la función 'controlar' en la administración?",
              opciones: [
                "Vigilar a los empleados con cámaras",
                "Verificar que todo salga según lo planeado y corregir si hay errores",
                "Darle órdenes al personal todo el tiempo",
                "Solo revisar las cuentas de dinero"
              ],
              correcta: 1
            },
            {
              id: 4,
              texto: "¿En qué tipo de organización se aplican las 4 funciones de la administración?",
              opciones: [
                "Solo en empresas grandes",
                "Solo en fábricas industriales",
                "En cualquier organización: empresa, escuela, equipo de fútbol, familia",
                "Solo cuando hay muchos empleados"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 7,
          titulo: "¿Qué es gestionar?",
          subtitulo: "Organizar y manejar recursos con un objetivo",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Hoy vamos a hablar de una palabra que van a usar mucho: gestionar. ¿Alguien sabe qué significa? ¿Alguna vez dijeron 'voy a gestionar algo'?"
            },
            {
              tipo: "historia",
              titulo: "La mujer que gestionaba todo (20 min)",
              texto: "Elena vivía en un barrio complicado. Tenía tres hijos, trabajaba limpiando casas y además cuidaba a su mamá enferma. Ganaba poco.\n\nSin embargo, Elena nunca le faltaba nada a sus hijos. Siempre había comida. Siempre estaban limpios. Siempre llegaban al colegio.\n\nUna vecina le preguntó un día: 'Elena, ¿cómo hacés?' Elena se rió. '¿Cómo hago qué?' 'Para que todo funcione con tan poco.' Elena pensó un momento y dijo: 'Supongo que organizo bien lo que tengo. Primero lo que no puede faltar: la comida y el colegio. Después lo demás. Si llega dinero extra, lo guardo. Si falta, sé de dónde sacar. Y nunca me compro algo que no necesito mientras falte algo que sí necesito.'\n\nElena nunca estudió administración. Pero gestionaba mejor que muchos gerentes."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Pensá en tu propia vida. Respondé con al menos 15 líneas:\n• ¿Qué gestionás todos los días?\n• ¿Qué recursos tenés?\n• ¿Cuáles son tus objetivos?\n• ¿Qué harías diferente para gestionar mejor?\n\nMaterial para dictar: Gestionar significa organizar y manejar los recursos disponibles para alcanzar un objetivo. Los recursos pueden ser: dinero, tiempo, personas, materiales, información. Gestionar bien no significa tener mucho. Significa usar bien lo que se tiene. La gestión es una habilidad que se aprende y se mejora con la práctica. Cualquier persona que tenga un objetivo y recursos limitados está gestionando, aunque no lo llame así."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Creen que gestionar bien es una ventaja en la vida? ¿En qué situaciones?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué significa gestionar?",
              opciones: [
                "Tener mucho dinero y muchos recursos",
                "Organizar y manejar los recursos disponibles para alcanzar un objetivo",
                "Estudiar administración en la universidad",
                "Algo que solo pueden hacer los jefes y gerentes"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Por qué Elena gestionaba bien aunque ganaba poco?",
              opciones: [
                "Porque recibía ayuda del gobierno",
                "Porque tenía muchos ahorros",
                "Porque sabía priorizar y usar bien lo que tenía",
                "Porque sus hijos la ayudaban a trabajar"
              ],
              correcta: 2
            },
            {
              id: 3,
              texto: "¿Qué es gestionar bien según lo que aprendimos?",
              opciones: [
                "Tener la mayor cantidad de recursos posible",
                "No significa tener mucho, sino usar bien lo que se tiene",
                "Contratar a muchas personas",
                "Gastar todo el dinero disponible"
              ],
              correcta: 1
            }
          ]
        },
        {
          id: 8,
          titulo: "Los recursos de una organización",
          subtitulo: "Los cinco tipos de recursos",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Para gestionar, necesitás recursos. Hoy vamos a ver cuáles son los recursos que tiene cualquier organización, desde una empresa multinacional hasta un kiosco del barrio."
            },
            {
              tipo: "historia",
              titulo: "Los cinco cofres (20 min)",
              texto: "Había una vez un hombre sabio que quería enseñarle a su hijo a manejar un negocio. Le dio cinco cofres y le dijo: 'Estos cinco cofres son todo lo que necesitás para que cualquier negocio funcione. Si cuidás los cinco, el negocio prospera. Si descuidás uno solo, el negocio empieza a fallar.'\n\n• El primer cofre era de oro: adentro estaba el dinero.\n• El segundo cofre era de madera: adentro estaban las herramientas y los materiales.\n• El tercer cofre era de tela: adentro estaban las personas, el equipo humano.\n• El cuarto cofre era de vidrio: adentro estaba la información, lo que se sabe del negocio y del mercado.\n• El quinto cofre era de arena: adentro estaba el tiempo.\n\n'Papá', dijo el hijo, '¿cuál es el más importante?' El viejo respondió: 'El de arena. El tiempo es el único que no se puede recuperar. Podés ganar más dinero, conseguir más materiales, contratar más personas, buscar más información. Pero el tiempo que perdiste no vuelve nunca.'"
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Imaginá que querés abrir un kiosco. Hacé una lista de los recursos que necesitarías para cada categoría:\n• ¿Qué personas necesitás?\n• ¿Cuánto dinero?\n• ¿Qué materiales?\n• ¿Qué información?\n• ¿Cuánto tiempo?\n\nMaterial para dictar: Toda organización maneja cinco tipos de recursos: 1. Recursos humanos: las personas que trabajan en la organización. 2. Recursos financieros: el dinero, el capital, los ingresos. 3. Recursos materiales: las máquinas, herramientas, insumos, instalaciones. 4. Recursos de información: los datos, los registros, el conocimiento. 5. Recursos temporales: el tiempo disponible para hacer las cosas. Gestionar bien una organización significa administrar estos cinco recursos de manera equilibrada."
            },
            {
              tipo: "debate",
              titulo: "Cierre del Módulo 2 (20 min)",
              texto: "Repaso oral: hablamos de la Revolución Industrial, de las funciones de la administración, de qué es gestionar y de los recursos. ¿Qué se llevan de este módulo?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Cuáles son los 5 tipos de recursos que tiene una organización?",
              opciones: [
                "Agua, luz, gas, internet y teléfono",
                "Humanos, financieros, materiales, de información y temporales",
                "Directivos, empleados, clientes, proveedores y socios",
                "Edificio, muebles, computadoras, vehículos y ropa"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "Según el cuento del hombre sabio, ¿cuál es el recurso más valioso y por qué?",
              opciones: [
                "El dinero, porque con él se compra todo",
                "Las personas, porque son el motor del negocio",
                "El tiempo, porque es el único que no se puede recuperar",
                "La información, porque es poder"
              ],
              correcta: 2
            },
            {
              id: 3,
              texto: "Si un kiosco tiene dinero y materiales pero no tiene personas que lo atiendan, ¿qué recurso le falta?",
              opciones: [
                "Recursos financieros",
                "Recursos materiales",
                "Recursos humanos",
                "Recursos de información"
              ],
              correcta: 2
            },
            {
              id: 4,
              texto: "¿Qué significa gestionar bien los cinco recursos?",
              opciones: [
                "Tener la mayor cantidad de cada uno",
                "Administrarlos de manera equilibrada para lograr el objetivo",
                "Gastar primero el dinero y después buscar el resto",
                "Solo preocuparse por el dinero y las personas"
              ],
              correcta: 1
            }
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Los sistemas de gestión",
      subtitulo: "De la idea al sistema",
      clases: "9–12",
      color: "#633806",
      colorAccent: "#ef9f27",
      colorLight: "#f8d08a",
      icon: "📊",
      clases_lista: [
        {
          id: 9,
          titulo: "¿Qué es un sistema de gestión?",
          subtitulo: "Definición y aplicación práctica",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Ya sabemos qué es un sistema. Ya sabemos qué es gestionar. Ahora juntamos las dos cosas: sistema de gestión. Hoy vamos a ver qué significa eso exactamente."
            },
            {
              tipo: "historia",
              titulo: "El almacén de los dos hermanos (20 min)",
              texto: "Dos hermanos abrieron un almacén juntos. El mayor, Héctor, era muy trabajador pero caótico: llevaba las cuentas en papelitos, compraba lo que creía que faltaba sin verificar el depósito, y a veces compraba mercadería que ya tenía de sobra mientras se quedaba sin lo que más se vendía.\n\nEl menor, Ramiro, propuso algo: 'Vamos a tener un cuaderno de stock. Cada vez que entra algo, lo anotamos. Cada vez que sale algo, lo anotamos. Así siempre sabemos qué tenemos y qué nos falta.' También propuso otro cuaderno para las cuentas: entradas y salidas de dinero, todos los días.\n\nHéctor al principio protestó. 'Es mucho trabajo.' Ramiro insistió.\n\nAl año, el almacén de los hermanos era el más organizado del barrio. Nunca les faltaba nada. Nunca compraban de más. Y las cuentas siempre cerraban.\n\nLo que Ramiro propuso fue un sistema de gestión. No era tecnología. Eran dos cuadernos y disciplina."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Diseñá en el cuaderno un sistema de gestión muy simple para uno de estos casos:\n• Una biblioteca de libros prestados entre amigos\n• Un equipo de limpieza de una cancha de fútbol\n• Un grupo de personas que cocinan juntas todos los días\n\nPara el caso elegido, respondé:\n• ¿Qué procesos tendría?\n• ¿Qué registros llevarías?\n• ¿Qué controles harías?\n\nMaterial para dictar: Un sistema de gestión es una manera organizada y sistemática de dirigir y controlar una organización para lograr sus objetivos. Incluye: Procesos definidos: pasos claros para hacer las cosas. Registros: anotaciones de lo que pasa. Controles: verificaciones de que todo funciona bien. Mejoras: cambios para hacerlo mejor. Un sistema de gestión no requiere tecnología. Puede ser tan simple como dos cuadernos bien llevados. Lo importante es que sea consistente: que se use siempre, no solo cuando hay tiempo o ganas."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Por qué creen que muchos negocios fracasan aunque tienen buenas ideas? ¿Tiene que ver con lo que vimos hoy?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué propuso Ramiro para mejorar el almacén?",
              opciones: [
                "Comprar una computadora cara",
                "Contratar más empleados",
                "Llevar cuadernos de registro de stock y cuentas",
                "Abrir otro almacén en el barrio"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Qué es un sistema de gestión?",
              opciones: [
                "Un programa de computadora muy sofisticado",
                "Una manera organizada y sistemática de dirigir y controlar una organización para lograr sus objetivos",
                "Algo que solo sirve para empresas con muchos empleados",
                "Un sistema de vigilancia para controlar trabajadores"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Necesita tecnología un sistema de gestión para funcionar?",
              opciones: [
                "Sí, sin computadora no hay sistema de gestión",
                "No, puede ser tan simple como cuadernos bien llevados con disciplina",
                "Solo si la empresa gana mucho dinero",
                "Sí, siempre necesita al menos un celular con internet"
              ],
              correcta: 1
            }
          ]
        },
        {
          id: 10,
          titulo: "Los procesos",
          subtitulo: "Cómo fluye el trabajo en una organización",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "La palabra proceso la van a escuchar mucho en el mundo laboral. Hoy la vamos a entender de una vez para siempre con ejemplos muy simples."
            },
            {
              tipo: "historia",
              titulo: "El cocinero nuevo (20 min)",
              texto: "Don Aurelio contrató a un cocinero nuevo para su restaurante. El primer día, el cocinero llegó confiado. Sabía cocinar bien.\n\nEl problema apareció a la hora del almuerzo. Llegaron veinte clientes al mismo tiempo. El cocinero entró en pánico: no sabía por dónde empezar. Empezó a cocinar todo a la vez. Algunas cosas se quemaron. Otras quedaron frías. Los clientes esperaron más de una hora.\n\nEsa noche, Don Aurelio se sentó con el cocinero y le preguntó: '¿Cómo cocinás en tu casa?' El cocinero explicó: 'Primero prendo el fuego. Después corto las verduras mientras se calienta la sartén. Mientras el arroz hierve, preparo la carne.' Don Aurelio lo miró y dijo: 'Eso que acabás de describir es un proceso. Tenés que hacer lo mismo acá, pero para veinte personas. Escribilos. Un paso a la vez.'\n\nAl día siguiente, el cocinero escribió el proceso de cada plato. El servicio fue perfecto."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Describí el proceso completo de uno de estos casos. Escribí cada paso con un número. Sé lo más detallado posible:\n• Cómo se hace el mate\n• Cómo se lava la ropa a mano\n• Cómo se atiende a un cliente en un kiosco\n\nMaterial para dictar: Un proceso es una secuencia de pasos o actividades que se realizan en un orden determinado para transformar una entrada en una salida. Características de un buen proceso: tiene un inicio y un fin claros. Los pasos están en orden. Cada paso tiene un responsable. El resultado es predecible y repetible. Los procesos son la base de cualquier sistema de gestión. Cuando los procesos están bien definidos, cualquier persona puede hacer el trabajo aunque nunca lo haya hecho antes."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Qué pasa cuando una persona hace algo sin seguir un proceso? ¿Y cuando sigue el proceso al pie de la letra pero sin pensar?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Por qué le fue mal al cocinero nuevo el primer día?",
              opciones: [
                "Porque no sabía cocinar",
                "Porque los clientes eran muy difíciles",
                "Porque no tenía un proceso definido para cuando llegaban muchos clientes a la vez",
                "Porque Don Aurelio no lo ayudó"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Qué es un proceso?",
              opciones: [
                "Un problema complicado que hay que resolver",
                "Una secuencia de pasos en orden determinado para transformar una entrada en una salida",
                "Solo las tareas que hace una computadora",
                "Un documento legal o judicial"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué beneficio tiene tener los procesos bien definidos?",
              opciones: [
                "Que nadie puede hacer el trabajo excepto el experto",
                "Que cualquier persona puede hacer el trabajo aunque nunca lo haya hecho antes",
                "Que se necesitan menos empleados",
                "Que el trabajo se hace solo sin supervisión"
              ],
              correcta: 1
            }
          ]
        },
        {
          id: 11,
          titulo: "El control",
          subtitulo: "Cómo verificar que todo funcione correctamente",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "¿Alguien sabe qué es el control de calidad? Hoy vamos a hablar de control. No del control como vigilancia, sino del control como herramienta para mejorar."
            },
            {
              tipo: "historia",
              titulo: "El puente que casi cae (20 min)",
              texto: "En 1940, en los Estados Unidos, un ingeniero construyó un puente enorme. Era moderno, bello y parecía perfecto. Cuatro meses después de inaugurado, el puente colapsó. No hubo muertos de milagro.\n\n¿Qué falló? No fue el diseño. El diseño era correcto. Falló el control. Nadie había verificado que el puente aguantara el viento fuerte. Nadie había probado cómo vibraba con cargas reales. Nadie había controlado el proceso de construcción paso a paso.\n\nDespués de ese desastre, en todo el mundo se estableció algo nuevo: el control de calidad obligatorio. Ya no alcanzaba con hacer algo bien. Había que verificar, medir, testear y confirmar que estaba bien.\n\nHoy, todos los productos que se fabrican en el mundo pasan por algún tipo de control. Desde el pan de la panadería hasta el avión en el que viajás."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Escribí 5 ejemplos de control que existen en la vida cotidiana. Para cada uno, decí:\n• ¿Qué se mide?\n• ¿Qué se compara?\n• ¿Qué pasa si no está bien?\n\nEjemplo orientador: Peso del pan en la panadería: se pesa cada pan (mide), se compara con el peso que debería tener (compara), si pesa menos lo mandan a rehacer o se descuenta del precio (actúa).\n\nMaterial para dictar: El control es la función de gestión que consiste en verificar que las actividades se están realizando según lo planificado y tomar medidas correctivas cuando hay desvíos. El control tiene tres pasos: 1. Medir: obtener información sobre lo que está pasando. 2. Comparar: verificar si lo que pasa es lo que debería pasar. 3. Actuar: corregir si hay diferencias. Sin control, un sistema de gestión no sirve. Podés tener los mejores procesos del mundo, pero si nadie verifica que se cumplan, de nada sirven."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Alguien controló alguna vez algo en su trabajo o en su vida? ¿Qué pasó cuando encontraron un error?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué falló en el puente que colapsó en 1940?",
              opciones: [
                "El diseño del puente",
                "El control: nadie verificó que el proceso de construcción fuera correcto",
                "Los materiales de construcción",
                "El ingeniero que lo construyó"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Cuáles son los 3 pasos del control?",
              opciones: [
                "Planificar, hacer y verificar",
                "Medir, comparar y actuar",
                "Contratar, supervisar y despedir",
                "Pensar, decidir y ejecutar"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué pasa si tenemos excelentes procesos pero nadie verifica que se cumplan?",
              opciones: [
                "El sistema funciona perfecto igual",
                "Los procesos se mejoran solos",
                "El sistema de gestión no sirve de nada",
                "Los empleados lo hacen bien de todas formas"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 12,
          titulo: "La mejora continua",
          subtitulo: "El ciclo PHVA y la actitud de mejorar siempre",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Las mejores organizaciones del mundo no están satisfechas con hacer las cosas bien una vez. Quieren hacerlas mejor cada vez. Eso tiene un nombre: mejora continua."
            },
            {
              tipo: "historia",
              titulo: "El zapatero que nunca dejó de aprender (20 min)",
              texto: "Don Isidro era el mejor zapatero del barrio. Desde los 20 años hacía zapatos. A los 60, sus zapatos seguían siendo los mejores.\n\nUn día un cliente joven le preguntó: 'Don Isidro, usted ya sabe todo. ¿Para qué sigue aprendiendo?' El viejo zapatero se rió. Señaló un par de zapatos que estaba terminando y dijo: '¿Ves este par? Lo hice mejor que el par de la semana pasada. Y el de la semana que viene lo voy a hacer mejor que este.'\n\n'¿Pero por qué? Ya son perfectos.'\n\n'Perfecto no existe. Existe mejor. Y si yo paro de mejorar, alguien que no paró me va a superar. En los negocios, en la vida, en todo: el que se detiene, retrocede.'\n\nCuando murió Don Isidro, sus zapatos del último año eran tan superiores a los del primero que costaba creer que los había hecho la misma persona."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Elegí algo de tu vida que podrías mejorar (puede ser una habilidad, un hábito, una forma de relacionarte). Aplicá el ciclo PHVA:\n• Planificar: ¿Qué querés mejorar y cómo lo vas a hacer?\n• Hacer: ¿Qué acción concreta vas a tomar?\n• Verificar: ¿Cómo vas a saber si mejoró?\n• Actuar: ¿Qué ajustarías si no funciona?\n\nMaterial para dictar: La mejora continua es el proceso permanente de buscar formas de hacer las cosas mejor, con menos errores y con más calidad. El ciclo de mejora continua tiene cuatro pasos, conocidos como PHVA: 1. Planificar (P): identificar un problema o una oportunidad de mejora y planear cómo resolverlo. 2. Hacer (H): implementar la solución en pequeña escala. 3. Verificar (V): medir los resultados. 4. Actuar (A): si funcionó, aplicar la mejora a toda la organización. Si no funcionó, volver al primer paso. La mejora continua no es solo para las empresas. Es una actitud de vida."
            },
            {
              tipo: "debate",
              titulo: "Cierre del Módulo 3 (20 min)",
              texto: "Repaso oral: ¿Qué es un sistema de gestión? ¿Qué son los procesos? ¿Para qué sirve el control? ¿Qué es la mejora continua?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué actitud tenía Don Isidro hacia su trabajo a los 60 años?",
              opciones: [
                "Que ya sabía todo y no necesitaba aprender más",
                "Que siempre buscaba mejorar sus zapatos, semana tras semana",
                "Que se había cansado de trabajar tanto",
                "Que quería enseñarle a alguien más joven"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Qué significa el ciclo PHVA?",
              opciones: [
                "Producir, Hablar, Verificar, Administrar",
                "Planificar, Hacer, Verificar, Actuar",
                "Preparar, Hacer, Ver, Ajustar",
                "Plan, Help, View, Apply"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "Si en la fase VERIFICAR el plan no funcionó, ¿qué se hace?",
              opciones: [
                "Se abandona el intento de mejorar",
                "Se aplica igual a toda la organización",
                "Se vuelve al primer paso y se ajusta el plan",
                "Se culpa a los empleados"
              ],
              correcta: 2
            },
            {
              id: 4,
              texto: "¿La mejora continua es solo para las empresas?",
              opciones: [
                "Sí, solo aplica en contextos empresariales",
                "No, es una actitud de vida que cualquier persona puede aplicar",
                "Solo para empresas con más de 50 empleados",
                "Solo cuando hay una crisis o problema grave"
              ],
              correcta: 1
            }
          ]
        }
      ]
    },
    {
      id: 4,
      titulo: "Aplicación práctica",
      subtitulo: "Simulación, errores y proyecto final",
      clases: "13–16",
      color: "#712b13",
      colorAccent: "#f0997b",
      colorLight: "#f8c9b8",
      icon: "🎯",
      clases_lista: [
        {
          id: 13,
          titulo: "Simulación: armamos un negocio",
          subtitulo: "Aplicar todos los conceptos en práctica grupal",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Hoy no voy a explicar nada. Hoy van a hacer ustedes. Vamos a armar un negocio acá adentro."
            },
            {
              tipo: "ejercicio",
              titulo: "Dinámica de simulación (50 min)",
              texto: "Nos dividimos en equipos de 4 o 5 personas. Cada equipo elige un negocio simple:\n• Kiosco\n• Panadería\n• Taller mecánico\n• Servicio de mandados\n\nCada equipo debe:\n1. Darle un nombre al negocio.\n2. Definir qué hace y a quién le vende.\n3. Asignar roles: encargado, compras, ventas, control.\n4. Definir al menos 2 procesos (cómo se atiende un cliente, cómo se repone el stock).\n5. Decir cómo van a controlar que todo funcione.\n6. Decir cómo van a mejorar si algo sale mal.\n\nCada grupo expone en 5 minutos."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Qué fue lo más difícil de ponerse de acuerdo?\n\n¿Qué pasaría si en un equipo real alguien no hace su parte?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "Al armar el negocio en la simulación, ¿para qué sirvió asignar roles a cada persona del equipo?",
              opciones: [
                "Para que algunos no trabajaran",
                "Para que cada uno supiera qué tenía que hacer y no hubiera confusión",
                "Para que el encargado pudiera hacer todo él solo",
                "Era solo un requisito del ejercicio sin utilidad real"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Qué pasa en un equipo de trabajo cuando alguien no cumple con su parte?",
              opciones: [
                "Nada, los demás no se enteran",
                "El sistema falla y los demás deben compensar o el negocio sufre",
                "El trabajo se hace igual sin ese integrante",
                "El encargado puede hacer todas las tareas solo"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Cuáles de los conceptos del curso estaban aplicando al definir los procesos del negocio?",
              opciones: [
                "Solo la historia de la Revolución Industrial",
                "Los cinco cofres del hombre sabio",
                "El esquema entrada-proceso-salida y los pasos definidos en orden",
                "Solo la historia de Don Ramón"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 14,
          titulo: "Los errores de gestión",
          subtitulo: "Aprender a identificar y corregir problemas",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Hasta ahora vimos cómo funciona un buen sistema de gestión. Hoy vamos a ver qué pasa cuando falla. Porque conocer los errores es tan importante como conocer los aciertos."
            },
            {
              tipo: "historia",
              titulo: "La empresa que tenía todo y lo perdió (20 min)",
              texto: "La empresa de transporte Los Andes era la más grande de la región. Tenía 50 camiones, 80 choferes y contratos con las mejores empresas.\n\nEn tres años, quebró.\n\nUn periodista investigó y encontró cuatro problemas:\n\nPrimero: nadie controlaba el combustible. Los choferes cargaban más del que necesitaban y la diferencia desaparecía. En un año, perdieron el equivalente a 10 camiones en combustible robado.\n\nSegundo: no había comunicación entre el área de ventas y el área de operaciones. Ventas prometía entregas que operaciones no podía cumplir. Los clientes se fueron.\n\nTercero: nunca capacitaron a los nuevos choferes. Los accidentes aumentaron. Los seguros subieron. Los costos también.\n\nCuarto: el dueño tomaba todas las decisiones solo y no delegaba. Cuando se enfermó tres meses, la empresa no supo funcionar sin él.\n\nCuatro problemas que tienen nombre: falta de control, mala comunicación, falta de formación y mala gestión del poder."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Volvé al negocio que diseñaste en la clase anterior. Imaginá que pasan 6 meses y el negocio empieza a tener problemas.\n\n• ¿Cuáles serían los 3 errores de gestión más probables?\n• ¿Cómo los resolverías?\n\nMaterial para dictar: Los errores más comunes en gestión son: 1. Falta de planificación: actuar sin pensar antes. 2. Mala comunicación: que la información no llegue a quien la necesita. 3. Falta de control: no verificar que las cosas se hagan bien. 4. No delegar: una persona quiere hacer todo y nada sale bien. 5. Resistencia al cambio: negarse a mejorar aunque algo no funcione."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Conocen algún ejemplo real de un negocio, una institución o una organización que fracasó por mala gestión? ¿Qué le cambiarían?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Cuántos errores de gestión llevaron a la quiebra a la empresa Los Andes?",
              opciones: [
                "Uno: les robaban combustible",
                "Dos: falta de control y mala comunicación",
                "Cuatro: falta de control, mala comunicación, falta de formación y no delegar",
                "Cinco: todos los errores de gestión al mismo tiempo"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Qué consecuencia tuvo que el dueño de Los Andes no delegara decisiones?",
              opciones: [
                "Que la empresa ahorró mucho dinero",
                "Que cuando él se enfermó, nadie supo cómo tomar decisiones y la empresa no funcionó",
                "Que los empleados trabajaban más motivados",
                "Que la empresa creció más rápido"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Cuál de estos es un error de gestión?",
              opciones: [
                "Verificar que los procesos se cumplan",
                "Comunicar las novedades a todo el equipo",
                "Actuar sin planificar y sin pensar antes",
                "Capacitar a los empleados nuevos"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 15,
          titulo: "Los sistemas de gestión hoy",
          subtitulo: "Tecnología, digitalización y mundo laboral",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Todo lo que aprendimos en este curso existía antes de que hubiera computadoras. Pero hoy, la tecnología amplió enormemente las posibilidades. Vamos a ver cómo."
            },
            {
              tipo: "historia",
              titulo: "El supermercado que nunca se queda sin stock (20 min)",
              texto: "¿Alguno se preguntó alguna vez cómo hace un supermercado grande para tener siempre todo? Miles de productos, todo el tiempo, sin que falte casi nada.\n\nLa respuesta es un sistema de gestión informático llamado ERP, que significa Planificación de Recursos Empresariales. Cada vez que alguien paga algo en la caja, el sistema registra automáticamente qué producto salió. Cuando un producto llega a un mínimo de stock, el sistema genera automáticamente una orden de compra al proveedor. Cuando el camión del proveedor llega, el sistema registra la entrada.\n\nEl encargado no tiene que acordarse de nada. El sistema lo hace por él. Pero hay algo importante: el sistema no toma decisiones. Solo ejecuta lo que alguien programó que hiciera. Detrás de ese sistema, hay personas que diseñaron los procesos, definieron los controles y decidieron las reglas. Sin personas que entiendan de gestión, el sistema más sofisticado del mundo no sirve para nada."
            },
            {
              tipo: "ejercicio",
              titulo: "Ejercicio de cuaderno (30 min)",
              texto: "Investigá con el celular (o pensá vos mismo): ¿Cómo usa la tecnología para gestionar uno de estos negocios?\n• Un banco\n• Una farmacia\n• Una empresa de delivery\n• Un hospital\n\nEscribí al menos 10 líneas sobre qué sistemas usan y para qué.\n\nMaterial para dictar: Hoy existen sistemas de gestión informatizados que ayudan a las organizaciones a administrar sus recursos. Los más conocidos son: ERP: planificación de recursos empresariales. CRM: gestión de clientes. Sistemas de logística y distribución. Sistemas de calidad. Sistemas de gestión financiera. Sin embargo, todos estos sistemas se basan en los mismos principios que aprendimos: procesos, control, mejora continua y gestión de recursos. La tecnología automatiza el proceso. Pero el proceso lo diseñan personas. Por eso, entender los fundamentos de la gestión es una ventaja enorme en el mundo laboral actual."
            },
            {
              tipo: "debate",
              titulo: "Cierre y debate (20 min)",
              texto: "¿Creen que saber de gestión les puede servir para algo cuando salgan? ¿En qué situaciones?"
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Qué es un ERP?",
              opciones: [
                "Un tipo de camión de reparto",
                "Un sistema de planificación de recursos empresariales",
                "Una empresa de delivery de comida",
                "Una marca de computadoras"
              ],
              correcta: 1
            },
            {
              id: 2,
              texto: "¿Puede un sistema informático reemplazar completamente a las personas en la gestión?",
              opciones: [
                "Sí, los sistemas modernos no necesitan personas",
                "No, las personas diseñan los procesos, definen los controles y toman las decisiones",
                "Sí, pero solo en empresas muy grandes",
                "Depende del presupuesto de la empresa"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Por qué lo que aprendimos en este curso sigue siendo útil en la era de la tecnología?",
              opciones: [
                "No es útil, la tecnología cambió todo",
                "Solo sirve para trabajar en lugares sin computadoras",
                "Porque todos los sistemas tecnológicos se basan en los mismos principios: procesos, control y mejora continua",
                "Solo si trabajás en una empresa con ERP"
              ],
              correcta: 2
            }
          ]
        },
        {
          id: 16,
          titulo: "Evaluación final y proyecto",
          subtitulo: "Integrar todo lo aprendido",
          duracion: "80 min",
          contenido: [
            {
              tipo: "apertura",
              titulo: "Apertura (10 min)",
              texto: "Esta es la última clase. No voy a explicar nada nuevo. Esta clase es de ustedes. Van a mostrar todo lo que aprendieron."
            },
            {
              tipo: "ejercicio",
              titulo: "Proyecto final (40 min)",
              texto: "Cada alumno diseña en el cuaderno un sistema de gestión para un negocio o emprendimiento propio. Pueden elegir cualquier cosa: kiosco, taller, servicio de comida, transporte, reparaciones.\n\nEl proyecto debe incluir:\n\n1. Nombre y descripción del negocio: ¿Qué hace? ¿A quién le vende?\n\n2. Recursos necesarios: ¿Qué personas, dinero, materiales, información y tiempo necesita?\n\n3. Procesos principales: Al menos 2 procesos descriptos paso a paso.\n\n4. Sistema de control: ¿Qué van a verificar? ¿Con qué frecuencia?\n\n5. Plan de mejora: ¿Cómo van a mejorar si algo no funciona?"
            },
            {
              tipo: "debate",
              titulo: "Exposición y cierre del curso (30 min)",
              texto: "Pedir voluntarios para que presenten su proyecto. Como mínimo, que lean la descripción del negocio y los procesos.\n\nEmpezamos hablando de la cocina de Don Ramón. Terminamos diseñando sistemas de gestión propios. Eso es lo que aprendieron en este curso.\n\nUn sistema de gestión no es algo complicado. Es una manera ordenada de hacer las cosas. Y eso puede aplicarse en cualquier parte: en un negocio, en una familia, en la vida.\n\nEl que sabe organizarse tiene ventaja. Siempre."
            }
          ],
          preguntas: [
            {
              id: 1,
              texto: "¿Cuántos elementos debe tener el proyecto final del curso?",
              opciones: [
                "Dos: nombre del negocio y procesos",
                "Tres: descripción, recursos y procesos",
                "Cinco: descripción, recursos, procesos, control y plan de mejora",
                "Solo uno: la descripción del negocio"
              ],
              correcta: 2
            },
            {
              id: 2,
              texto: "¿Cuál fue la primera historia del curso y qué enseñó?",
              opciones: [
                "El ejército que no tenía general: que la fuerza no alcanza sin organización",
                "La cocina de Don Ramón: que el desorden tiene un costo real para cualquier organización",
                "Los Tigres del Sur: que el talento individual no alcanza sin sistema",
                "El panadero y el inspector: que todo tiene entrada, proceso y salida"
              ],
              correcta: 1
            },
            {
              id: 3,
              texto: "¿Qué habilidad principal desarrollaron en este curso?",
              opciones: [
                "Programar aplicaciones de computadora",
                "Gestionar sistemas informáticos avanzados",
                "Entender y aplicar los principios de organización y gestión en cualquier contexto",
                "Diseñar máquinas industriales"
              ],
              correcta: 2
            },
            {
              id: 4,
              texto: "Según todo lo que aprendieron, ¿dónde se puede aplicar un sistema de gestión?",
              opciones: [
                "Solo en empresas grandes",
                "Solo en fábricas con muchos empleados",
                "En cualquier parte: un negocio, una familia, la vida personal",
                "Solo donde hay computadoras"
              ],
              correcta: 2
            },
            {
              id: 5,
              texto: "Para completar el cuestionario de la Clase 16, respondé con honestidad: ¿Participaste y realizaste las actividades de hoy?",
              opciones: [
                "Sí, participé en la clase y realicé las actividades",
                "No, estuve ausente",
                "Completé algunas partes",
                "Vine pero no participé"
              ],
              correcta: 0
            }
          ]
        }
      ]
    }
  ]
};
