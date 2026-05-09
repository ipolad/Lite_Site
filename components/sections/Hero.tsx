'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 1.7, prefix: '$', suffix: 'B+', label: 'In documented industry fines', decimals: 1 },
  { value: 90, prefix: '', suffix: '%', label: 'Of all data created in 2 years', decimals: 0 },
  { value: 3, prefix: '', suffix: 'x', label: 'Faster queries with tiered storage', decimals: 0 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,200,255,0.08),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/logo.png"
            alt="LITE Platform"
            width={160}
            height={96}
            className="object-contain drop-shadow-[0_0_30px_rgba(212,168,0,0.5)]"
            priority
          />
        </motion.div>

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.06)] rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-pulse" />
          <span className="text-xs font-medium text-[#00C8FF] tracking-wider uppercase">
            Data Retention Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-gradient-cyan">Minimize risk.</span>
          <br />
          <span className="text-gradient-white">Maximize performance.</span>
          <br />
          <span className="text-gradient-white">Optimize costs.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Making data retention seamless across your entire ecosystem —
          so you stay compliant, lean, and fast without lifting a finger.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Button href="#demo" size="lg">
            Request Demo →
          </Button>
          <Button href="#solution" variant="secondary" size="lg">
            See How It Works ↓
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A2D45] rounded-2xl overflow-hidden border border-[#1A2D45]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0A1628] px-8 py-8 flex flex-col items-center gap-1"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-cyan">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2200}
                />
              </div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050C1A] to-transparent" />
    </section>
  )
}
