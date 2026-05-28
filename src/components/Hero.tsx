export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <p className="text-primary text-lg mb-3 tracking-widest uppercase">Hello, I&apos;m</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Selim C</h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8">Full Stack Developer &amp; Business Owner</p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">View Projects</a>
        <a href="#contact" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Me</a>
      </div>
    </section>
  )
}
