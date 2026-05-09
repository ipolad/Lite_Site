'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const plans = [
  {
    name: 'sun-lite',
    icon: '☀️',
    tagline: 'Cost & Performance',
    tagColor: '#F59E0B',
    price: '$1',
    unit: '/ GB archived',
    description: 'Volume-based pricing. Pay only for what you archive.',
    features: [
      'Hot-warm-cold data tiering',
      'Automated archiving by query frequency',
      'Storage cost analytics dashboard',
      'Backup optimization & management',
      'OLTP & data warehouse support',
      'API, ODBC & MCP connectivity',
    ],
    cta: 'Request Demo',
  },
  {
    name: 'moon-lite',
    icon: '🌙',
    tagline: 'Compliance',
    tagColor: '#818CF8',
    price: '$75K',
    unit: '/ year',
    description: 'Platform + 5 common connectors included. Additional connectors $5K/year.',
    features: [
      'AI regulation scanners & web crawlers',
      'Automated policy creation & enforcement',
      'Data anonymization & secure deletion',
      'Audit-ready compliance reports',
      'GDPR, CCPA, HIPAA & regional laws',
      '5 connectors included + $5K each additional',
    ],
    cta: 'Request Demo',
    featured: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
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
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Simple,{' '}
            <span className="text-gradient-cyan">transparent pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-xl mx-auto"
          >
            Deploy the modules you need. Combine both for complete data lifecycle management.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col bg-[#0A1628] border rounded-2xl p-8 transition-all duration-300"
              style={{
                borderColor: plan.featured ? `${plan.tagColor}50` : '#1A2D45',
                boxShadow: plan.featured ? `0 0 50px ${plan.tagColor}18` : 'none',
              }}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-5 py-1.5 rounded-full"
                  style={{ backgroundColor: plan.tagColor, color: '#050C1A' }}
                >
                  Compliance Leader
                </div>
              )}

              {/* Icon + Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{plan.icon}</span>
                <div>
                  <div className="text-xs font-mono text-[#475569]">{plan.name}</div>
                  <div className="text-sm font-semibold" style={{ color: plan.tagColor }}>
                    {plan.tagline}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-bold text-[#F1F5F9]">{plan.price}</span>
                <span className="text-[#64748B] text-base ml-2">{plan.unit}</span>
              </div>
              <p className="text-sm text-[#475569] mb-8">{plan.description}</p>

              {/* CTA */}
              <Button href="#demo" className="w-full mb-8" size="md">
                {plan.cta} →
              </Button>

              {/* Features */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                      style={{ color: plan.tagColor }}
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-[#475569] mt-10"
        >
          Need a custom enterprise arrangement?{' '}
          <a href="#demo" className="text-[#00C8FF] hover:underline">
            Let&rsquo;s talk →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
