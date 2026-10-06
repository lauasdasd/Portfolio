import { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Cpu, Database, Layout, Sparkles, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

export interface ProjectDetail {
  id: string;
  nombre: string;
  badge?: string;
  isFlagship?: boolean;
  categoria: 'ai' | 'web' | 'desktop';
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  link: string;
  stackCategorizado: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    integraciones?: string[];
    metodologias?: string[];
  };
  arquitectura: string;
  caracteristicas: string[];
  desafioTecnico: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onOpenLevaSpecial?: () => void;
}

export default function ProjectDetailModal({ project, onClose, onOpenLevaSpecial }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'stack' | 'architecture'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'linear-gradient(180deg, #0d1527 0%, #060a16 100%)',
          border: project.isFlagship ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(148, 163, 184, 0.2)',
          boxShadow: project.isFlagship
            ? '0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 45px rgba(56, 189, 248, 0.2)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          padding: '30px',
          borderRadius: '24px',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              {project.badge && (
                <span className="badge-chip" style={{
                  background: project.isFlagship ? 'rgba(56, 189, 248, 0.15)' : 'rgba(148, 163, 184, 0.1)',
                  borderColor: project.isFlagship ? 'rgba(56, 189, 248, 0.4)' : 'rgba(148, 163, 184, 0.2)',
                  color: project.isFlagship ? '#38bdf8' : '#e2e8f0'
                }}>
                  {project.isFlagship && <Sparkles size={14} />} {project.badge}
                </span>
              )}
              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                {project.categoria === 'ai' ? 'Inteligencia Artificial & Agentes' : project.categoria === 'web' ? 'Sistema Web Full Stack' : 'Software de Escritorio / POS'}
              </span>
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.25 }}>
              {project.nombre}
            </h2>
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
              transition: 'all 0.2s',
              flexShrink: 0
            }}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Full Image Banner (Renderizado sin estirar, preservando aspecto real) */}
        <div style={{
          width: '100%',
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#020617',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
        }}>
          <img
            src={project.imagen}
            alt={project.nombre}
            style={{
              width: '100%',
              maxHeight: '380px',
              objectFit: 'contain',
              display: 'block',
              background: '#020617'
            }}
          />
        </div>

        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '10px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              background: activeTab === 'overview' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'overview' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'overview' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Layers size={16} /> Visión General & Retos
          </button>

          <button
            onClick={() => setActiveTab('stack')}
            style={{
              background: activeTab === 'stack' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'stack' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'stack' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Cpu size={16} /> Stack Tecnológico Completo
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            style={{
              background: activeTab === 'architecture' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
              color: activeTab === 'architecture' ? '#38bdf8' : '#94a3b8',
              border: activeTab === 'architecture' ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
              padding: '8px 16px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <CheckCircle2 size={16} /> Arquitectura & Funcionalidades
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Descripción del Proyecto
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: '1.7' }}>
                {project.descripcion}
              </p>
            </div>

            <div style={{
              background: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '14px',
              padding: '18px 20px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
                <AlertCircle size={18} /> Desafío Técnico & Solución Implementada
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                {project.desafioTecnico}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Stack Tecnológico */}
        {activeTab === 'stack' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0 }}>
              Desglose de tecnologías y herramientas seleccionadas para este sistema:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              {project.stackCategorizado.frontend && (
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '0.92rem', marginBottom: '10px' }}>
                    <Layout size={16} /> Frontend & UI
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stackCategorizado.frontend.map((t, i) => (
                      <span key={i} style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#6ee7b7', border: '1px solid rgba(52, 211, 153, 0.25)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.stackCategorizado.backend && (
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#818cf8', fontWeight: 700, fontSize: '0.92rem', marginBottom: '10px' }}>
                    <Cpu size={16} /> Backend & Lógica
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stackCategorizado.backend.map((t, i) => (
                      <span key={i} style={{ background: 'rgba(129, 140, 248, 0.1)', color: '#a5b4fc', border: '1px solid rgba(129, 140, 248, 0.25)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.stackCategorizado.database && (
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, fontSize: '0.92rem', marginBottom: '10px' }}>
                    <Database size={16} /> Base de Datos & Persistencia
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stackCategorizado.database.map((t, i) => (
                      <span key={i} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#fcd34d', border: '1px solid rgba(245, 158, 11, 0.25)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.stackCategorizado.integraciones && (
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '14px', border: '1px solid #1e293b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: 700, fontSize: '0.92rem', marginBottom: '10px' }}>
                    <Sparkles size={16} /> Integraciones / APIs / Extras
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stackCategorizado.integraciones.map((t, i) => (
                      <span key={i} style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Architecture & Features */}
        {activeTab === 'architecture' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '18px', borderRadius: '14px', border: '1px solid #1e293b' }}>
              <div style={{ fontWeight: 700, color: '#38bdf8', fontSize: '0.95rem', marginBottom: '6px' }}>
                📐 Arquitectura del Sistema
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
                {project.arquitectura}
              </p>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem', marginBottom: '10px' }}>
                Funcionalidades & Módulos Principales
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {project.caracteristicas.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(15, 23, 42, 0.5)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <CheckCircle2 size={16} color="#34d399" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.4' }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{
          marginTop: '28px',
          paddingTop: '18px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            {project.isFlagship && onOpenLevaSpecial && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLevaSpecial();
                }}
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '10px 16px', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}
              >
                <Sparkles size={16} /> Abrir Panel Detallado de LEVA Core
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.88rem', padding: '10px 20px' }}
            >
              <Github size={16} /> Ver Repositorio en GitHub <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ fontSize: '0.88rem', padding: '10px 18px' }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
