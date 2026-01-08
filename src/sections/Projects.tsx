import { useState } from 'react'
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
    nombre: 'Sistema de Gestión de Kiosco',
    descripcion: 'Software de escritorio desarrollado en C# enfocado en la seguridad y eficiencia operativa. El sistema implementa una arquitectura basada en roles: un Panel de Cajero para ventas ágiles y un Panel de Administrador para control total de stock, actualización masiva de precios y seguimiento detallado de ingresos diarios.',
    imagen: kiosco,
    tecnologias: ['C#', '.NET', 'SQL Server'], // Agregué SQL Server asumiendo que usas una DB
    link: 'https://github.com/lauasdasd/Gestion-de-Kiosco'
  }
]

function ProjectCard({ p }: { p: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#020617',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isHovered ? '#38bdf8' : '#1e293b',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        boxShadow: isHovered ? '0 10px 30px -10px rgba(56, 189, 248, 0.3)' : 'none'
      }}
    >
      <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
        <img
          src={p.imagen}
          alt={p.nombre}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderBottom: '1px solid #1e293b',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ 
          fontSize: '1.4rem', 
          marginBottom: 12, 
          color: isHovered ? '#38bdf8' : '#f8fafc', 
          transition: 'color 0.3s' 
        }}>
          {p.nombre}
        </h3>
        
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: 20, flexGrow: 1 }}>
          {p.descripcion}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {p.tecnologias.map((t: string, j: number) => (
            <span key={j} style={{
              background: '#0f172a',
              color: '#38bdf8',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontWeight: '600',
              border: '1px solid #38bdf844'
            }}>
              {t}
            </span>
          ))}
        </div>

        <a 
          href={p.link} 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            color: '#f8fafc', 
            textDecoration: 'none',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: '0.9rem'
          }}
        >
          Ver código en GitHub 
          <span style={{ 
            color: '#38bdf8', 
            transform: isHovered ? 'translateX(5px)' : 'translateX(0)', 
            transition: 'transform 0.3s' 
          }}>
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ margin: '80px auto', padding: '0 20px' }}>
      <h2 style={{ marginBottom: 40, fontSize: '2.5rem', fontWeight: 'bold' }}>Proyectos</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        {proyectos.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </section>
  )
}