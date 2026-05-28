const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and TypeScript.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'E-commerce platform with payment integration and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Mobile-first responsive SaaS product for business management.',
    tech: ['Next.js', 'PostgreSQL', 'Docker'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/60 transition">
            <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map(t => (
                <span key={t} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <a href={p.link} className="text-primary text-sm hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
