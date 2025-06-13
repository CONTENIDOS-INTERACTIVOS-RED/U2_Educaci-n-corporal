export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Psicomotricidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Movimientos corporales:  Habilidades motrices (saltar, correr, trepar, rodar, hacer volteretas)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Habilidades motrices',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Habilidades motrices básicas y específicas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Los patrones locomotores',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestos del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Los gestos y el movimiento',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castañer, M., Torrents, C., Dinusová, M., & Anguera, M. T. (2008). Habilidades motrices en expresión corporal y danza. European Journal of Human Movement, 21, 168-188.',
      link: 'https://www.redalyc.org/pdf/2742/274220364009.pdf',
    },
    {
      referencia:
        'Toral, R.L., Batista, G. M, García, H. M. (2018). El desarrollo de las habilidades motrices básicas en los niños y las niñas de la infancia preescolar.',
      link:
        'https://www.eumed.net/rev/atlante/2018/07/habilidades-motrices-preescolar.html',
    },
    {
      referencia:
        'Rodríguez Naranjo, C. (2021). Las habilidades motrices básicas en la educación física. Uvadoc.',
      link:
        'https://uvadoc.uva.es/bitstream/handle/10324/45375/TFG-G4777.pdf?sequence=1',
    },
    {
      referencia: 'Guerrero, J. (2020). Habilidades motrices básicas.',
      link:
        'https://profjoseguerrero.blogspot.com/2020/12/habilidades-motrices-basicas_6.html',
    },
    {
      referencia:
        'Mendiara Rivas, J. (2016). Psicomotricidad educativa. Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63381?page=35',
    },
    {
      referencia:
        'Díaz, M. & Castillo Viera, E. (2016). Expresión corporal en primaria. Universidad de Huelva.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/44788?page=17',
    },
    {
      referencia:
        'Cervantes, A. (2024). TEMA-23- LA expresión corporal, EL gesto y EL movimiento. Studocu.',
      link:
        'https://www.studocu.com/es-mx/document/universidad-unimaat/metodologia/tema-23-la-expresion-corporal-el-gesto-y-el-movimiento/88222849',
    },
    {
      referencia:
        'Cañizares Márquez, J. M. & Carbonero Celis, C. (2016). Capacidades perceptivo motrices: esquema corporal y lateralidad en la infancia. Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63428?page=16',
    },
    {
      referencia:
        'García Ramírez, E. (2007, abril). El conocimiento y el control del propio cuerpo en la infancia. Efdeportes.',
      link:
        'https://efdeportes.com/efd107/el-control-del-propio-cuerpo-en-la-infancia.htm',
    },
    {
      referencia:
        'Duarte, J. A., Rodríguez, L. C., & Castro-Martínez, J. A. (2017). Cuerpo y movimiento en la educación inicial: concepciones, intenciones y prácticas. Universidad del Rosario.',
      link:
        'https://repository.urosario.edu.co/server/api/core/bitstreams/eb363283-8324-40d9-a290-07ea7bb53823/content',
    },
  ],
  glosario: [
    {
      termino: 'Caer',
      significado:
        'Movimiento en el que el cuerpo pierde estabilidad y se dirige hacia el suelo, ya sea de forma controlada o involuntaria.',
    },
    {
      termino: 'Correr',
      significado:
        'Desplazamiento rápido en el que ambos pies pierden contacto con el suelo en algún momento, favoreciendo la resistencia y coordinación.',
    },
    {
      termino: 'Expresión corporal',
      significado:
        'Forma de comunicación no verbal que utiliza movimientos, gestos y posturas para transmitir emociones e ideas.',
    },
    {
      termino: 'Gatear',
      significado:
        'Movimiento de desplazamiento sobre manos y rodillas, esencial en el desarrollo motor temprano de los niños.',
    },
    {
      termino: 'Gestos',
      significado:
        'Movimientos corporales que tienen una intención comunicativa, como expresiones faciales o movimientos de manos.',
    },
    {
      termino: 'Psicomotricidad',
      significado:
        'Disciplina que estudia la relación entre el movimiento corporal, la percepción y las emociones en el desarrollo humano.',
    },
    {
      termino: 'Reconocimiento espacial',
      significado:
        'Capacidad de percibir y comprender la disposición del espacio a través del movimiento corporal.',
    },
    {
      termino: 'Rodar',
      significado:
        'Movimiento en el que el cuerpo gira sobre una superficie, mejorando el equilibrio y el control corporal.',
    },
    {
      termino: 'Saltar',
      significado:
        'Acción de impulsarse hacia arriba o adelante usando la fuerza de las piernas, fortaleciendo músculos y equilibrio.',
    },
    {
      termino: 'Trepar',
      significado:
        'Movimiento de ascenso utilizando manos y pies, que desarrolla fuerza, coordinación y planificación motriz.',
    },
  ],
}
