export default function Education() {
  return (
    <section
      id="education"
      style={{
        maxWidth: '900px',
        margin: '80px auto',
        padding: '0 20px'
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Formación</h2>

      <div
        style={{
          background: '#020617',
          padding: 30,
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 25
        }}
      >
        {/* Título principal */}
        <div>
          <h3 style={{ marginBottom: 6 }}>
            Tecnicatura Superior en Desarrollo de Software
          </h3>
          <p style={{ color: '#94a3b8', margin: 0 }}>
            Título oficial · Nivel Terciario
          </p>
        </div>

        {/* Cursos */}
        <div>
          <h4 style={{ marginBottom: 12 }}>Cursos Complementarios</h4>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10
            }}
          >
            <li>
              <strong>Programación Python</strong> — BrainShock SA
            </li>
            <li>
              <strong>Tester QA</strong> — Digitalers — EducationIT
            </li>
            <li>
              <strong>Introducción a la Ciberseguridad</strong> — EducationIT
            </li>
            <li>
              <strong>Render & Codecs</strong> — EducationIT
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
