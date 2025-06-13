<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Gestos del cuerpo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Según Mendiara Rivas (2016), aunque toda actividad humana posee una dimensión psicomotriz, no todo lo que hacemos puede considerarse psicomotricidad. Desde una perspectiva educativa, para que una acción sea psicomotriz deben confluir aspectos específicos que integren lo psicológico, lo corporal y lo relacional. En la infancia, el cuerpo es el primer objeto de percepción: el niño se experimenta a sí mismo en crecimiento dentro de un mundo exterior compuesto por dos ámbitos clave: el mundo de los objetos (espacio, tiempo) y el mundo de los demás (compañeros y adultos).
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-32.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Esta centralidad del cuerpo como medio de percepción en los primeros años de vida explica la relevancia de los <b>gestos corporales y la expresión corporal</b> como vías fundamentales para el desarrollo psicomotriz y la interacción con el entorno. Desde edades muy tempranas, incluso antes del lenguaje verbal, los niños utilizan su cuerpo para comunicarse, expresar necesidades, emociones e intenciones. Movimientos de manos, brazos, cabeza, rostro, etc., se convierten en recursos expresivos esenciales: un bebé que extiende los brazos para ser alzado, que frunce el ceño o sonríe, ya está comunicando a través del cuerpo (Mendiara Rivas, 2016).
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 La <b>expresión corporal</b>, más allá del gesto aislado, abarca la totalidad del cuerpo como medio expresivo. Se manifiesta mediante la postura, la mirada, el ritmo del movimiento, la tensión muscular y la manera de ocupar el espacio. A través de ella, los niños proyectan hacia el entorno su mundo interno, representando pensamientos y emociones (Mendiara Rivas, 2016).
          .bg-morado.p-4(data-aos='fade-up')
            span Esta relación entre percepción corporal y conocimiento del mundo es clave en la psicología evolutiva: el niño aprende tocando, moviéndose, interactuando, y responde con gestos a lo que experimenta. Por ejemplo, al levantar un objeto pesado puede tensar su cuerpo, o al compartir un juguete se acerca corporalmente al otro. Estos gestos reflejan y modulan la vivencia social (Mendiara Rivas, 2016).

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La psicomotricidad educativa valora el <b>esquema corporal</b>, entendiendo los gestos y la expresión corporal como manifestaciones del conocimiento que el niño tiene de sí mismo. Actividades como la imitación, el juego simbólico, la exploración del movimiento o la expresión libre permiten al niño tomar conciencia de sus posibilidades y limitaciones (Mendiara Rivas, 2016).
          .bg-azul-oscuro.mb-4.p-4(data-aos='fade-up')
            span Finalmente, reconocer el cuerpo como el primer objeto de percepción resalta la importancia de la comunicación no verbal en la infancia: los gestos y movimientos no son solo respuestas, sino también herramientas de exploración, construcción de conocimiento y relación (Mendiara Rivas, 2016).
          span La clasificación de gestos según Díaz y Castillo Viera (2016) es: 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-55.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='9%' y='35.4%' numero='+')
          .h5.mb-2 Gestos automáticos o reflejos
          p Movimientos involuntarios que surgen como respuestas inmediatas a estímulos internos o externos. Son respuestas primarias del organismo, muchas veces inconscientes, y revelan estados básicos como el hambre, el malestar o la sorpresa.
        .tarjeta.bg-white.p-4(x='18%' y='72%' numero='+')
          .h5.mb-2 Gestos emocionales
          p Movimientos que expresan de manera directa emociones como alegría, miedo, tristeza o enojo. Estos gestos se reconocen fácilmente y tienen un valor comunicativo evidente, incluso sin palabras.
        .tarjeta.bg-white.p-4(x='85.7%' y='78%' numero='+')
          .h5.mb-2 Gestos proyectivos
          p Se componen de una combinación entre lo emocional y lo cognitivo. Son elaboraciones conscientes que revelan pensamientos, deseos o intenciones antes de verbalizarse. Reflejan una mayor complejidad y están ligados al desarrollo de la intencionalidad.
        .tarjeta.bg-white.p-4(x='88.9%' y='22.4%' numero='+')
          .h5.mb-2 Gestos del pensamiento abstracto
          p Se manifiestan con frecuencia en brazos y manos, acompañando o enfatizando el discurso verbal. Están asociados a procesos cognitivos más complejos y al desarrollo del pensamiento simbólico y argumentativo.

      p.mb-4 La clasificación funcional de los gestos (Stoetzel y Scheflen, citados por Díaz y Castillo Viera, 2016) son: 

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Gestos autísticos")
              p Son movimientos estereotipados, sin intención comunicativa clara. Suelen aparecer en conductas de autorregulación o autoestimulación sensorial. Ejemplos: balanceo del cuerpo, sacudir las manos.
            .div(titulo="Gestos habituales")
              p Se ejecutan de forma automática o rutinaria. Están presentes en nuestra vida diaria y responden a convenciones sociales, como saludar, asentir o negar con la cabeza.
            .div(titulo="Gestos simbólicos")
              p Representan ideas o conceptos compartidos culturalmente. Se entienden sin necesidad de palabras y poseen un alto contenido simbólico, como levantar el pulgar para indicar aprobación.
            .div(titulo="Gestos referenciales")
              p Tienen una función indicativa: señalan objetos, personas o lugares. Ejemplo: apuntar con el dedo o dirigir la mirada hacia algo específico.
            .div(titulo="Gestos demostrativos")
              p Sirven para reforzar o enfatizar lo que se está diciendo verbalmente. Se utilizan para aumentar el impacto del mensaje. Ejemplo: extender los brazos para mostrar tamaño o cantidad.
            .div(titulo="Gestos táctiles")
              p Involucran contacto físico con otras personas y se emplean con fines afectivos o atencionales. Ejemplo: dar un abrazo, tocar un hombro para llamar la atención.

      h2 Otros elementos expresivos
      p.mb-4 Díaz y Castillo Viera (2016) amplían el análisis de la corporalidad expresiva incorporando elementos como:

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold La voz
                p Representa un <b>38% de la comunicación</b> y debe integrarse con el cuerpo como parte de la expresión corporal. Sus cualidades sonoras —frecuencia, timbre, intensidad y duración— ayudan a construir un mensaje expresivo. En contextos prácticos y creativos, voz y cuerpo actúan como canales complementarios.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold La mímica facial y la mirada
                p La <b>cara</b> es un centro primordial de la expresión emocional, capaz de reflejar una amplia gama de sentimientos. La <b>mirada</b> establece y mantiene el contacto interpersonal, siendo un componente esencial de la comunicación no verbal.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold La respiración
                p Parte fundamental de la <b>corporalidad expresiva</b>. Afecta el <b>tono muscular</b> y el <b>estado emocional</b>, influyendo directamente en la calidad de los gestos y movimientos. Técnicas respiratorias bien aplicadas potencian tanto la expresión <b>verbal</b> como <b>no verbal</b>.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold La relajación
                p Es un <b>estado psicofísico</b> que implica distensión muscular y tranquilidad emocional. Favorece el <b>autocontrol</b>, mejora la percepción del cuerpo y facilita un aprendizaje expresivo más consciente y equilibrado. Es clave en actividades de expresión corporal.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
      
      h2 La expresión corporal en la educación infantil 
      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 En el <b>primer ciclo</b> de la educación infantil, la expresión corporal permite a los niños descubrir y experimentar con los recursos básicos de su cuerpo: gestos, desplazamientos, movimientos de brazos y piernas. Estos recursos se fortalecen conforme se desarrollan habilidades perceptivo-motrices, afectivas, cognitivas y relacionales.
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-43.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Durante el <b>segundo ciclo</b>, los niños amplían estos recursos gracias a un mayor desarrollo emocional y cognitivo. Comienzan a interiorizar su imagen corporal y adquieren un control voluntario más preciso sobre sus movimientos, lo que enriquece su capacidad expresiva.

      .row.mb-4
        .col-12.col-xl-8
          .bg-morado.p-4.mb-4(data-aos='fade-up')
            span La expresión corporal no solo es canal de comunicación, sino también un medio para fortalecer vínculos, especialmente cuando se promueve la <b>interacción entre pares</b>. A través de la coordinación y ajuste de movimientos con otros, los niños desarrollan competencias sociales esenciales. Esta forma de expresión conecta el cuerpo con los procesos internos, y canaliza sus posibilidades hacia un lenguaje gestual creativo.
          span Las <b>tres coordenadas</b> que estructuran esta expresión son: <b>cuerpo, espacio y tiempo</b>. Su desarrollo conjunto es clave para lograr movimientos expresivos y significativos.  Los objetivos de la expresión corporal en esta etapa son:
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5

          .row.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-45.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Conciencia
                p.px-1.text-small.mb-0.text-center Identificar y comprender lo que sucede dentro y fuera del cuerpo, así como nuestras reacciones.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-46.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Espontaneidad
                p.px-1.text-small.mb-0.text-center Estimular una expresión libre y auténtica, sin inhibiciones.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-47.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Creatividad
                p.px-1.text-small.mb-0.text-center Potenciar la imaginación mediante la percepción, el juego y la expresión libre.
            .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-48.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Relaciones
                p.px-1.text-small.mb-0.text-center Relaciones

      .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0 Es esencial garantizar un <b>clima de libertad y respeto</b> en las actividades de expresión corporal, permitiendo que los niños se expresen sin restricciones innecesarias, respetando siempre la convivencia. La educación infantil debe acoger tanto formas convencionales como creativas de expresión para maximizar su impacto educativo.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Los gestos y el movimiento

      .row.mb-4
        .col-12.col-xl-8
          .bg-azul-oscuro.mb-4.p-4(data-aos='fade-up')
            span Según <b>Cervantes (2024)</b>, el gesto y el movimiento son componentes esenciales de la <i>expresión corporal</i>, entendida como el uso del cuerpo con intencionalidad comunicativa y emocional. Desde edades tempranas, los niños recurren a los <b>gestos</b> como un lenguaje prelingüístico que sienta las bases para el desarrollo de otros lenguajes, como el verbal o el musical. Aunque su aprendizaje puede ser lento, se ve favorecido por la imitación de adultos cercanos, facilitando así la adquisición de nuevas formas de expresión.
          span Los <b>gestos</b> son movimientos específicos e intencionados de partes del cuerpo, principalmente manos, brazos, cabeza y rostro, con fines comunicativos. Pueden ser conscientes o inconscientes, y su significado varía según el contexto cultural. En la expresión corporal, los gestos pueden reforzar el lenguaje verbal o incluso reemplazarlo por completo, transmitiendo emociones, pensamientos y actitudes. Por ejemplo, un gesto de asentimiento, un encogimiento de hombros o el movimiento de las manos al hablar son formas expresivas ampliamente reconocidas.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Asimismo, el <b>juego</b> es una vía fundamental mediante la cual los niños emplean gestos para representar sensaciones, emociones, roles y acciones. Este tipo de interacción favorece la conexión emocional con el entorno, fomenta la creatividad y fortalece la comunicación no verbal, siendo clave en su desarrollo integral.
          .mb-4.bg-amarillo.p-4(data-aos='fade-up')
            span El <b>movimiento</b> es una necesidad natural del niño. Puede ser global (implicando todo el cuerpo) o segmentario (implicando solo partes del cuerpo). Se clasifica como reflejo, voluntario o automático, en función del tipo de control neurológico implicado. Desde el punto de vista de la expresión corporal, la <b>calidad del movimiento</b> (fluidez, intensidad, dirección, velocidad) es tan relevante como el movimiento mismo, pues comunica emociones y significados: por ejemplo, un gesto brusco puede indicar enojo, mientras que uno suave puede transmitir ternura.
          span Los elementos del gesto y el movimiento en la expresión corporal son: 
      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Posturas")
              p Posiciones que adopta el cuerpo en el espacio. Reflejan emociones, actitudes y la relación con el entorno. Una postura erguida puede sugerir seguridad, mientras que una encorvada puede expresar tristeza o inseguridad. Son parte del “lenguaje silencioso” del cuerpo.
            .div(titulo="Dinámicas")
              p Se refieren a la energía, fuerza e intensidad con que se ejecuta un movimiento. Incluyen el grado de tensión muscular y la forma en que se inicia y finaliza una acción. Una dinámica tensa puede denotar agitación; una suave, serenidad.
            .div(titulo="Actitudes")
              p Disposiciones emocionales y mentales expresadas corporalmente. Se manifiestan a través de la postura, la mirada, los gestos y el uso del espacio. Por ejemplo, una actitud defensiva se traduce en brazos cruzados y mirada evasiva.
            .div(titulo="Señales")
              p Gestos con significado convencional o culturalmente establecido. Son códigos no verbales claros, como levantar el pulgar para indicar aprobación o hacer un gesto de alto con la mano.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Expresiones faciales")
              p Movimientos musculares del rostro que comunican emociones. La cara es un foco primordial de expresión: alegría, tristeza, enojo, miedo, etc., se reconocen universalmente, aunque con matices culturales.
            .div(titulo="Coordinación")
              p Capacidad de armonizar movimientos diversos del cuerpo. Una buena coordinación asegura fluidez en la expresión; la falta de esta puede provocar una comunicación corporal confusa o rígida.
            .div(titulo="Ritmo")
              p Organización temporal de los movimientos. Implica duración, pausas y velocidad. Aporta sentido expresivo: un ritmo acelerado puede denotar ansiedad; uno pausado, calma o reflexión.
            .div(titulo="Fluidez")
              p Continuidad y suavidad entre gestos o posturas. Permite que la expresión corporal sea clara y estética. La falta de fluidez genera movimientos entrecortados o tensos.

      h2 Aplicaciones didácticas y educativas
      p.mb-4 A continuación, se presenta un video que ilustra cómo la expresión corporal puede integrarse en contextos educativos, partiendo del movimiento espontáneo del niño y promoviendo el desarrollo de sus capacidades comunicativas y creativas.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              <iframe width="1905" height="748" src="https://www.youtube.com/embed/8TpCEHxTtO8" title="Ventajas del polimorfismo en el matenimiento del software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      .row.bg-morado.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Reconocimiento del espacio con el movimiento del cuerpo
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Reconocimiento del espacio con el movimiento del cuerpo, donde se aborda el papel esencial del movimiento corporal en el desarrollo psicomotor y la percepción espacial y temporal en la infancia.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_percepcion_en_el_movimiento.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Reconocimiento del espacio con el movimiento del cuerpo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/44788?page=17") Díaz, M. & Castillo Viera, E. (2016). Expresión corporal en primaria. Universidad de Huelva.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63454?page=1") Carbonero Celis, C. (2017). Cómo mejorar las capacidades perceptivo motrices, esquema corporal y lateralidad en tu hijo. Wanceulen Editorial.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ovJSEYXC_VM") [Vídeo] EUDE Business School. (2021). 20151023 Masterclass María Rodríguez y Mayte Almeida Expresión gestual
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p

  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Unidad #2',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de las siguientes opciones NO es un patrón locomotor?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Gatear', esCorrecta: false },
            { id: 'b', texto: 'Saltar', esCorrecta: false },
            { id: 'c', texto: 'Hablar', esCorrecta: false },
            { id: 'd', texto: 'Trepar', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumplen los gestos referenciales en la comunicación no verbal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Expresar emociones mediante movimientos repetitivos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Señalar o hacer referencia a un objeto, persona o lugar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reforzar verbalmente una idea mediante movimientos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer contacto físico para generar cercanía',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la importancia del reconocimiento espacial en el desarrollo infantil?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ayuda a mejorar la memoria a corto plazo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite comprender y desenvolverse eficientemente en el entorno mediante el movimiento',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Favorece el desarrollo del lenguaje escrito',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Genera habilidades matemáticas avanzadas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál de los siguientes gestos es considerado simbólico?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Apretar el puño en señal de frustración',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asentir con la cabeza para indicar afirmación',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tocarse el rostro al sentir vergüenza',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Levantar el pulgar para indicar aprobación',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes actividades ayuda al desarrollo de la psicomotricidad en la niñez?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Jugar a la golosa o rayuela', esCorrecta: true },
            {
              id: 'b',
              texto: 'Memorizar listas de palabras',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolver acertijos matemáticos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ver videos educativos sin interactuar físicamente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
