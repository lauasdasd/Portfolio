import { Cpu, Database, Layout, Terminal, Bot } from 'lucide-react';

interface TechCategory {
  title: string;
  icon: any;
  color: string;
  skills: string[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Inteligencia Artificial & Agentes',
    icon: Bot,
    color: '#38bdf8',
    skills: [
      'LangGraph',
      'Model Context Protocol (MCP)',
      'pgvector (Vector Search)',
      'Embeddings Semánticos',
      'OpenAI SDK',
      'Ollama (Modelos Locales)',
      'Prompt Engineering Contextual'
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Cpu,
    color: '#818cf8',
    skills: [
      'Python 3.13+',
      'FastAPI',
      'SQLAlchemy 2.x',
      'Alembic',
      'PHP',
      'C# / .NET',
      'Node.js',
      'Arquitectura Monolito Modular',
      'Event-Driven Systems',
      'APIs RESTful'
    ]
  },
  {
    title: 'Frontend & UI',
    icon: Layout,
    color: '#34d399',
    skills: [
      'React 19',
      'TypeScript',
      'JavaScript (ES6+)',
      'Vite',
      'Tailwind CSS',
      'Zustand',
      'TanStack Query',
      'Bootstrap',
      'Responsive Web Design'
    ]
  },
  {
    title: 'Bases de Datos & Caché',
    icon: Database,
    color: '#f59e0b',
    skills: [
      'PostgreSQL 17+',
      'pgvector',
      'Redis',
      'MySQL',
      'SQL Server',
      'Modelado Relacional & NoSQL',
      'Optimización de Índices'
    ]
  },
  {
    title: 'DevOps & Herramientas',
    icon: Terminal,
    color: '#f472b6',
    skills: [
      'Docker',
      'Docker Compose',
      'Git & GitHub',
      'GitHub Actions (CI/CD)',
      'Linux / Bash',
      'Scrum & Kanban',
      'Postman'
    ]
  }
];

export default function Stack() {
  return (
    <section id="stack" style={{ margin: '80px auto', padding: '0 20px', maxWidth: '1200px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          Stack Tecnológico <span className="gradient-text">& Habilidades</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '700px', margin: '0 auto' }}>
          Herramientas, frameworks y lenguajes que utilizo para diseñar soluciones sólidas desde la concepción de la arquitectura hasta el despliegue.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {techCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '10px',
                  background: `${cat.color}18`,
                  color: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: '#e2e8f0',
                      border: '1px solid rgba(148, 163, 184, 0.1)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
