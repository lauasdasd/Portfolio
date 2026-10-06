import { useState } from 'react';
import { Sparkles, Brain, Cpu, Database, Mail, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import levaImage from '../assets/projects/LevaCore.png';
import LevaCoreModal from '../components/LevaCoreModal';

export default function LevaCoreFeatured() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techs = [
    'Python 3.13',
    'FastAPI',
    'PostgreSQL 17',
    'pgvector',
    'LangGraph',
    'MCP (Model Context Protocol)',
    'Redis',
    'React 19',
    'TypeScript',
    'Docker'
  ];

  return (
    <section id="leva-core" style={{ margin: '80px auto', padding: '0 20px', maxWidth: '1200px' }}>
      <LevaCoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Flagship Banner Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span className="badge-chip" style={{ fontSize: '0.85rem', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.12)' }}>
            <Sparkles size={16} /> PROYECTO INSIGNIA · FLAGSHIP
          </span>
        </div>
        <h2 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          LEVA Core <span className="gradient-text">— Personal AI Operating System</span>
        </h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.7' }}>
          Un sistema operativo personal impulsado por Inteligencia Artificial que centraliza la vida del usuario, comprende su contexto integral y automatiza tareas mediante memoria persistente semántica y agentes autónomos.
        </p>
      </div>

      {/* Main Feature Card */}
      <div
        className="glass-card"
        style={{
          padding: '36px',
          background: 'linear-gradient(135deg, rgba(13, 21, 39, 0.85) 0%, rgba(8, 14, 28, 0.95) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.15)',
          borderRadius: '24px'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          {/* Left / Top: Mockup Image with overlay */}
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            aspectRatio: '16 / 9',
            background: '#020617',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={levaImage}
              alt="LEVA Core Dashboard & Context Intelligence"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px 20px',
              background: 'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.95) 100%)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Brain size={16} color="#38bdf8" /> Context Intelligence Layer
              </span>
              <span style={{ fontSize: '0.75rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '2px 8px', borderRadius: '6px' }}>
                pgvector + LangGraph
              </span>
            </div>
          </div>

          {/* Right: Technical Highlights & Value */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Filosofía de Arquitectura
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f8fafc', lineHeight: '1.3' }}>
                "La IA no guarda datos ni inventa respuestas. La IA utiliza herramientas y memoria persistente."
              </h3>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Diseñado desde cero bajo una arquitectura de <strong>Monolito Modular</strong> con backend en FastAPI, base de datos relacional y vectorial con <strong>PostgreSQL 17 + pgvector</strong>, y frontend reactivo en <strong>React 19 con TypeScript</strong>.
            </p>

            {/* Quick Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontWeight: 600, fontSize: '0.85rem' }}>
                  <Brain size={15} /> Memoria Semántica
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                  Embeddings y similitud vectorial para comprender contexto a largo plazo.
                </div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#818cf8', fontWeight: 600, fontSize: '0.85rem' }}>
                  <Cpu size={15} /> LangGraph & MCP
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                  Agentes especializados coordinados con acceso a herramientas reales.
                </div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: 600, fontSize: '0.85rem' }}>
                  <Mail size={15} /> Mail Hub Inteligente
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                  Sincronización Gmail, paginación por lotes y categorización IA.
                </div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem' }}>
                  <Database size={15} /> Event-Driven + Redis
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>
                  Registro de eventos en tiempo real, caché y tareas programadas.
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              {techs.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    color: '#38bdf8',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    border: '1px solid rgba(56, 189, 248, 0.25)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                <Layers size={18} /> Explorar Arquitectura & Agentes
              </button>
              <a
                href="https://github.com/lauasdasd/LEVA-Core"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <ExternalLink size={18} /> Ver Código en GitHub
                <ArrowUpRight size={14} style={{ color: '#38bdf8' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
