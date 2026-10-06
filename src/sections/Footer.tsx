import { useState } from 'react';
import { Mail, Github, Check, Copy, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "vargaacosta.work@gmail.com"; // Email de contacto representativo

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{
      marginTop: '100px',
      borderTop: '1px solid rgba(148, 163, 184, 0.1)',
      background: 'linear-gradient(180deg, transparent 0%, rgba(2, 6, 23, 0.95) 100%)',
      padding: '60px 20px 40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Contact Call to Action */}
        <div
          className="glass-card"
          style={{
            padding: '40px',
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, rgba(13, 21, 39, 0.9) 0%, rgba(15, 23, 42, 0.8) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 20px 40px -15px rgba(56, 189, 248, 0.1)'
          }}
        >
          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
            ¿Buscás sumar talento técnico <span className="gradient-text">a tu equipo o proyecto?</span>
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 28px auto' }}>
            Estoy abierto a propuestas laborales como Desarrollador Full Stack / Backend / AI Developer. Charlamos sobre cómo puedo aportar valor técnico desde el primer día.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopyEmail}
              className="btn-primary"
              style={{ cursor: 'pointer' }}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? '¡Email Copiado al portapapeles!' : `Copiar Email (${email})`}
            </button>

            <a
              href={`mailto:${email}?subject=Contacto%20desde%20Portfolio`}
              className="btn-secondary"
            >
              <Mail size={18} /> Enviar Correo
            </a>

            <a
              href="https://github.com/lauasdasd"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Github size={18} /> GitHub <ExternalLink size={14} color="#38bdf8" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          color: '#64748b',
          fontSize: '0.9rem',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Lautaro Varga</strong>. Diseñado con React 19, TypeScript y pasión por la ingeniería.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="https://github.com/lauasdasd/LEVA-Core" target="_blank" rel="noreferrer" style={{ color: '#38bdf8', fontWeight: 600 }}>
              LEVA Core Repo
            </a>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                color: '#94a3b8',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.82rem',
                transition: 'all 0.2s'
              }}
            >
              Volver arriba <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
