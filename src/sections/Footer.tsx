export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: 40,
      color: '#64748b'
    }}>
      © {new Date().getFullYear()} Lautaro Varga · Portfolio
    </footer>
  )
}
