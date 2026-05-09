'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '🛡️',
    title: 'Peace of Mind',
    subtitle: 'Fine risk reduction',
    description:
      'Eliminate compliance exposure before it becomes a fine. LITE keeps you audit-ready at all times, so you sleep better knowing your data is managed.',
    color: '#818CF8',
  },
  {
    icon: '🤝',
    title: 'Sales Enablement',
    subtitle: 'Never lose a deal to compliance',
    description:
      "Stop losing enterprise deals because you can't prove compliance. LITE ensures your certifications are always current, turning data governance into a competitive advantage.",
    color: '#22D3A0',
  },
  {
    icon: '⚡',
    title: 'Performance',
    subtitle: 'Faster queries, leaner databases',
    description:
      'When only relevant data lives in your hot tier, every query runs faster. LITE reduces database bloat and improves response times across your entire stack.',
    color: '#F59E0B',
  },
  {
    icon: '💰',
    title: 'Cost Reduction',
    subtitle: 'Save on storage infrastructure',
    description:
      'Archive rarely-accessed data to low-cost cold storage automatically. Significant reduction in cloud storage spend without changing how your applications work.',
    color: '#00C8FF',
  },
]

export function ValueProps() {
  return (
    <section className="py-28 px-6">
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
              Why LITE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Built for{' '}
            <span className="text-gradient-cyan">data leaders</span>
          </motion.h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-8 hover:border-[rgba(0,200,255,0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  {value.icon}
                </div>
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: value.color }}>
                    {value.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{value.title}</h3>
                  <p className="text-[#64748B] leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
