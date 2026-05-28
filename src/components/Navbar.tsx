'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">selimc.tech</Link>
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition">{link}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 bg-black/90">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition" onClick={() => setOpen(false)}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
