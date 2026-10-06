import { useState } from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Eye } from 'lucide-react';
import levaCoreImg from '../assets/projects/LevaCore.png';
import libreria from '../assets/projects/TiendaOnline.png';
import libreria2 from '../assets/projects/GestionStock.png';
import concejo from '../assets/projects/Concejo.png';
import prestamos from '../assets/projects/Prestamos.png';
import finanzas from '../assets/projects/Finanzas.png';
import kiosco from '../assets/projects/Kiosco.png';
import ProjectDetailModal, { type ProjectDetail } from '../components/ProjectDetailModal';
import LevaCoreModal from '../components/LevaCoreModal';

const proyectos: ProjectDetail[] = [
  {
    id: 'leva-core',
    nombre: 'LEVA Core — Personal AI OS',
    badge: '⭐ Proyecto Insignia',
    isFlagship: true,
    categoria: 'ai',
    descripcion: 'Sistema Operativo Personal Inteligente diseñado para centralizar la información del usuario con memoria persistente semántica y ejecución de tareas complejas mediante agentes coordinados. No es un chatbot genérico: implementa herramientas reales y acceso contextual.',
    imagen: levaCoreImg,
    tecnologias: ['Python 3.13', 'FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'MCP', 'React 19', 'TypeScript', 'Redis', 'Docker'],
    link: 'https://github.com/lauasdasd/LEVA-Core',
    stackCategorizado: {
      frontend: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'React Router'],
      backend: ['Python 3.13+', 'FastAPI', 'SQLAlchemy 2.x (Async)', 'Alembic', 'Pydantic v2', 'APScheduler', 'PyJWT', 'Passlib'],
      database: ['PostgreSQL 17+', 'pgvector (Búsqueda vectorial)', 'Redis (Caché & Sesiones)'],
      integraciones: ['LangGraph (Agentes)', 'Model Context Protocol (MCP)', 'OpenAI SDK', 'Ollama (Modelos Locales)', 'Gmail API']
    },
    arquitectura: 'Monolito modular con backend asíncrono en FastAPI y arquitectura guiada por eventos (Event-Driven). Capa de inteligencia de contexto (Context Intelligence Layer) con memoria semántica, a corto y largo plazo.',
    caracteristicas: [
      'Dashboard inteligente con resumen matutino y métricas de vida.',
      'Mail Hub sincronizado con Gmail: paginación controlada y clasificación contextual por IA.',
      'Seguimiento diario de hábitos con cálculo automático de rachas y estadísticas.',
      'Gestión integral de proyectos, metas personales y calendario sincronizado.',
      'Asistente autónomo con memoria a largo plazo que ejecuta acciones mediante herramientas MCP.'
    ],
    desafioTecnico: 'Garantizar que la IA no alucine respuestas ni pierda contexto tras múltiples interacciones, implementando una memoria semántica persistente en PostgreSQL con pgvector y limitando la ejecución a herramientas seguras vía MCP.'
  },
  {
    id: 'libreria-ecommerce',
    nombre: 'Sistema de Librería — Tienda Online',
    badge: 'Implementado en Producción',
    categoria: 'web',
    descripcion: 'Plataforma web de comercio electrónico y gestión integral desarrollada a medida para un comercio de librería. Incluye catálogo interactivo, control de inventario en tiempo real, administración de pedidos y cobranza digital integrada.',
    imagen: libreria,
    tecnologias: ['PHP', 'MySQL', 'Bootstrap 5', 'Mercado Pago SDK', 'JavaScript'],
    link: 'https://github.com/lauasdasd/libreria',
    stackCategorizado: {
      frontend: ['HTML5 Semántico', 'CSS3 / Bootstrap 5', 'JavaScript (ES6+)', 'AJAX'],
      backend: ['PHP Orientado a Objetos (POO)', 'Arquitectura MVC', 'Sesiones seguras'],
      database: ['MySQL Relacional', 'Transacciones ACID para compras', 'Optimización de consultas'],
      integraciones: ['SDK Mercado Pago (Checkout Pro y Webhooks de confirmación)']
    },
    arquitectura: 'Arquitectura MVC en PHP conectada a base de datos relacional MySQL. Separación estricta entre el catálogo público de compras y el panel administrativo con autenticación de usuarios y roles.',
    caracteristicas: [
      'Catálogo online de productos con búsqueda por texto y filtros por categorías.',
      'Carrito de compras interactivo con persistencia de productos y cálculo de totales.',
      'Integración con pasarela de pago Mercado Pago con confirmación automática de cobro.',
      'Panel de control administrativo para dar de alta/baja productos, imágenes y precios.',
      'Módulo de gestión de órdenes de compra con estados (Pendiente, Abonado, Enviado).'
    ],
    desafioTecnico: 'Garantizar la sincronización exacta del stock físico y digital durante transacciones simultáneas de clientes, evitando la sobreventa mediante bloqueos transaccionales en MySQL y webhooks asíncronos de Mercado Pago.'
  },
  {
    id: 'libreria-stock',
    nombre: 'Sistema de Librería — Gestión de Stock',
    badge: 'Sistema Interno',
    categoria: 'web',
    descripcion: 'Sistema interno desarrollado para el control logístico, movimientos de almacén y administración de precios para librerías y comercios minoristas. Diseñado para simplificar la operatoria diaria del personal.',
    imagen: libreria2,
    tecnologias: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'DataTables'],
    link: 'https://github.com/lauasdasd/libreria',
    stackCategorizado: {
      frontend: ['Bootstrap', 'JavaScript', 'DataTables', 'CSS3'],
      backend: ['PHP', 'Lógica de control de inventario', 'Reportes'],
      database: ['MySQL', 'Historial de movimientos', 'Auditoría de precios']
    },
    arquitectura: 'Módulo web administrativo de alto rendimiento con procesamiento server-side para listados masivos de artículos y reportería de balance de existencias.',
    caracteristicas: [
      'Registro de ingresos, egresos y mermas de mercadería con motivos detallados.',
      'Alertas automáticas de umbral crítico de stock para reposición oportuna.',
      'Gestión ágil de categorías, proveedores y actualización de costos de artículos.',
      'Búsqueda instantánea y filtrado por código de barras o descripción de artículo.'
    ],
    desafioTecnico: 'Optimizar la velocidad de búsqueda y edición de inventario en bases de datos con miles de referencias comerciales, permitiendo una experiencia ágil sin demoras en el mostrador.'
  },
  {
    id: 'concejo-municipal',
    nombre: 'Concejo Municipal — Gestión Documental',
    badge: 'Sector Público / Producción',
    categoria: 'web',
    descripcion: 'Sistema de administración y trazabilidad documental implementado para el Concejo Municipal. Permite digitalizar y seguir el ciclo de vida completo de proyectos normativos, actas de sesiones, expedientes y resoluciones oficiales.',
    imagen: concejo,
    tecnologias: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3'],
    link: 'https://github.com/lauasdasd/Administraci-n-Municipal',
    stackCategorizado: {
      frontend: ['JavaScript modular', 'HTML5', 'CSS3 personalizado', 'Diseño accesible'],
      backend: ['PHP', 'Flujos de estados de expedientes', 'Control de permisos'],
      database: ['MySQL', 'Modelado relacional de expedientes, sesiones y resoluciones', 'Auditoría de cambios']
    },
    arquitectura: 'Monolito web modular adaptado a procesos administrativos legislativos. Modelo de datos con trazabilidad estricta donde cada expediente almacena su árbol histórico de pases entre comisiones y dictámenes.',
    caracteristicas: [
      'Trazabilidad completa de expedientes desde su ingreso por mesa de entradas hasta su promulgación.',
      'Gestión de sesiones ordinarias y extraordinarias, orden del día y votaciones.',
      'Buscador avanzado con filtros por número de expediente, año, comisión y texto clave.',
      'Historial inmutable de auditoría para garantizar transparencia y cumplimiento legal.'
    ],
    desafioTecnico: 'Analizar y traducir requerimientos funcionales complejos y normativas municipales en constante cambio, manteniendo la interfaz intuitiva para funcionarios públicos con distintos niveles de conocimiento técnico.'
  },
  {
    id: 'prestamos-tercerizados',
    nombre: 'Préstamos Tercerizados — Core Financiero',
    badge: 'Fintech / APIs Externas',
    categoria: 'web',
    descripcion: 'Sistema financiero para empresa tercerizada que gestiona líneas de crédito para entidades bancarias. Administra legajos de solicitantes, cálculo de cronogramas de amortización, scoring y liquidaciones.',
    imagen: prestamos,
    tecnologias: ['PHP', 'MySQL', 'APIs REST', 'JavaScript'],
    link: 'https://github.com/lauasdasd/Gstando',
    stackCategorizado: {
      frontend: ['JavaScript', 'Bootstrap', 'Validaciones dinámicas de formularios'],
      backend: ['PHP', 'Consumo de APIs REST', 'Cálculo de interés y amortización'],
      database: ['MySQL', 'Esquema de cuotas, vencimientos y estados de cobranza']
    },
    arquitectura: 'Arquitectura de servicios con cliente REST para conexión a servidores bancarios externos, garantizando el aislamiento de datos crediticios y consistencia contable en cuotas.',
    caracteristicas: [
      'Generación automática de tablas de amortización (sistema francés/alemán) y vencimientos.',
      'Control de legajos de clientes con validación crediticia previa.',
      'Monitoreo de cobranzas, estados de mora y cálculo automático de recargos punitorios.',
      'Generación de reportes analíticos y exportación de datos para liquidación bancaria.'
    ],
    desafioTecnico: 'Garantizar absoluta precisión de centavos en cálculos de interés y amortizaciones financieras masivas, resolviendo integraciones con endpoints de terceros con diferentes esquemas de autenticación y respuestas.'
  },
  {
    id: 'family-finance',
    nombre: 'Family Finance Manager',
    badge: 'Full Stack SPA',
    categoria: 'web',
    descripcion: 'Aplicación web full stack diseñada para la gestión financiera de familias y pequeños emprendimientos. Permite llevar el control detallado de ingresos, egresos, metas de ahorro y estados financieros por integrante.',
    imagen: finanzas,
    tecnologias: ['Python', 'FastAPI / Flask', 'React', 'Axios', 'CSS Modules'],
    link: 'https://github.com/lauasdasd/family-finance-manager',
    stackCategorizado: {
      frontend: ['React', 'JavaScript ES6+', 'Axios', 'Componentes modulares'],
      backend: ['Python', 'FastAPI / Flask', 'REST API JSON', 'CORS & Auth'],
      database: ['SQLite / PostgreSQL', 'Modelado relacional de cuentas y transacciones']
    },
    arquitectura: 'Arquitectura desacoplada cliente-servidor (SPA + REST API) con endpoints independientes para cuentas, categorías y balances mensuales con serialización JSON.',
    caracteristicas: [
      'Separación de múltiples cuentas (efectivo, banco, billeteras virtuales) por usuario.',
      'Registro categorizado de ingresos y egresos con desglose porcentual de gastos fijos y variables.',
      'Visualización de balance mensual, curvas de ahorro y proyecciones patrimoniales.',
      'Interfaz responsiva con navegación ágil e inmediata sin recarga de página.'
    ],
    desafioTecnico: 'Desacoplar completamente el frontend en React del backend en Python, implementando un flujo de consumo asíncrono con Axios y manejo de estados eficiente para una experiencia de usuario fluida.'
  },
  {
    id: 'gestion-kiosco',
    nombre: 'Sistema de Gestión de Kiosco',
    badge: 'Software de Escritorio',
    categoria: 'desktop',
    descripcion: 'Software de punto de venta (POS) y control de stock desarrollado en C# y .NET. Diseñado para ofrecer máxima velocidad en caja y seguridad operativa mediante separación estricta de paneles por roles.',
    imagen: kiosco,
    tecnologias: ['C#', '.NET Framework', 'SQL Server', 'Windows Forms'],
    link: 'https://github.com/lauasdasd/Gestion-de-Kiosco',
    stackCategorizado: {
      frontend: ['Windows Forms optimizado para atajos de teclado', 'Diseño UI enfocado en POS'],
      backend: ['C# (.NET Framework)', 'Programación Orientada a Objetos', 'Manejo de periféricos'],
      database: ['Microsoft SQL Server', 'Stored Procedures', 'Transacciones seguras de caja']
    },
    arquitectura: 'Aplicación de escritorio cliente-servidor local con conexión directa a base de datos relacional SQL Server mediante consultas transaccionales y procedimientos almacenados.',
    caracteristicas: [
      'Panel de Cajero: registro veloz de ventas mediante escaneo de código de barras o búsqueda rápida.',
      'Panel de Administrador: control integral de stock, historial de ventas y auditoría de operadores.',
      'Actualización masiva de precios por porcentaje, categoría o proveedor en un solo clic.',
      'Arqueo y cierre de caja diario con discriminación de medios de pago (efectivo, débito, transferencias).'
    ],
    desafioTecnico: 'Lograr tiempos de respuesta ultrarrápidos (< 50 milisegundos por escaneo de producto) y prevenir desajustes de caja ante cortes imprevistos mediante transacciones atómicas en SQL Server.'
  }
];

export default function Projects() {
  const [filtro, setFiltro] = useState<'todos' | 'ai' | 'web' | 'desktop'>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isLevaSpecialOpen, setIsLevaSpecialOpen] = useState(false);

  const proyectosFiltrados = proyectos.filter(p => {
    if (filtro === 'todos') return true;
    return p.categoria === filtro;
  });

  return (
    <section id="projects" style={{ margin: '80px auto', padding: '0 20px', maxWidth: '1200px' }}>
      {/* Modal Técnico Genérico para Cualquier Proyecto */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLevaSpecial={() => setIsLevaSpecialOpen(true)}
      />

      {/* Modal Especial de Arquitectura de LEVA Core */}
      <LevaCoreModal
        isOpen={isLevaSpecialOpen}
        onClose={() => setIsLevaSpecialOpen(false)}
      />

      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-chip">
              <CheckCircle2 size={14} /> Portafolio de Ingeniería
            </span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Proyectos Desarrollados</h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '4px' }}>
            Sistemas reales implementados en producción y proyectos de software con arquitecturas modernas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', background: 'rgba(15, 23, 42, 0.6)', padding: '6px', borderRadius: '14px', border: '1px solid #1e293b' }}>
          <button
            onClick={() => setFiltro('todos')}
            style={{
              background: filtro === 'todos' ? '#0284c7' : 'transparent',
              color: filtro === 'todos' ? '#ffffff' : '#94a3b8',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Todos ({proyectos.length})
          </button>
          <button
            onClick={() => setFiltro('ai')}
            style={{
              background: filtro === 'ai' ? '#0284c7' : 'transparent',
              color: filtro === 'ai' ? '#ffffff' : '#94a3b8',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} /> IA & Sistemas (1)
          </button>
          <button
            onClick={() => setFiltro('web')}
            style={{
              background: filtro === 'web' ? '#0284c7' : 'transparent',
              color: filtro === 'web' ? '#ffffff' : '#94a3b8',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Web Full Stack (4)
          </button>
          <button
            onClick={() => setFiltro('desktop')}
            style={{
              background: filtro === 'desktop' ? '#0284c7' : 'transparent',
              color: filtro === 'desktop' ? '#ffffff' : '#94a3b8',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Desktop & POS (1)
          </button>
        </div>
      </div>

      {/* Grid of Projects */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '28px'
      }}>
        {proyectosFiltrados.map((p) => {
          return (
            <div
              key={p.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: p.isFlagship ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                boxShadow: p.isFlagship ? '0 10px 30px -10px rgba(56, 189, 248, 0.25)' : 'none'
              }}
            >
              {/* Project Image Container con Aspect Ratio 16/9 y sin estiramiento */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#020617',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(p)}
                title="Hacé clic para ver captura completa y detalles técnicos"
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    borderBottom: '1px solid #1e293b',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />

                {/* Floating Badge */}
                {p.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: p.isFlagship ? 'linear-gradient(135deg, #0284c7, #6366f1)' : 'rgba(2, 6, 23, 0.88)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 2
                  }}>
                    {p.badge}
                  </div>
                )}

                {/* Quick Hint Overlay on bottom of image */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '6px 12px',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  zIndex: 2
                }}>
                  <Eye size={13} color="#38bdf8" />
                  <span>Clic para ver detalles técnicos y captura completa</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3
                  onClick={() => setSelectedProject(p)}
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '10px',
                    color: p.isFlagship ? '#38bdf8' : '#f8fafc',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = p.isFlagship ? '#38bdf8' : '#f8fafc'; }}
                >
                  {p.nombre}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {p.descripcion}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {p.tecnologias.slice(0, 5).map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        background: 'rgba(15, 23, 42, 0.9)',
                        color: '#38bdf8',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: '1px solid rgba(56, 189, 248, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {p.tecnologias.length > 5 && (
                    <span
                      onClick={() => setSelectedProject(p)}
                      style={{
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: '#38bdf8',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      +{p.tecnologias.length - 5} más
                    </span>
                  )}
                </div>

                {/* Card Action Links */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '16px',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    onClick={() => setSelectedProject(p)}
                    style={{
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.22)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)'; }}
                  >
                    <Cpu size={15} /> Ver Stack & Detalles
                  </button>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#cbd5e1',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(148, 163, 184, 0.15)'
                    }}
                  >
                    <Github size={15} /> GitHub
                    <ExternalLink size={13} color="#38bdf8" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}