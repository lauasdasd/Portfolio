import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Github, Send } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      background: isScrolled ? 'rgba(7, 12, 24, 0.9)' : 'rgba(7, 12, 24, 0.7)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Brand / Name */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0284c7 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
          }}>
            LV
          </div>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', lineHeight: '1.2' }}>
              Lautaro Varga
            </div>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
              Full Stack & AI Developer
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }} className="desktop-nav">
          <a href="#hero" style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
            Sobre mí
          </a>
          <a
            href="#leva-core"
            style={{
              color: '#38bdf8',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.25)'
            }}
          >
            <Sparkles size={14} /> LEVA Core
          </a>
          <a href="#projects" style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
            Proyectos
          </a>
          <a href="#stack" style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
            Stack
          </a>
          <a href="#education" style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
            Formación
          </a>
          <a href="#contact" style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>
            Contacto
          </a>

          <a
            href="https://github.com/lauasdasd"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#f8fafc',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: '6px 14px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 600
            }}
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            color: '#f8fafc',
            padding: '8px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(7, 12, 24, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 1000
        }}>
          <a href="#hero" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 500 }}>
            Sobre mí
          </a>
          <a
            href="#leva-core"
            onClick={() => setIsOpen(false)}
            style={{
              color: '#38bdf8',
              fontSize: '1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Sparkles size={16} /> LEVA Core (Proyecto Insignia)
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 500 }}>
            Proyectos
          </a>
          <a href="#stack" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 500 }}>
            Stack Tecnológico
          </a>
          <a href="#education" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 500 }}>
            Formación
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 500 }}>
            Contacto
          </a>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <a
              href="https://github.com/lauasdasd"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ flex: 1, fontSize: '0.9rem', padding: '10px' }}
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-secondary"
              style={{ flex: 1, fontSize: '0.9rem', padding: '10px' }}
            >
              <Send size={16} /> Escribir
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}