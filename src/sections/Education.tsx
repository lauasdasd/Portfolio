export default function Education() {
  const cardStyle: React.CSSProperties = {
    background: '#020617',
    padding: '30px',
    borderRadius: '16px',
    border: '1px solid #1e293b',
  };

  return (
    <section
      id="education"
      style={{
        margin: '60px auto',
        padding: '0 20px',
      }}
    >
      <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Formación</h2>

      {/* Contenedor Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // Crea dos columnas iguales
          gap: '20px', // Espacio entre cards
        }}
      >
        {/* Card Principal: Ocupa las dos columnas (span 2) */}
        <div style={{ ...cardStyle, gridColumn: 'span 2' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>
            Tecnicatura Superior en Desarrollo de Software
          </h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>
            Título oficial · Nivel Terciario
          </p>
        </div>

        {/* Card Secundaria 1: 50% */}
        <div style={cardStyle}>
          <h4 style={{ marginBottom: '15px', color: '#38bdf8' }}>Cursos de Programación</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>Programación Python</strong> — BrainShock SA</li>
            <li><strong>Tester QA</strong> — Digitalers (EducationIT)</li>
          </ul>
        </div>

        {/* Card Secundaria 2: 50% */}
        <div style={cardStyle}>
          <h4 style={{ marginBottom: '15px', color: '#38bdf8' }}>Especializaciones</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>Introducción a la Ciberseguridad</strong> — EducationIT</li>
            <li><strong>Render & Codecs</strong> — EducationIT</li>
          </ul>
        </div>
      </div>
    </section>
  );
}