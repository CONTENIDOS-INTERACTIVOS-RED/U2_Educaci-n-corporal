<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Movimientos corporales:  Habilidades motrices (saltar, correr, trepar, rodar, hacer volteretas)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5
        .row.mb-4
          .col-12.col-xl-8
            p.mb-4 Los <b>movimientos corporales</b> son acciones físicas realizadas por el cuerpo humano que permiten interactuar con el entorno. Estos pueden ser <b>voluntarios</b> (como correr o saltar) o <b>involuntarios</b> (como los reflejos). Por otro lado, las <b>habilidades motrices</b> son capacidades adquiridas que permiten ejecutar movimientos específicos de manera eficaz, desarrollándose mediante la práctica y la experiencia (Toral, Batista y García, 2018).
            .d-flex.bg-azul-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
              img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
              .my-auto.p-4.p-xl-0
                p.pe-xl-3.mb-0 Castañer et al. (2008) utilizan una metáfora para explicar el movimiento humano: lo comparan con una <b>orquesta</b>, donde cada acción motriz es como una <b>nota musical</b>. Así como una canción se compone de muchas notas tocadas por diferentes instrumentos, el movimiento humano se construye con <b>acciones motrices singulares</b>, pequeños movimientos que, al combinarse, dan lugar a acciones más complejas como correr, lanzar o escribir.
            span El <b>lenguaje corporal</b> es considerado el "idioma" del movimiento. Su unidad más básica es el <i>cine</i>, que equivale a una <b>"letra" en el alfabeto del movimiento</b>, como un leve giro de muñeca o una contracción muscular. Al combinar varios <i>cinemas</i> con intención y organización, se forman <b>habilidades motrices</b>, equivalentes a "palabras" o "frases" con significado y propósito (Castañer, et al., 2008). Además, dentro del universo del movimiento corporal existen <b>manifestaciones motrices</b> específicas con características propias:
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
        
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Danza
              p.px-1.text-small.mb-0.text-center Movimientos con carga cultural y estética; siguen una estructura rítmica y simbólica.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Deporte
              p.px-1.text-small.mb-0.text-center Reglas claras, objetivos competitivos; movimientos funcionales y estratégicos.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-6.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Educación física
              p.px-1.text-small.mb-0.text-center Finalidad formativa, desarrollo integral del cuerpo y la motricidad.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-7.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Psicomotricidad
              p.px-1.text-small.mb-0.text-center Enfoque terapéutico y educativo, relaciona el movimiento con la dimensión emocional y cognitiva.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Habilidades motrices

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris.p-4(data-aos="fade-up")
        p.mb-0 El concepto de <b>habilidad motriz</b> ha sido ampliamente debatido en el campo de la educación física y el deporte. Según Rodríguez Naranjo (2021), persiste una <b>confusión conceptual</b> entre <i>habilidad</i> y <i>destreza</i>, con dos posturas principales en la literatura: una que busca diferenciarlas y otra que las trata como sinónimos. Esta ambigüedad ha dado lugar a análisis más profundos sobre sus similitudes y diferencias.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        h2 Diferenciación entre términos (Contreras, 1998, en Rodríguez Naranjo, 2021)
        p En la literatura anglosajona, los términos <i>ability</i> y <i>skill</i> tienen significados diferenciados:

    .row.mb-4
      .col-10.col-md-6.mx-auto
        .d-flex.bg-amarillo-oscuro.h-100.p-3.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-4.mb-2.text-bold <i>Ability</i>
            span Capacidad, talento, aptitud.<br>Rasgo <b>innato</b>, no modificable mediante la práctica.

      .col-10.col-md-6.mx-auto
        .d-flex.bg-amarillo-oscuro.h-100.p-3.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-10.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-4.mb-2.text-bold <i>Skill</i>
            span Habilidad, destreza, técnica, arte.<br><b>Capacidad adquirida</b> que puede desarrollarse y mejorar con el aprendizaje y la práctica.

    
    p.mb-4 Ambos términos comparten la idea de "habilidad", pero su trasfondo conceptual es distinto. Mientras <i>ability</i> implica una base genética o natural, <i>skill</i> refleja una <b>competencia adquirida</b> con intención y práctica.
    p.mb-4.text-bold Las definiciones relevantes de habilidad motriz son: 

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="<b>Gutherie</b> (cit. en Rodríguez Naranjo, 2021)")
            p Habilidad es la capacidad adquirida por aprendizaje de producir resultados previstos con máxima certeza y mínimo uso de tiempo o energía.
          .div(titulo="<b>Generelo y Lapetra</b> (1993)")
            p Capacidad adquirida mediante aprendizaje para ejecutar acciones motrices con un objetivo específico, minimizando gasto de energía y tiempo.
          .div(titulo="<b>Bárbara Knapp</b> (1981)")
            p Capacidad para lograr resultados esperados con alta precisión, usualmente con un uso eficiente del tiempo y energía.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Estas definiciones comparten una visión funcional de la habilidad: su <b>orientación hacia la eficacia</b>, la <b>optimización del esfuerzo</b> y su estrecha relación con el <b>aprendizaje motor</b>.
        .bg-azul-claro.p-4(data-aos='fade-left')
          span Según Rodríguez Naranjo (2021), retomando los planteamientos de Contreras, se considera que:<br><br><b>La habilidad motriz es el resultado del aprendizaje</b>, caracterizándose por su <b>eficacia, flexibilidad y adaptabilidad</b>. Estas habilidades no solo permiten ejecutar acciones, sino que contribuyen al desarrollo de <b>competencias motrices</b>, necesarias para enfrentar diversas situaciones con éxito.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Habilidades motrices básicas y específicas

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-oscuro.p-4(data-aos="fade-up")
        p.mb-0 El desarrollo de las <b>habilidades motrices</b> es un proceso progresivo que está condicionado por factores <b>biológicos, psicológicos y socioculturales</b> (Rodríguez Naranjo, 2021). Desde el nacimiento, el ser humano realiza movimientos reflejos y patrones motores primarios (como gatear o arrastrarse), que evolucionan con la maduración y la interacción con el entorno.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        h2 Habilidades Motrices Básicas (HMB)
        p.mb-4 Las <b>HMB</b> son los cimientos del movimiento humano. Se caracterizan por ser patrones motores fundamentales, poco especializados y comunes a una amplia variedad de actividades. Según Castañer et al. (2008), estas habilidades comprenden tres grandes categorías:
        .row
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Locomoción
                p.text-small.px-4.text-center.pb-2 Caminar, correr, reptar, nadar.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Estabilidad
                p.text-small.px-4.text-center.pb-2 Equilibrio estático y dinámico, giros.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Manipulación
                p.text-small.px-4.text-center.pb-2 Lanzar, atrapar, patear.
    
    .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0 Estas habilidades se adquieren mayoritariamente entre los <b>6 y 12 años</b> (Generelo y Lapetra, 1993, en Rodríguez Naranjo, 2021), y su desarrollo está relacionado con factores físicos y perceptivo-motrices generales.

    .row.mb-4
      .col-12.col-xl-8
        h2 Habilidades Motrices Específicas (HME)
        p.mb-4 Las <b>HME</b> surgen sobre la base de las HMB y se caracterizan por un <b>mayor grado de especificación y tecnificación</b>. Son necesarias para responder eficazmente a demandas concretas, como en el deporte, el arte o el trabajo. Ejemplos de HME son:
        .bg-amarillo.p-4.mb-4(data-aos='fade-up')
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Ejecutar un saque en voleibol.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Patear con precisión en fútbol.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px; height: fit-content;').m-2
            p.mb-0 Realizar una figura técnica en danza.
        span Según Batalla (2000, en Rodríguez Naranjo, 2021), las HME comienzan como habilidades generales que, mediante el aprendizaje sistemático, se vuelven <b>más complejas y especializadas</b>. Su dominio implica un desarrollo físico y perceptivo-motriz más avanzado y se recomienda su enseñanza a partir de los <b>9 años</b>.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Tabla 1.</b> Habilidades Motrices Básicas vs Específicas

    .tabla-a.mb-4
      table
        thead
          tr
            th(width="20%").bg-morado-oscuro.text-white.text-center Aspecto
            th.bg-morado-oscuro.text-white.text-center Habilidades Motrices Básicas (HMB)
            th.bg-morado-oscuro.text-white.text-center Habilidades Motrices Específicas (HME)
        tbody
          tr
            td.bg-morado.text-bold Nivel de especificidad
            td.bg-morado Bajo
            td.bg-morado Alto
          tr
            td.bg-morado.text-bold Ejemplos
            td.bg-morado Correr, saltar, lanzar, girar, gatear
            td.bg-morado Saque en tenis, lanzamiento de jabalina, secuencia de pasos en danza clásica
          tr
            td.bg-morado.text-bold Relación con el desarrollo
            td.bg-morado Se adquieren en la infancia, base para otras habilidades
            td.bg-morado Evolucionan de las HMB mediante tecnificación y práctica
          tr
            td.bg-morado.text-bold Complejidad
            td.bg-morado Simple, general
            td.bg-morado Compleja, adaptada a contextos concretos
          tr
            td.bg-morado.text-bold Enfoque educativo
            td.bg-morado Se enseña entre los 6 y 12 años
            td.bg-morado A partir de los 9 años, con intervención específica
          tr
            td.bg-morado.text-bold Ámbito de aplicación
            td.bg-morado Actividades cotidianas, juego, desarrollo físico general
            td.bg-morado Deporte, arte, trabajo, contextos técnicos o especializados
          tr
            td.bg-morado.text-bold Influencia del entorno
            td.bg-morado Menor (más ligada a maduración biológica)
            td.bg-morado Alta (requiere experiencia, práctica y contexto cultural)

    h2 Importancia del contexto y del proceso educativo

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Rodríguez Naranjo (2021) destaca que tanto las HMB como las HME deben ser <b>enseñadas en etapas adecuadas del desarrollo</b>, adaptándose a la madurez del alumno. Siguiendo a Gesell (1977), la <b>motricidad educativa</b> está estrechamente ligada al proceso de maduración del individuo, influyendo en su personalidad y socialización.
        .d-flex.bg-azul.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-20.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Batalla (2000) también resalta el papel del <b>contexto escolar</b> en el desarrollo motor. El aprendizaje de habilidades motrices comienza con conductas innatas que se complejizan y se especializan con la experiencia y la interacción con el entorno. A medida que el niño avanza en su educación, estas habilidades se adaptan a sus necesidades personales, sociales y culturales, favoreciendo su desarrollo integral.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Los patrones locomotores

    .row.mb-4
      .col-12.col-xl-8
        .bg-azul-oscuro.p-4.mb-4(data-aos='fade-up')
          span Los <b>patrones locomotores</b> son movimientos fundamentales que permiten el desplazamiento del cuerpo de un lugar a otro. Son esenciales en el desarrollo motor de los niños, ya que les ayudan a explorar su entorno, mejorar su coordinación y fortalecer sus habilidades físicas. Según Rodríguez Naranjo (2021), son adquiridos en los primeros años de vida y representan las formas fundamentales de la motricidad humana. La práctica constante de estos patrones lleva al desarrollo de habilidades básicas, que se consolidan como secuencias de movimientos ordenados y precisos. Estos movimientos se vuelven automatizados, permitiendo al niño <b>dominar su entorno y alcanzar la autonomía</b>, lo cual es esencial para su desarrollo.
        span A continuación, se describen los principales <b>patrones locomotores</b>, con sus características, evolución y beneficios según Guerrero (2020):
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    h2 Saltar
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Es una habilidad motriz básica que implica una <b>propulsión explosiva del cuerpo</b> hacia arriba o hacia adelante, generalmente mediante la extensión simultánea de las piernas y el impulso de los pies contra una superficie. Esta acción se caracteriza por una <b>fase de despegue</b>, un periodo de <b>suspensión en el aire</b> y una <b>fase de aterrizaje</b> que requiere control y equilibrio. 
        .bg-azul.p-4.mb-4(data-aos='fade-up')
          span El salto evoluciona significativamente durante la infancia. Los <b>bebés y niños pequeños</b> inicialmente experimentan con pequeños saltos o rebotes. A medida que su fuerza muscular, coordinación y equilibrio mejoran, la altura y la distancia de sus saltos aumentan. Alrededor de los <b>2-3 años</b>, muchos niños pueden realizar saltos con ambos pies. Entre los <b>4 y 6 años</b>, refinan la técnica, aprenden a saltar con un pie, a saltar sobre objetos y a combinar saltos en secuencias de movimiento.
        span Saltar es crucial para el desarrollo de la <b>fuerza muscular</b>, especialmente en las piernas y el tronco. Mejora significativamente el <b>equilibrio y la coordinación</b>, ya que el niño aprende a controlar su cuerpo en el aire y al aterrizar. También fomenta la <b>conciencia espacial</b> y la <b>percepción de la distancia</b>. Además, es una actividad fundamental en el juego libre, permitiendo a los niños <b>explorar su entorno, superar obstáculos y participar en juegos sociales</b>.

    h2 Correr

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Es una habilidad motriz básica que implica un <b>desplazamiento rápido del cuerpo</b> sobre una superficie, caracterizado por una secuencia de pasos alternativos donde, en algún momento, <b>ambos pies están en el aire</b>. Requiere una <b>coordinación compleja</b> de brazos y piernas, así como un <b>control del equilibrio dinámico</b>. 
        .bg-azul-oscuro.p-4.mb-4(data-aos='fade-up')
          span Los primeros intentos de correr suelen ser <b>torpes e inestables</b>. A medida que los niños desarrollan fuerza en las piernas, mejoran su coordinación y equilibrio, su carrera se vuelve más <b>fluida y eficiente</b>. Alrededor de los <b>2-3 años</b>, la mayoría de los niños pueden correr, aunque con pasos cortos y una base de apoyo amplia. Entre los <b>4 y 6 años</b>, su velocidad y resistencia al correr aumentan, y perfeccionan la coordinación de brazos y piernas.
        span Correr es fundamental para el desarrollo de la <b>resistencia física</b> y la <b>capacidad cardiovascular</b>. Fortalece los músculos de las piernas, mejora la <b>coordinación general del cuerpo</b> y desarrolla el <b>equilibrio dinámico</b>. Correr también es esencial para la <b>exploración del entorno</b>, la participación en <b>juegos de persecución</b> y la <b>descarga de energía</b>. Además, sienta las bases para muchas habilidades deportivas posteriores.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    h2 Trepar

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Es una habilidad motriz básica que implica <b>ascender o escalar una superficie vertical o inclinada</b> utilizando las manos y los pies para sujetarse y propulsarse. Requiere <b>fuerza en los brazos, las piernas y el tronco</b>, así como una buena <b>coordinación entre la vista, las manos y los pies</b>. 
        .d-flex.bg-gris.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-25.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Los <b>bebés y niños pequeños</b> muestran un interés natural por trepar sobre objetos bajos. A medida que desarrollan fuerza y coordinación, intentan escalar muebles, estructuras de juego y otros elementos de su entorno. Entre los  <b>2 y 6 años</b>, la capacidad de trepar mejora significativamente, permitiéndoles subir escaleras, trepar árboles bajos o estructuras de juego más complejas.
        span Trepar desarrolla la <b>fuerza muscular en todo el cuerpo</b>, especialmente en los brazos, los hombros, la espalda y las piernas. Mejora la <b>coordinación ojo-mano-pie</b> y la <b>planificación motriz</b>, ya que el niño debe anticipar y coordinar sus movimientos para ascender de manera segura y eficiente. Trepar también fomenta la <b>resolución de problemas</b> y la <b>confianza en sí mismo</b> al superar desafíos físicos.

    h2 Rodar
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 También es una habilidad motriz básica que implica <b>girar el cuerpo continuamente sobre su eje longitudinal</b>, desplazándose sobre una superficie. Puede realizarse hacia adelante, hacia atrás o lateralmente, y requiere un <b>control corporal segmentario</b> y una <b>conciencia del propio cuerpo en el espacio</b>.
        .bg-amarillo.p-4.mb-4(data-aos='fade-up')
          span Los <b>bebés</b> comienzan a rodar de forma involuntaria y luego aprenden a controlarlo alrededor de los <b>6-12 meses</b>. A medida que crecen, los niños exploran diferentes formas de rodar, experimentando con la <b>velocidad y la dirección</b>. Rodar se convierte en una <b>actividad lúdica</b> y una forma de desplazarse.
        span Rodar ayuda a los niños a desarrollar la <b>conciencia corporal</b> y la <b>orientación espacial</b>. Mejora el <b>control muscular</b> y la <b>coordinación</b>, ya que deben aprender a mover diferentes partes del cuerpo de forma sincronizada para mantener el movimiento de rotación. También es una habilidad fundamental para muchas <b>actividades gimnásticas y deportivas</b>, y contribuye al desarrollo del <b>equilibrio dinámico</b>.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    h2 Hacer volteretas

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        p.mb-4 Consiste en <b>girar el cuerpo 360 grados sobre su eje transversal</b>, pasando por una posición invertida con el apoyo de las manos (voltereta hacia adelante) o sin él (voltereta hacia atrás, más compleja). Requiere <b>flexibilidad, fuerza, coordinación</b> y una buena <b>orientación espacial tridimensional</b>.
        .bg-morado.p-4.mb-4(data-aos='fade-up')
          span La mayoría de los niños comienzan intentando la voltereta hacia adelante alrededor de los <b>5-6 años</b>, aunque puede variar según su desarrollo y práctica. Inicialmente, pueden necesitar <b>ayuda y supervisión</b>. La voltereta hacia atrás es una habilidad más avanzada que requiere mayor fuerza, coordinación y conciencia espacial, y suele desarrollarse más tarde.
        span Hacer volteretas mejora la <b>flexibilidad</b>, la <b>fuerza muscular</b> (especialmente en brazos, hombros y tronco) y la <b>coordinación</b>. Desarrolla significativamente la <b>orientación espacial</b>, ya que el niño experimenta su cuerpo en diferentes planos y aprende a controlar su movimiento en el aire. Además, fomenta la <b>confianza en sí mismo</b> y la <b>superación de desafíos</b>, ya que requiere valentía y práctica. Es una habilidad fundamental en <b>gimnasia</b> y otras <b>actividades acrobáticas</b>.    
    .row.bg-fondo-2.bg-full-width.py-4
      div.px-5 

        h2 Importancia integral de los patrones locomotores 
        p.mb-4 Según Rodríguez Naranjo (2021), estos patrones no solo fortalecen el desarrollo <b>físico</b>, sino también el <b>cognitivo, social y emocional</b>. A través del juego y el movimiento, los niños:
        .row.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
              p.text-bold.mb-4.text-center 01
              p.px-1.text-small.mb-0.text-center <b>Exploran</b> su entorno.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style='width: 80px')
              p.text-bold.mb-4.text-center 02
              p.px-1.text-small.mb-0.text-center <b>Interactúan</b> con otros niños.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
              p.text-bold.mb-4.text-center 03
              p.px-1.text-small.mb-0.text-center <b>Desarrollan confianza</b> en sus capacidades.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
              p.text-bold.mb-4.text-center 04
              p.px-1.text-small.mb-0.text-center <b>Construyen las bases</b> para un estilo de vida activo y saludable.

    .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-5(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0 Fomentar el desarrollo de estos patrones desde la <b>primera infancia</b> es esencial para un crecimiento equilibrado y la formación de futuras habilidades motrices más complejas.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/177890?page=28") Aznar Oro, P. Morte Remacha, J. L. & Serrano Ferruz, R. (2021). La educación física en la educación infantil de 3 a 6 años. Editorial INDE.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=vTNOLt4B4W0") [Vídeo] Lorepg _. (2021). Habilidades motrices grupo 2.2
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=pvwA8b9HlIE") [Vídeo] Educagratis. (2021). Juegos para trabajar la psicomotricidad
          
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    p


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
