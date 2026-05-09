'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Zillow Group', abbr: 'Z' },
  { name: 'Zendesk', abbr: 'ZD' },
  { name: 'Groq', abbr: 'GQ' },
]

const quotes = [
  {
    quote:
      'The problem is real and will only scale as data grows. As organizations accumulate more data, the retention challenge becomes unavoidable.',
    role: 'VP Engineering',
    company: 'Zillow Group',
    initial: 'A',
  },
  {
    quote:
      "Great fit for enterprises struggling with data complexity. Use compliance as your anchor to get into organizations — then discover their deeper problems.",
    role: 'Ex SVP Engineering',
    company: 'Zendesk & Groq',
    initial: 'J',
  },
]

export function Validation() {
  return (
    <section className="py-28 px-6 bg-[#060D1F]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.06)] rounded-full px-3 py-1 mb-6"
          >
            <span className="text-xs font-medium text-[#00C8FF] tracking-wider uppercase">
              Industry Validation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Validated by{' '}
            <span className="text-gradient-cyan">industry leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-xl mx-auto"
          >
            We spoke with senior executives from leading technology companies to validate
            the problem, the market, and the approach.
          </motion.p>
        </div>

        {/* Logo row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="bg-[#0A1628] border border-[#1A2D45] rounded-xl px-8 py-4 text-[#94A3B8] font-semibold text-sm tracking-wide"
            >
              {logo.name}
            </div>
          ))}
        </motion.div>

        {/* Quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-8 hover:border-[rgba(0,200,255,0.2)] transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-5xl text-[rgba(0,200,255,0.2)] font-serif leading-none mb-4 select-none">
                &ldquo;
              </div>

              <p className="text-[#94A3B8] leading-relaxed mb-6 text-base italic">
                {quote.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,200,255,0.1)] border border-[rgba(0,200,255,0.2)] flex items-center justify-center text-[#00C8FF] font-bold text-sm">
                  {quote.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F1F5F9]">{quote.role}</div>
                  <div className="text-xs text-[#475569]">{quote.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
