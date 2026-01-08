const stack = [
  'PHP',
  'MySQL',
  'React',
  'JavaScript',
  'Bootstrap',
  'Python',
  'C#',
  'Node.js',
  'Git',
  'APIs REST'
]

export default function Stack() {
  return (
    <section style={{
      margin: '40px auto',
      padding: '0 20px'
    }}>
      <h2 style={{ marginBottom: 20 }}>Stack Tecnológico</h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12
      }}>
        {stack.map((tech, i) => (
          <span key={i} style={{
            background: '#020617',
            padding: '8px 14px',
            borderRadius: 20,
            fontSize: 14,
            color: '#38bdf8'
          }}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
