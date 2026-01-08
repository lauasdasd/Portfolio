import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el tamaño de la pantalla para saber si mostrar hamburguesa
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const navLinkStyle = {
    color: '#f8fafc',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s'
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '70px' : 'auto',
    left: 0,
    width: isMobile ? '100%' : 'auto',
    background: '#020617',
    padding: isMobile ? '20px' : '0',
    gap: isMobile ? '20px' : '30px',
    borderBottom: isMobile ? '1px solid #1e293b' : 'none',
    zIndex: 999
  };

  return (
    <nav style={{
      background: '#020617',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #1e293b'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Logo / Nombre */}
        <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#38bdf8' }}>
          Varga Acosta, Lautaro
        </h2>

        {/* Botón Hamburguesa (solo móvil) */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Enlaces de Navegación */}
        <div style={mobileMenuStyle}>
          <a href="#hero" onClick={() => setIsOpen(false)} style={navLinkStyle}>Sobre mí</a>
          <a href="#education" onClick={() => setIsOpen(false)} style={navLinkStyle}>Formación</a>
          <a href="#projects" onClick={() => setIsOpen(false)} style={navLinkStyle}>Proyectos</a>
          <a 
            href="https://github.com/lauasdasd" 
            target="_blank" 
            rel="noreferrer"
            style={{ ...navLinkStyle, color: '#38bdf8', fontWeight: 'bold' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}