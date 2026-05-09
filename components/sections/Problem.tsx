'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fines = [
  { sector: 'Employees Data', year: '2020', amount: '$41M', color: '#F97316' },
  { sector: 'Customers Data', year: '2023', amount: '$44M', color: '#EF4444' },
  { sector: 'Customers Data', year: '2024', amount: '$33M', color: '#EF4444' },
  { sector: 'Drivers Data', year: '2024', amount: '$324M', color: '#DC2626' },
  { sector: 'Users Data', year: '2023', amount: '$1.3B', color: '#991B1B' },
]

function FineCard({
  fine,
  index,
}: {
  fine: (typeof fines)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center justify-between bg-[#0A1628] border border-[#1A2D45] rounded-xl px-6 py-5 hover:border-[rgba(239,68,68,0.3)] transition-all duration-300 group"
      style={{ borderLeftColor: fine.color, borderLeftWidth: '3px' }}
    >
      <div>
        <div className="text-sm font-medium text-[#94A3B8]">{fine.sector}</div>
        <div className="text-xs text-[#475569] mt-0.5">{fine.year}</div>
      </div>
      <div
        className="text-2xl font-bold tracking-tight"
        style={{ color: fine.color }}
      >
        {fine.amount}
      </div>
    </motion.div>
  )
}

export function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problem" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.06)] rounded-full px-3 py-1 mb-6"
            >
              <span className="text-xs font-medium text-[#EF4444] tracking-wider uppercase">
                The Problem
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Regulations are real.{' '}
              <span className="text-[#EF4444]">Fines are painful.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#64748B] text-lg leading-relaxed mb-6"
            >
              Data growth has accelerated exponentially in the AI era, leaving organizations
              struggling to keep pace — incurring rising costs and remaining unaware of
              compliance exposures that result in multi-million dollar fines.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#64748B] text-lg leading-relaxed"
            >
              And{' '}
              <span className="text-[#F1F5F9] font-semibold">
                90% of the world&rsquo;s data was created in the last 2 years.
              </span>{' '}
              The problem is accelerating — and most companies don&rsquo;t know their exposure.
            </motion.p>
          </div>

          {/* Right: Fine cards */}
          <div className="flex flex-col gap-3">
            <div className="text-xs font-medium text-[#475569] uppercase tracking-widest mb-2 pl-1">
              Real regulatory fines — by data category
            </div>
            {fines.map((fine, i) => (
              <FineCard key={`${fine.sector}-${fine.year}`} fine={fine} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
