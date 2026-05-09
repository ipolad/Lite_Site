'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Plug into your existing data stack in minutes via API Connectors, MCP Agents, or ODBC. No infrastructure changes required.',
    detail: 'Supports all major databases, warehouses, and cloud storage providers.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Classify',
    description:
      'AI analyzes your query history and automatically classifies every dataset — frequently queried, rarely queried, or never queried but required.',
    detail: 'Pattern analysis runs continuously, adapting as usage evolves.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Recommend',
    description:
      'LITE surfaces policy recommendations aligned to your specific regulations, internal rules, and cost targets. Review and approve in a single dashboard.',
    detail: 'AI-generated recommendations with full audit trail and rationale.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Enforce',
    description:
      'Automatic archiving, cross-region migration, anonymization, and deletion — executed on schedule with zero manual effort.',
    detail: 'Full audit log of every enforcement action. Rollback available on archive.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="howitworks" className="py-28 px-6 bg-[#060D1F]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.06)] rounded-full px-3 py-1 mb-6"
          >
            <span className="text-xs font-medium text-[#00C8FF] tracking-wider uppercase">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            From setup to compliance in{' '}
            <span className="text-gradient-cyan">four steps</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-[#00C8FF30] via-[#1A2D45] to-transparent" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 md:gap-10"
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-[#0A1628] border border-[#1A2D45] flex items-center justify-center text-[#00C8FF] shrink-0">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-6 hover:border-[rgba(0,200,255,0.2)] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-[#00C8FF] bg-[rgba(0,200,255,0.1)] px-2 py-0.5 rounded">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-[#F1F5F9]">{step.title}</h3>
                  </div>
                  <p className="text-[#64748B] leading-relaxed mb-3">{step.description}</p>
                  <p className="text-sm text-[#475569] italic">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
