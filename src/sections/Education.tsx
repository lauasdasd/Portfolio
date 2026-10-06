import { GraduationCap, Award, Shield, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      style={{
        margin: '80px auto',
        padding: '0 20px',
        maxWidth: '1200px'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          Formación Académica <span className="gradient-text">& Especializaciones</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
          Base técnica sólida combinada con aprendizaje continuo en tecnologías emergentes, control de calidad y buenas prácticas de ingeniería.
        </p>
      </div>

      {/* Grid Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Main Degree Card (Full Width / Span) */}
        <div
          className="glass-card"
          style={{
            gridColumn: '1 / -1',
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(13, 21, 39, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <GraduationCap size={30} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Título Oficial Homologado
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>
                Tecnicatura Superior en Desarrollo de Software
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '4px 0 0 0' }}>
                Nivel Terciario Oficial · Formación intensiva en algoritmia, bases de datos relacionales, POO, ingeniería de software y desarrollo web integral.
              </p>
            </div>
          </div>
          <span className="badge-chip" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
            Graduado Oficial
          </span>
        </div>

        {/* Secondary Card 1: Courses */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              padding: '8px',
              borderRadius: '10px',
              background: 'rgba(129, 140, 248, 0.15)',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={22} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Cursos Técnicos
            </h4>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ borderLeft: '2px solid #818cf8', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Programación Python Avanzado</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>BrainShock SA — Estructuras de datos, POO, scripts y APIs.</div>
            </li>
            <li style={{ borderLeft: '2px solid #818cf8', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Tester QA & Testing de Software</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Digitalers (EducationIT) — Casos de prueba, testing funcional y aseguramiento de calidad.</div>
            </li>
          </ul>
        </div>

        {/* Secondary Card 2: Specializations */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              padding: '8px',
              borderRadius: '10px',
              background: 'rgba(52, 211, 153, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield size={22} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Especializaciones
            </h4>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ borderLeft: '2px solid #34d399', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Introducción a la Ciberseguridad</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>EducationIT — Buenas prácticas de seguridad en aplicaciones web, cifrado y vectores de ataque.</div>
            </li>
            <li style={{ borderLeft: '2px solid #34d399', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Render & Codecs Multimedia</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>EducationIT — Optimización de assets, procesamiento multimedia y rendimiento.</div>
            </li>
          </ul>
        </div>

        {/* Third Card: Methodologies & Engineering mindset */}
        <div className="glass-card" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              padding: '8px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.15)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle2 size={22} />
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              Metodologías & Buenas Prácticas
            </h4>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ borderLeft: '2px solid #f59e0b', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Metodologías Ágiles</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Scrum y Kanban para planificación de sprints, estimaciones y entregas continuas.</div>
            </li>
            <li style={{ borderLeft: '2px solid #f59e0b', paddingLeft: '14px' }}>
              <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>Arquitectura Mantenible</div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Código limpio (Clean Code), separación de responsabilidades y modularidad.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}