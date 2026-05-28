'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const PHOTO_URL =
  'https://res.cloudinary.com/det1qnlrh/image/upload/v1779963425/IMG_7873_go3txx.png'

export default function Hero() {
  // fade-in on mount
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollDown = () => {
    const next = document.getElementById('about')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className={`relative w-full h-screen overflow-hidden transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* ── Full-bleed photo ── */}
      <Image
        src={PHOTO_URL}
        alt="Selim C"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-right"
        style={{ zIndex: 0 }}
      />

      {/* ── Desktop: left-side black gradient overlay ── */}
      <div
        aria-hidden
        className="
          hidden md:block
          absolute inset-0
          bg-gradient-to-r from-black via-black/70 to-transparent
        "
        style={{ zIndex: 1 }}
      />

      {/* ── Desktop: text content on the left ── */}
      <div
        className="
          hidden md:flex
          absolute inset-0
          flex-col justify-center
          pl-16 xl:pl-28
          max-w-xl
        "
        style={{ zIndex: 2 }}
      >
        <p className="text-primary uppercase tracking-[0.25em] text-sm mb-3 font-medium">
          Hello, I&apos;m
        </p>
        <h1 className="text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
          Selim C
        </h1>
        <p className="text-gray-300 text-xl mb-10">
          Full Stack Developer &amp; Business Owner
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ── Mobile: subtle bottom gradient so arrow is readable ── */}
      <div
        aria-hidden
        className="
          md:hidden
          absolute inset-x-0 bottom-0 h-40
          bg-gradient-to-t from-black/60 to-transparent
        "
        style={{ zIndex: 1 }}
      />

      {/* ── Animated down-arrow (both mobile & desktop) ── */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1
          text-white/80 hover:text-white transition
          focus:outline-none
        "
        style={{ zIndex: 3 }}
      >
        <span className="text-xs tracking-widest uppercase opacity-60 hidden md:block">
          Scroll
        </span>
        {/* bouncing chevron */}
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
