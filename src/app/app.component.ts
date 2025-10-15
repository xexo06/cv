import { Component } from '@angular/core';


type Exp = {
  empresa: string;
  cargo: string;
  fecha: string;     // "mayo 2024 — mayo 2025", etc.
  resumen: string;   // párrafo corto
  bullets?: string[]; // opcional
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photoAlt = 'Foto de perfil';
  // photoUrl = new URL('../assets/img/foto_presentacion_2.png', import.meta.url).toString();
  photoUrl = 'assets/img/foto_presentacion_2.png';
  nombreYApellidos = 'Sergio Arce';
  presentacion = 'Ingeniero Civil en Informática · Full-Stack';
  direccion = 'Chillán, Chile';

 
  email = 'sabici2013@gmail.com';
  phone = '+56 9 4904 5275';
  linkedin = 'https://www.linkedin.com/in/sergio-a-448798190';


  idiomas = 'Español e Inglés (A2)';
  profile = `Desarrollador full-stack con foco en Angular, NestJS y Node.js.
  Experiencia en diseño de APIs, componentes reutilizables, bases de datos
  (PostgreSQL/MongoDB) y despliegues en la nube. Orientado a calidad,
  performance y entrega de valor.`;
  skillsSolidas = [
    'Angular','NestJS','Node.js','GitLab','PostgreSQL','Bootstrap',
    'MongoDB','Oracle','JavaScript'
  ];

  skillsBasicas = [
    'Vue','Jenkins','Azure (Despliegue Front-End)','Android Studio',
    'Spring Boot','Yii','Laravel','CSS','Bitbucket',
    'Semantic UI','JMeter','Bizagi','Excel'
  ];


  logrosTitulo = 'Logros destacados:';
  logros = [
    { icon: '✅', text: 'Contribuí a la mejora de los despliegues automatizados, detectando errores clave y proponiendo soluciones.' },
    { icon: '🧠', text: 'Apoyé al equipo en la definición de requerimientos con visión estratégica.' },
    { icon: '🧩', text: 'Modelado de problemas para anticipar impactos y proponer mejoras sostenibles.' },
    { icon: '🛠️', text: 'Aportes en lógica de negocio para evitar efectos colaterales en cambios.' },
  ];




  experiencias: Exp[] = [
  {
    empresa: 'TECNOVA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'mayo 2024 — mayo 2025',
    resumen:
    'Responsable de implementar y mantener aplicaciones web para el sector público bajo metodologías ágiles (Scrum). ' +
    'Participé en todo el ciclo de vida: análisis, diseño, desarrollo y soporte, construyendo APIs REST con Node.js/NestJS y servicios en Spring Boot, ' +
    'e interfaces modulares en Angular. Integración con PostgreSQL y orquestación de despliegues en Azure con pipelines de CI/CD en Jenkins, ' +
    'cuidando rendimiento, seguridad y calidad del código.',
    bullets: [
    'Desarrollo de módulos reutilizables en Angular (componentes, servicios, guards) y consumo de APIs REST.',
    'Diseño y construcción de endpoints en NestJS/Node.js y microservicios en Spring Boot.',
    'Modelado de datos y consultas optimizadas en PostgreSQL (índices, vistas y validaciones).',
    'Automatización de build/test/deploy con Jenkins (pipelines) y despliegues en Azure.',
    'Implementación de pruebas unitarias y de integración (Jasmine/Jest) y mejoras de cobertura.',
    'Hardening básico y buenas prácticas OWASP: validación de entrada, manejo de errores y protección de credenciales.',
    'Optimización de rendimiento en frontend (lazy loading, división de bundles) y en backend (caching y paginación).',
    'Monitoreo y registro de eventos para diagnóstico y soporte (logs estructurados y alertas).',
    'Trabajo colaborativo con QA, UX y negocio; refinamiento de user stories y estimaciones en sprints.',
    'Documentación técnica y traspaso de conocimiento al equipo (readmes, guías rápidas).'
  ]
  },
  {
    empresa: 'EMERGYA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'sep 2023 — mayo 2024',
    resumen:
    'Desarrollo y mejora continua de soluciones internas para entidades públicas bajo metodología ágil (Scrum). ' +
    'Participación end-to-end: levantamiento y refinamiento de requerimientos, diseño técnico, implementación y soporte. ' +
    'Construcción de interfaces modulares en Angular y APIs REST en NestJS/Node.js, integradas con PostgreSQL. ' +
    'Automatización de integración y despliegue continuo mediante Jenkins y servicios en Azure, ' +
    'enfocado en calidad, mantenibilidad y rendimiento.',

    bullets: [
      'Implementación de componentes, servicios y formularios reactivos en Angular con buenas prácticas (RxJS, lazy loading).',
      'Diseño y exposición de endpoints REST con NestJS (DTOs, pipes, guards) y manejo de autenticación/autorización.',
      'Modelado de esquemas y consultas eficientes en PostgreSQL; creación de índices y migraciones.',
      'Pipelines de CI/CD en Jenkins: build, test y deploy automatizados hacia entornos en Azure.',
      'Pruebas unitarias y de integración (Jest/Jasmine) y mejora de cobertura.',
      'Instrumentación de logs y métricas para observabilidad y diagnóstico post-despliegue.',
      'Optimización de rendimiento: paginación y caché en backend; reducción de bundle y prefetch en frontend.',
      'Revisión de código y alineamiento con estándares de estilo y seguridad (OWASP, manejo de secretos).',
      'Trabajo colaborativo con QA/UX/Producto; refinamiento de historias, estimaciones y demos de sprint.',
      'Documentación técnica y handover para asegurar continuidad operativa.'
    ]
  },
  {
    empresa: 'NTTDATA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'mayo 2021 — dic 2022',
    resumen:
    'Desarrollo de una aplicación de reservas para el área logística trabajando con un equipo ágil (Scrum). ' +
    'Participación end-to-end: levantamiento de requerimientos, diseño y construcción de interfaz en Angular y servicios ' +
    'REST en Node.js, con persistencia en MongoDB. Énfasis en rendimiento, mantenibilidad y calidad; validación de ' +
    'escenarios de carga con JMeter y soporte a la operación.',

    bullets: [
      'Construcción de SPA en Angular: componentes reutilizables, formularios reactivos, routing y guards.',
      'Diseño e implementación de APIs REST en Node.js (Express/NestJS), middlewares y manejo de errores.',
      'Modelado de colecciones y relaciones en MongoDB; consultas con agregaciones, índices y proyecciones.',
      'Autenticación/autorización basada en roles y tokens (JWT) y gestión de sesiones.',
      'Optimización de rendimiento: paginación de resultados y reducción de payloads en endpoints.',
      'Pruebas de carga con JMeter: diseño de planes, medición de KPIs y análisis de cuellos de botella.',
      'Integraciones con servicios internos vía REST; manejo de timeouts y reintentos.',
      'Versionamiento y colaboración con Git; revisión de código y prácticas de clean code.',
      'Documentación funcional/técnica y colecciones de Postman para facilitar QA y handover.',
      'Participación activa en ceremonias Scrum: refinamiento, planificación, dailies, demos y retrospectivas.'
    ]
  },
  {
    empresa: 'PERK',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'ago 2020 — feb 2021',
    resumen:
      'Desarrollo de microservicios para una aseguradora, diseñando e implementando APIs y procesos de integración de datos. ' +
      'Frontend en Angular y backend en Node.js, con persistencia en MongoDB. Construcción de pipelines ETL para ingestión y ' +
      'normalización de información desde distintas fuentes. Enfoque en mantenibilidad, performance y trazabilidad.',

    bullets: [
      'Diseño y construcción de microservicios en Node.js (Express/NestJS) con endpoints REST y manejo de errores.',
      'Modelado de documentos y consultas en MongoDB; índices, agregaciones y políticas de expiración (TTL).',
      'Implementación de procesos ETL: extracción desde APIs/CSV, validación, transformación y carga a colecciones destino.',
      'Frontend en Angular: componentes reutilizables, formularios reactivos y consumo seguro de APIs.',
      'Autenticación/autorización con JWT y control de acceso por roles.',
      'Observabilidad: logs estructurados y trazas para diagnóstico y auditoría.',
      'Pruebas unitarias/integración y colecciones Postman para QA y handover.',
      'Automatización de build/test/deploy con scripts y jobs en CI (Jenkins/Git).',
      'Buenas prácticas de performance (paginación, proyección de campos, cacheado selectivo).',
      'Trabajo colaborativo con analistas y negocio para refinar historias y estimar entregas bajo Scrum.'
    ]
  },
  {
    empresa: 'LEBOX TECNOLOGÍA LTDA.',
    cargo: 'Desarrollador Frontend',
    fecha: 'dic 2019 — mar 2020',
    resumen:
    'Mantenimiento evolutivo de una aplicación de soporte para un centro médico. ' +
    'Construcción de vistas y flujos en Vue/Vuex (SPA) y colaboración con el backend en Laravel para exponer y consumir ' +
    'APIs REST. Trabajo con base de datos SQL para reportes y validaciones. Enfoque en usabilidad, performance y calidad ' +
    'del código para asegurar continuidad operativa del sistema.',

    bullets: [
      'Implementación de componentes y vistas en Vue/Vuex; enrutamiento, estados globales y formularios validados.',
      'Consumo de APIs REST del backend Laravel; manejo de autenticación, errores y estados de carga.',
      'Consultas SQL para reportes operativos y validaciones de datos; colaboración en ajustes de modelos/ORM.',
      'Refactor de partes “legacy” del frontend, reducción de deuda técnica y mejora de mantenibilidad.',
      'Optimización de rendimiento: división de bundles, lazy loading y memoización de datos de uso frecuente.',
      'Mejoras de UX/UI (accesibilidad básica, micro-interacciones, consistencia visual).',
      'Soporte a incidencias y corrección de bugs priorizados por el área clínica/operaciones.',
      'Automatización básica con npm scripts y participación en flujo de versionamiento con Git.',
      'Documentación breve de flujos y componentes; handover para continuidad del equipo.',
      'Trabajo coordinado con analistas y soporte para priorización y despliegues controlados.'
    ]
  },
  {
    empresa: 'Freelancer',
    cargo: 'Emprendedor Independiente',
    fecha: 'sep 2019 — nov 2019',
    resumen:
    'Diseño y desarrollo end-to-end de una aplicación móvil de encuestas para clínicas: captura de respuestas en terreno, ' +
    'procesamiento de la información y visualización de resultados mediante gráficos y métricas. Implementación de una API ' +
    'REST ligera y almacenamiento en BD para explotación posterior, con foco en usabilidad, rendimiento y claridad de los reportes.',

    bullets: [
      'Levantamiento de requerimientos y definición del flujo de encuestas (preguntas, tipos de respuesta, validaciones).',
      'Construcción de interfaz móvil con componentes reutilizables y diseño adaptable (accesible y usable).',
      'Persistencia local y sincronización cuando hay conectividad para uso en terreno.',
      'Exposición de endpoints REST para recepción de formularios y consulta de resultados.',
      'Normalización y limpieza de datos para facilitar cálculos y agrupaciones por clínica/periodo.',
      'Tableros con gráficos, KPIs y filtros (rango de fechas, sede, encuesta) para analizar tendencias.',
      'Exportación de resultados a formatos abiertos (CSV/Excel) para análisis externo.',
      'Registro y trazabilidad de envíos (timestamp, dispositivo, usuario) para auditoría.',
      'Buenas prácticas de seguridad: validación de entrada, control básico de acceso y resguardo de datos sensibles.',
      'Documentación breve de uso y traspaso de conocimiento al cliente para continuidad operativa.'
    ]
  },
  ];

    // Reparte N items en K columnas (lo más equilibrado posible)
  private chunk<K>(items: K[], columns: number): K[][] {
    const out: K[][] = Array.from({length: columns}, () => []);
    items.forEach((it, i) => out[i % columns].push(it)); // round-robin
    return out;
  }

  expCols = this.chunk<Exp>(this.experiencias, 6); // C1,

  estudios = [
    { icon: '🎓', texto: 'Colegio ComeWealthSchool (Enseñanza Media Completa).', url: '' },
    { icon: '🎓', texto: 'Ingeniería Civil en Informática (Universidad del Bío-Bío, 2013–2018).', url: 'https://www.ubiobio.cl' },
  ];

  fortalezas = ['Responsable.', 'Atento.', 'Flexible.'];

  referencias = [
    { empresa: 'JUNJI', tel: '+56 9 6579 0739', persona: 'José Sánchez' },
    { empresa: 'TECNOVA', tel: '+56 9 7700 1552', persona: 'Judith Álvarez' },
    { empresa: 'NTTDATA', tel: '+56 9 9740 9768', persona: 'Fabián Fuentes' },
    { empresa: 'Telefónica', tel: '+56 9 8741 4837', persona: 'Christofer Garrido' },
    { empresa: 'PERK', tel: '+56 9 5012 6578', persona: 'Ignacio Ramírez' },
    { empresa: 'LEBOX', tel: '(2) 2334 2733', persona: 'Gustavo Inzunza' },
    { empresa: 'Independiente', tel: '+56 9 5862 8756', persona: 'Miguel Meriño' },
    { empresa: 'UNIV. del BÍO-BÍO', tel: '+56 9 9146 1787', persona: 'Landeros Mardones' },
  ];


  certAZ900 = 'https://learn.microsoft.com/es-es/users/sergioandresarcebarrera-2812/credentials/160442d5b851275';
  certAI900 = 'https://learn.microsoft.com/es-es/users/sergioandresarcebarrera-2812/credentials/8a5fc39d274ddb4a';

  certs!: { title:string; issuer:string; year:string; url:string }[];

  ngOnInit(){
    this.certs = [
      { title: 'AZ-900 · Microsoft Azure Fundamentals', issuer: 'Microsoft', year: '2024', url: this.certAZ900 },
      { title: 'AI-900 · Microsoft Azure AI Fundamentals', issuer: 'Microsoft', year: '2024', url: this.certAI900 },
    ];
  }
}

