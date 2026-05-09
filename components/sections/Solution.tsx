'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const inputs = [
  { label: 'Regulations', sub: 'AI Agents & Web Crawlers', icon: '⚖️', color: '#818CF8' },
  { label: 'Internal Policies', sub: 'Company rules & SLAs', icon: '📋', color: '#22D3A0' },
  { label: 'Query History', sub: 'Access & usage patterns', icon: '📊', color: '#00C8FF' },
]

const outputs = [
  { label: 'Keep', icon: '✅', color: '#22D3A0', desc: 'Active, frequently queried data' },
  { label: 'Archive', icon: '🗄️', color: '#00C8FF', desc: 'Move to lower-cost cold storage' },
  { label: 'Migrate', icon: '🔄', color: '#818CF8', desc: 'Cross-region or cross-tier move' },
  { label: 'Delete / Anonymize', icon: '🛡️', color: '#F472B6', desc: 'Enforce right to erasure' },
]

const platformSteps = [
  { id: '01', label: 'Define Policy', color: '#00C8FF' },
  { id: '02', label: 'Classify Data', color: '#818CF8' },
  { id: '03', label: 'Insights', color: '#22D3A0' },
  { id: '04', label: 'Actions', color: '#F472B6' },
]

const connectors = ['API Connectors', 'MCP Agents', 'ODBC']

function Arrow({ color = '#1A2D45' }: { color?: string }) {
  return (
    <div className="flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4v20M14 24l-5-5M14 24l5-5"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solution" className="py-28 px-6 bg-[#060D1F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.06)] rounded-full px-3 py-1 mb-6"
          >
            <span className="text-xs font-medium text-[#00C8FF] tracking-wider uppercase">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            One platform.{' '}
            <span className="text-gradient-cyan">Total control.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto"
          >
            LITE ingests your regulations, policies, and usage patterns — then classifies,
            recommends, and enforces automatically. Every action is logged and auditable.
          </motion.p>
        </div>

        {/* Visual diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-0"
        >
          {/* INPUTS */}
          <div className="w-full grid grid-cols-3 gap-4 mb-2">
            {inputs.map((input, i) => (
              <motion.div
                key={input.label}
                initial={{ opacity: 0, y: -16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="flex flex-col items-center gap-2 bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-5 text-center"
                style={{ borderTopColor: input.color, borderTopWidth: 2 }}
              >
                <span className="text-2xl">{input.icon}</span>
                <span className="text-sm font-semibold text-[#F1F5F9]">{input.label}</span>
                <span className="text-xs text-[#475569]">{input.sub}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrows down to platform */}
          <div className="w-full grid grid-cols-3 gap-4 py-1">
            {inputs.map((inp) => (
              <Arrow key={inp.label} color={inp.color} />
            ))}
          </div>

          {/* PLATFORM CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full bg-[#0A1628] border-2 border-[rgba(0,200,255,0.35)] rounded-3xl p-8 shadow-[0_0_60px_rgba(0,200,255,0.1)] relative"
          >
            {/* Platform label */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-[#00C8FF] text-[#050C1A] text-xs font-bold px-5 py-1.5 rounded-full tracking-wider uppercase shadow-[0_0_20px_rgba(0,200,255,0.4)]">
                LITE Platform
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {platformSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                  className="flex flex-col items-center gap-2 rounded-xl py-5 px-3"
                  style={{ backgroundColor: `${step.color}0D` }}
                >
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                    style={{ color: step.color, backgroundColor: `${step.color}20` }}
                  >
                    {step.id}
                  </span>
                  <span className="text-sm font-semibold text-[#F1F5F9] text-center leading-tight">
                    {step.label}
                  </span>
                  <div className="w-8 h-px" style={{ backgroundColor: step.color }} />
                </motion.div>
              ))}
            </div>

            {/* Connector badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pt-5 border-t border-[#1A2D45]">
              <span className="text-xs text-[#475569] uppercase tracking-widest font-medium">
                Connects via
              </span>
              {connectors.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium text-[#64748B] border border-[#1A2D45] rounded-lg px-3 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Arrows down to outputs */}
          <div className="w-full grid grid-cols-4 gap-4 py-1">
            {outputs.map((out) => (
              <Arrow key={out.label} color={out.color} />
            ))}
          </div>

          {/* OUTPUTS */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {outputs.map((output, i) => (
              <motion.div
                key={output.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
                className="flex flex-col items-center gap-2 bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-5 text-center"
                style={{ borderBottomColor: output.color, borderBottomWidth: 2 }}
              >
                <span className="text-2xl">{output.icon}</span>
                <span
                  className="text-sm font-bold"
                  style={{ color: output.color }}
                >
                  {output.label}
                </span>
                <span className="text-xs text-[#475569] leading-relaxed">{output.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
