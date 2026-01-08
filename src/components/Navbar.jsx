export default function Navbar() {
  return (
    <nav
      style={{
        background: '#020617', // más oscuro que el fondo general
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid #0f172a'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        <h2 style={{ margin: 0 }}>Varga Acosta, Lautaro</h2>

        <div>
          <a href="#projects" style={{ marginRight: 20 }}>
            Proyectos
          </a>
          <a href="https://github.com/lauasdasd" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
