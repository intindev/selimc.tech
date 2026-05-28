const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js',
  'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB',
  'Git', 'Docker', 'REST APIs', 'GraphQL',
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/80 transition cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
