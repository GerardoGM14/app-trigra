// Tecnologías de la cinta "Tecnología que respalda cada solución".
// Logos en public/images/tecnologias/<slug>.svg (también sirve .png o .webp).
// Solo se muestran las que tienen logo. El orden aquí es el de la cinta.
export interface Tecnologia {
  slug: string;
  name: string;
  category: string;
}

export const tecnologias: Tecnologia[] = [
  { slug: 'javascript', name: 'JavaScript', category: 'Lenguaje' },
  { slug: 'typescript', name: 'TypeScript', category: 'Lenguaje' },
  { slug: 'docker', name: 'Docker', category: 'Contenedorización' },
  { slug: 'react', name: 'React', category: 'Librería' },
  { slug: 'github-actions', name: 'GitHub Actions', category: 'CI/CD / Automatización' },
  { slug: 'flutter', name: 'Flutter', category: 'Framework / SDK' },
  { slug: 'laravel', name: 'Laravel', category: 'Framework' },
  { slug: 'aspnet-core', name: 'ASP.NET Core', category: 'Framework' },
  // Usadas en los proyectos destacados
  { slug: 'astro', name: 'Astro', category: 'Framework' },
  { slug: 'nodejs', name: 'Node.js', category: 'Entorno de ejecución' },
  { slug: 'nestjs', name: 'NestJS', category: 'Framework' },
  { slug: 'firebase', name: 'Firebase', category: 'Backend / Hosting' },
];
