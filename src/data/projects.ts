export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string | null
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'EcoTrack Dash',
    description:
      'Dashboard interactivo para medir la huella de carbono empresarial en tiempo real con gráficos dinámicos.',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    image: null,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 2,
    title: 'CryptoSprout',
    description:
      'Simulador educativo de billetera virtual para la gestión de microinversiones en criptoactivos orientada a jóvenes.',
    tags: ['TypeScript', 'Next.js', 'Sass'],
    image: null,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 3,
    title: 'ChefReserve API',
    description:
      'API REST para la gestión de reservas de restaurantes con alta concurrencia y sistema de notificaciones automáticas.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: null,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 4,
    title: 'AuraFit App',
    description:
      'Landing page minimalista para una aplicación móvil de bienestar mental, meditación guiada y seguimiento del sueño.',
    tags: ['Astro', 'HTML5', 'CSS Grid'],
    image: null,
    githubUrl: '#',
    demoUrl: '#',
  },
]
