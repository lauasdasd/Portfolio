import { Sparkles, Terminal, ArrowRight, Github, Mail, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{ margin: '60px auto 40px auto', padding: '0 20px', maxWidth: '1200px' }}>
      {/* Availability Status Badge */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '6px 16px', borderRadius: '9999px', marginBottom: '24px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', display: 'inline-block' }}></span>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399' }}>
          Disponible para proyectos y oportunidades IT
        </span>
      </div>

      {/* Main Title & Role */}
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: '1.15', marginBottom: '20px' }}>
        Lautaro Varga <br />
        <span className="gradient-text">Full Stack & AI Software Developer</span>
      </h1>

      {/* Value Proposition */}
      <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.7', maxWidth: '850px', marginBottom: '32px' }}>
        Técnico Superior en Desarrollo de Software especializado en el diseño de arquitecturas escalables, sistemas web robustos y soluciones impulsadas por <strong>Inteligencia Artificial con memoria persistente</strong>.
        Creador de <a href="#leva-core" style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'underline' }}>LEVA Core</a> y con experiencia comprobada desarrollando e implementando sistemas de gestión comercial, documental y financiera en entornos reales de producción.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <a href="#leva-core" className="btn-primary">
          <Sparkles size={18} /> Explorar LEVA Core (Flagship) <ArrowRight size={16} />
        </a>
        <a href="#projects" className="btn-secondary">
          <Layers size={18} /> Ver Todos los Proyectos
        </a>
        <a 
          href="https://github.com/lauasdasd" 
          target="_blank" 
          rel="noreferrer" 
          className="btn-secondary"
          style={{ padding: '12px 18px' }}
        >
          <Github size={18} /> GitHub
        </a>
        <a href="#contact" className="btn-secondary" style={{ padding: '12px 18px' }}>
          <Mail size={18} /> Contacto
        </a>
      </div>

      {/* Quick Stats / Differentiators */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}>
        <div className="glass-card" style={{ padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', marginBottom: '8px' }}>
            <Terminal size={20} />
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc' }}>LEVA Core: Personal AI OS</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
            Desarrollo de agentes autónomos con LangGraph, herramientas MCP y memoria semántica en pgvector.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '8px' }}>
            <CheckCircle2 size={20} />
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc' }}>Sistemas en Producción</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
            Sistemas reales vendidos e implementados para comercios, entidades crediticias y gestión municipal.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#818cf8', marginBottom: '8px' }}>
            <Layers size={20} />
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#f8fafc' }}>Stack Integral & Moderno</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
            Python 3.13, FastAPI, PostgreSQL, React 19, TypeScript, C#, Docker y buenas prácticas de arquitectura.
          </p>
        </div>
      </div>
    </section>
  );
}
