'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const PHOTO_URL =
  'https://res.cloudinary.com/det1qnlrh/image/upload/v1779963425/IMG_7873_go3txx.png'

const WORDS = ['CODES', 'CREATES', 'CAUSE CHAOS', 'CHITTAGONG']
const TYPE_SPEED = 80
const DELETE_SPEED = 45
const PAUSE_AFTER_TYPE = 1600
const PAUSE_AFTER_DELETE = 350

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paused) return
    const target = WORDS[wordIdx]

    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          TYPE_SPEED
        )
        return () => clearTimeout(t)
      } else {
        setPaused(true)
        const t = setTimeout(() => { setPaused(false); setTyping(false) }, PAUSE_AFTER_TYPE)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DELETE_SPEED
        )
        return () => clearTimeout(t)
      } else {
        setPaused(true)
        const t = setTimeout(() => {
          setWordIdx(i => (i + 1) % WORDS.length)
          setTyping(true)
          setPaused(false)
        }, PAUSE_AFTER_DELETE)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, typing, wordIdx, paused])

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
      {/* Full-bleed photo */}
      <Image
        src={PHOTO_URL}
        alt="Selim C"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-right"
        style={{ zIndex: 0 }}
      />

      {/* Desktop: left black gradient */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* Desktop: text */}
      <div
        className="hidden md:flex absolute inset-0 flex-col justify-center pl-16 xl:pl-28"
        style={{ zIndex: 2 }}
      >
        {/* SELIM C heading */}
        <h1 className="text-6xl xl:text-8xl font-black tracking-tight text-white leading-none mb-6 select-none">
          SELIM<span className="text-yellow-400">C</span>
        </h1>

        {/* Typewriter line */}
        <div className="flex items-center gap-0 text-2xl xl:text-3xl font-bold h-10">
          <span className="text-white/50 mr-2 font-light tracking-widest text-lg"></span>
          <span className="text-white tracking-wide">{displayed}</span>
          <span className="inline-block w-[3px] h-7 bg-yellow-400 ml-1 animate-pulse rounded-sm" />
        </div>

        <div className="flex gap-4 mt-12">
          <a
            href="#projects"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
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

      {/* Mobile: bottom gradient for arrow readability */}
      <div
        aria-hidden
        className="md:hidden absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* Mobile: SELIMC + typewriter over photo */}
      <div
        className="md:hidden absolute inset-x-0 bottom-24 flex flex-col items-center"
        style={{ zIndex: 2 }}
      >
        <h1 className="text-5xl font-black tracking-tight text-white leading-none mb-3 select-none">
          SELIM<span className="text-yellow-400">C</span>
        </h1>
        <div className="flex items-center text-lg font-bold h-7">
          <span className="text-white tracking-wide">{displayed}</span>
          <span className="inline-block w-[2px] h-5 bg-yellow-400 ml-1 animate-pulse rounded-sm" />
        </div>
      </div>

      {/* Animated down arrow */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-yellow-400 transition focus:outline-none"
        style={{ zIndex: 3 }}
      >
        <span className="text-[10px] tracking-widest uppercase opacity-50 hidden md:block">Scroll</span>
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
