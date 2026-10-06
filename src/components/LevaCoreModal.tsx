import { useState } from 'react';
import { X, Cpu, Database, Network, Bot, ShieldCheck, Mail, Calendar, CheckSquare, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

interface LevaCoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LevaCoreModal({ isOpen, onClose }: LevaCoreModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'agents' | 'modules'>('architecture');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(180deg, #0d1527 0%, #070c18 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(56, 189, 248, 0.15)',
          padding: '32px',
          borderRadius: '24px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-chip">
                <Sparkles size={14} /> Personal AI OS
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>v0.1 · Arquitectura Modular</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
              LEVA Core <span className="gradient-text">— Sistema Operativo Personal Inteligente</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
              Diseñado con arquitectura orientada a eventos, memoria persistente semántica y orquestación autónoma de herramientas.
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              borderRadius: '12px',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              background: activeTab === 'architecture' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'architecture' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'architecture' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Cpu size={16} /> Arquitectura Técnica
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            style={{
              background: activeTab === 'agents' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'agents' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'agents' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Bot size={16} /> Agentes & Memoria
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            style={{
              background: activeTab === 'modules' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'modules' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'modules' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Network size={16} /> Módulos Funcionales
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'architecture' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Visual Pipeline Flow */}
            <div style={{
              background: 'rgba(2, 6, 23, 0.8)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Flujo de Inteligencia & Ejecución
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>1. Frontend React 19</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>UI / Chat / TanStack</div>
                </div>
                <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '1.2rem', display: 'flex', justifyContent: 'center' }}>
                  <ArrowRight size={18} />
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>2. FastAPI (Python 3.13)</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>REST API & Event Bus</div>
                </div>
                <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '1.2rem', display: 'flex', justifyContent: 'center' }}>
                  <ArrowRight size={18} />
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>3. LangGraph & MCP</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Orquestación & Tools</div>
                </div>
                <div style={{ textAlign: 'center', color: '#38bdf8', fontSize: '1.2rem', display: 'flex', justifyContent: 'center' }}>
                  <ArrowRight size={18} />
                </div>
                <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>4. pgvector & Postgres</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Búsqueda Semántica</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '8px', fontSize: '1rem' }}>
                  <Database size={16} /> Base de Datos & Embeddings
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  PostgreSQL 17 con extensión <strong>pgvector</strong> para almacenar y comparar embeddings vectoriales en milisegundos. Redis como capa ultrarrápida de caché y sesiones.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#818cf8', marginBottom: '8px', fontSize: '1rem' }}>
                  <Cpu size={16} /> Backend Robusto
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  FastAPI bajo Python 3.13 con SQLAlchemy 2.x asíncrono, migraciones controladas con Alembic, Pydantic v2 para tipado estricto y APScheduler para tareas en background.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', marginBottom: '8px', fontSize: '1rem' }}>
                  <ShieldCheck size={16} /> Agnóstico de Proveedor
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  Capacidad de conmutar transparentemente entre modelos locales y privados (Ollama) o APIs en la nube (OpenAI, Gemini), manteniendo la soberanía total de datos.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
              LEVA Core divide la carga cognitiva en agentes especializados que operan bajo un agente coordinador central (Assistant Agent):
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                <div style={{ fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>🤖 Assistant Agent</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Agente principal. Interactúa en lenguaje natural, comprende intenciones y delega tareas a los agentes especialistas.</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: '4px' }}>🧠 Context Intelligence Layer</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Gestiona 4 tipos de memoria: a corto plazo (conversación), a largo plazo (hechos), semántica (relaciones vectoriales) y conductual (hábitos).</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                <div style={{ fontWeight: 700, color: '#34d399', marginBottom: '4px' }}>📬 Mail & Calendar Agent</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Clasifica correos de Gmail con inferencia contextual, extrae pendientes críticos y redacta borradores sugeridos.</div>
              </div>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                <div style={{ fontWeight: 700, color: '#f472b6', marginBottom: '4px' }}>⚡ Automation Agent</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Genera resúmenes diarios, recordatorios proactivos y análisis de productividad personal sin necesidad de comandos manuales.</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '6px' }}>
                <Sparkles size={16} /> <strong>Dashboard Central</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Resumen inteligente del día con métricas de productividad, estado de rutinas y alertas prioritarias.</p>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#818cf8', marginBottom: '6px' }}>
                <Mail size={16} /> <strong>Mail Hub Conectado</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Bandeja Gmail sincronizada con paginación optimizada, categorización IA y búsqueda en lenguaje natural.</p>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', marginBottom: '6px' }}>
                <CheckSquare size={16} /> <strong>Hábitos & Streaks</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Registro diario interactivo, cálculo de rachas continuas y estadísticas gráficas de constancia.</p>
            </div>
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', marginBottom: '6px' }}>
                <Calendar size={16} /> <strong>Proyectos & Agenda</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Gestión integral de proyectos personales y técnicos con seguimiento de hitos y cronograma unificado.</p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{
          marginTop: '28px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Desarrollado y mantenido por Lautaro Varga
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://github.com/lauasdasd/LEVA-Core"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '10px 18px' }}
            >
              <ExternalLink size={16} /> Ver Repositorio en GitHub
            </a>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '10px 18px' }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
