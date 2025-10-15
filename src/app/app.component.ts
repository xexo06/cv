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




  experiencias: Exp[] = 
  [
  {
    empresa: 'TECNOVA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'mayo 2024 — mayo 2025',
    resumen:
      'Implementación y mantenimiento de aplicaciones web para el sector público bajo metodologías ágiles (Scrum). ' +
      'Desarrollo de APIs REST en Node.js/NestJS, servicios en Spring Boot y frontend modular en Angular, ' +
      'con integración a PostgreSQL y despliegues de aplicaciones en la nube (Azure) mediante pipelines CI/CD.',
    bullets: [
      'Desarrollo de módulos y servicios reutilizables en Angular con consumo de APIs REST.',
      'Creación de endpoints y microservicios en NestJS y Spring Boot.',
      'Consultas optimizadas y modelado de datos en PostgreSQL.',
      'Automatización de builds y despliegues con Jenkins y CI/CD en Azure.',
      'Optimización de rendimiento en frontend y backend.',
      'Monitoreo y registro de eventos para soporte y diagnóstico.',
      'Integración de servicios de IA para análisis de datos y automatización de procesos.',
      'Colaboración con QA, UX y negocio en sprints y refinamientos.',
      'Documentación técnica y transferencia de conocimiento.'
    ]
  },
  {
    empresa: 'EMERGYA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'sep 2023 — mayo 2024',
    resumen:
      'Desarrollo y mejora de soluciones internas para organismos públicos bajo metodología Scrum. ' +
      'Implementación de interfaces en Angular y servicios en NestJS con PostgreSQL, ' +
      'incluyendo despliegues en entornos cloud (Azure) con integración continua.',
    bullets: [
      'Componentes y formularios reactivos en Angular con RxJS y lazy loading.',
      'Endpoints REST en NestJS con DTOs, guards y autenticación JWT.',
      'Consultas eficientes e índices en PostgreSQL.',
      'Despliegues automatizados en Azure con pipelines CI/CD.',
      'Optimización de rendimiento y paginación en backend.',
      'Logs y métricas para diagnóstico y mantenimiento.',
      'Aplicación de IA básica para automatizar validaciones y análisis de datos.',
      'Cumplimiento de estándares de seguridad y revisión de código.',
      'Trabajo colaborativo con QA/UX/Producto en sprints.',
      'Documentación técnica y handover operativo.'
    ]
  },
  {
    empresa: 'NTTDATA',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'mayo 2021 — dic 2022',
    resumen:
      'Desarrollo de app de reservas logísticas con Angular y Node.js. ' +
      'Implementación de APIs REST con MongoDB y validación de rendimiento con JMeter en entorno ágil.',
    bullets: [
      'SPA en Angular: componentes, formularios y routing.',
      'APIs REST en Node.js/NestJS con middlewares y manejo de errores.',
      'Modelado y consultas en MongoDB con agregaciones e índices.',
      'Autenticación JWT y control de roles.',
      'Optimización con paginación y reducción de payloads.',
      'Pruebas de carga con JMeter y análisis de rendimiento.',
      'Integraciones REST internas y control de timeouts.',
      'Versionamiento Git y prácticas de clean code.',
      'Documentación funcional y colecciones Postman.',
      'Participación activa en ceremonias Scrum.'
    ]
  },
  {
    empresa: 'PERK',
    cargo: 'Desarrollador Full-Stack',
    fecha: 'ago 2020 — feb 2021',
    resumen:
      'Desarrollo de microservicios para aseguradora en Node.js y Angular con MongoDB. ' +
      'Diseño de APIs, procesos ETL y automatización de despliegues.',
    bullets: [
      'Microservicios REST en Node.js (NestJS/Express).',
      'Modelado de colecciones y consultas MongoDB con TTL y agregaciones.',
      'Procesos ETL desde APIs/CSV con validación y carga automatizada.',
      'Frontend Angular con formularios reactivos y consumo seguro.',
      'Autenticación JWT y roles de acceso.',
      'Logs estructurados y trazas para diagnóstico.',
      'Automatización CI con Jenkins y Git.',
      'Integración de IA para clasificación de datos y tareas automatizadas.',
      'Trabajo ágil con analistas y negocio (Scrum).',
      'Pruebas unitarias y Postman para QA.'
    ]
  },
  {
    empresa: 'LEBOX TECNOLOGÍA LTDA.',
    cargo: 'Desarrollador Frontend',
    fecha: 'dic 2019 — mar 2020',
    resumen:
      'Mantenimiento de aplicación clínica en Vue/Vuex y Laravel. ' +
      'Optimización de flujos, rendimiento y calidad del código para asegurar continuidad operativa.',
    bullets: [
      'Componentes y vistas SPA con Vue/Vuex y formularios validados.',
      'Consumo de APIs Laravel y manejo de autenticación y errores.',
      'Consultas SQL y soporte en ajustes ORM.',
      'Refactor y reducción de deuda técnica.',
      'Optimización: lazy loading y bundles livianos.',
      'Mejoras UX/UI y accesibilidad básica.',
      'Soporte a incidencias priorizadas.',
      'Automatización con npm scripts y Git.',
      'Documentación breve de flujos y componentes.',
      'Coordinación con analistas y soporte clínico.'
    ]
  },
  {
    empresa: 'Freelancer',
    cargo: 'Emprendedor Independiente',
    fecha: 'sep 2019 — nov 2019',
    resumen:
      'Diseño y desarrollo de app móvil de encuestas para clínicas: captura en terreno, procesamiento y reportes visuales. ' +
      'API REST ligera con base de datos para análisis posterior.',
    bullets: [
      'Levantamiento y definición de flujos y validaciones.',
      'Interfaz móvil adaptable y usable.',
      'Persistencia local y sincronización offline.',
      'Endpoints REST para formularios y resultados.',
      'Limpieza y normalización de datos.',
      'Dashboards con KPIs y filtros dinámicos.',
      'Exportación a CSV/Excel.',
      'Registro y trazabilidad de envíos.',
      'Validación de entrada y control básico de acceso.',
      'Documentación y traspaso de uso al cliente.'
    ]
  }
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

