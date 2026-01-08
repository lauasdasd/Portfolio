import libreria from '../assets/projects/TiendaOnline.png'
import libreria2 from '../assets/projects/GestionStock.png'
import concejo from '../assets/projects/Concejo.png'
import prestamos from '../assets/projects/Prestamos.png'
import finanzas from '../assets/projects/Finanzas.png'
import kiosco from '../assets/projects/Kiosco.png'

const proyectos = [
  {
    nombre: 'Sistema de Librería - Tienda Online',
    descripcion: 'Sistema web completo para la gestión y venta online de productos de librería. Incluye panel administrativo, control de stock en tiempo real, catálogo de productos y proceso de compra con integración a Mercado Pago. Proyecto real desarrollado, vendido e implementado para un comercio.',
    imagen: libreria,
    tecnologias: ['PHP', 'MySQL', 'Bootstrap', 'Mercado Pago'],
    link: 'https://github.com/lauasdasd/libreria'
  },
    {
    nombre: 'Sistema de Librería - Gestion de Stock',
    descripcion: 'Sistema interno de gestión de stock orientado a librerías y pequeños comercios. Permite administrar artículos, categorías, movimientos de stock y precios, facilitando el control diario del inventario y la toma de decisiones.',
    imagen: libreria2,
    tecnologias: ['PHP', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/lauasdasd/libreria'
  },
  {
    nombre: 'Concejo Municipal',
    descripcion: 'Sistema de gestión documental para el Concejo Municipal, diseñado para mantener la trazabilidad completa de documentos como actas, expedientes y resoluciones. El proyecto requirió un análisis funcional profundo, manejo de múltiples flujos y adaptación constante a requerimientos cambiantes.',
    imagen: concejo,
    tecnologias: ['PHP', 'MySQL', 'JavaScript'],
    link: 'https://github.com/lauasdasd/Administraci-n-Municipal'
  },
  {
    nombre: 'Préstamos Tercerizados',
    descripcion: 'Sistema de gestión de préstamos para una empresa tercerizada que opera con entidades bancarias. Permite registrar clientes, préstamos, cuotas y vencimientos, e integra APIs externas para validaciones crediticias y generación de reportes personalizados.',
    imagen: prestamos,
    tecnologias: ['PHP', 'MySQL', 'APIs REST'],
    link: 'https://github.com/lauasdasd/Gstando'
  },
  {
    nombre: 'Family Finance',
    descripcion: 'Aplicación web para la gestión de finanzas personales o de pequeños negocios. Permite separar cuentas por usuario, registrar ingresos y egresos y visualizar el estado financiero. Desarrollado con backend en Python y frontend en React.',
    imagen: finanzas,
    tecnologias: ['Python', 'React', 'Axios'],
    link: 'https://github.com/lauasdasd/family-finance-manager'
  },
  {
    nombre: 'Sistema de gestion de Kiosco',
    descripcion: 'Sistema de escritorio desarrollado en C# para la gestión integral de un kiosco. Incluye control de stock, registro de ventas, actualización de precios y seguimiento de ingresos, orientado a optimizar la operatoria diaria del comercio.',
    imagen: kiosco,
    tecnologias: ['C#'],
    link: 'https://github.com/lauasdasd/Gestion-de-Kiosco'
  }
]

export default function Projects() {
  return (
    <section id="projects" style={{
      maxWidth: '1100px',
      margin: '60px auto',
      padding: '0 20px'
    }}>
      <h2 style={{ marginBottom: 30 }}>Proyectos</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }}>
        {proyectos.map((p, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 30,
            background: '#020617',
            padding: 20,
            borderRadius: 16
          }}>
            <img
            src={p.imagen}
            alt={p.nombre}
            style={{
                width: 'auto',
                height: 280,
                borderRadius: 12,
                objectFit: 'cover'
            }}
            />

            <div>
              <h3>{p.nombre}</h3>
              <p style={{ color: '#94a3b8', margin: '10px 0' }}>
                {p.descripcion}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 12
              }}>
                {p.tecnologias.map((t, j) => (
                  <span key={j} style={{
                    background: '#0f172a',
                    padding: '6px 10px',
                    borderRadius: 12,
                    fontSize: 13
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" style={{ color: '#38bdf8' }}>
                Ver repositorio →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
