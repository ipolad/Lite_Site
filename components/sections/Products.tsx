'use client'

import { motion } from 'framer-motion'

const products = [
  {
    name: 'moon-lite',
    icon: '🌙',
    tag: 'Compliance',
    tagColor: '#818CF8',
    headline: 'Eliminate compliance exposure',
    description:
      'Scans regulations via AI agents, maps your data, highlights gaps, and enforces retention policies automatically. Stay audit-ready without lifting a finger.',
    features: [
      'AI regulation crawlers & web agents',
      'Automated policy enforcement',
      'Data anonymization & deletion',
      'Audit-ready reporting',
      'GDPR, CCPA, HIPAA & more',
    ],
    glow: '#818CF820',
    border: '#818CF840',
    featured: true,
  },
  {
    name: 'sun-lite',
    icon: '☀️',
    tag: 'Cost & Performance',
    tagColor: '#F59E0B',
    headline: 'Cut costs. Boost speed.',
    description:
      'Classifies hot, warm, and cold data — archiving rarely-used data to lower-cost storage and managing backups efficiently, so your active database stays lean and fast.',
    features: [
      'Hot-warm-cold data tiering',
      'Automated archiving by query frequency',
      'Storage cost analytics dashboard',
      'Backup optimization',
      'OLTP & DWH support',
    ],
    glow: '#F59E0B20',
    border: '#F59E0B40',
  },
  {
    name: 'star-lite',
    icon: '⭐',
    tag: 'Infrastructure',
    tagColor: '#22D3A0',
    headline: 'Intelligent data routing',
    description:
      'A transparent gateway that routes queries to the right storage tier and consolidates retrieval — your applications see one unified data layer regardless of where data lives.',
    features: [
      'Transparent query routing',
      'Multi-storage consolidation',
      'API, ODBC & MCP connectivity',
      'Zero application code changes',
      'Real-time retrieval optimization',
    ],
    glow: '#22D3A020',
    border: '#22D3A040',
  },
]

export function Products() {
  return (
    <section id="products" className="py-28 px-6">
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
              Three Modules
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            One platform.{' '}
            <span className="text-gradient-cyan">Every use case.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-xl mx-auto"
          >
            Deploy the modules you need. Use them together for complete data lifecycle management.
          </motion.p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col bg-[#0A1628] border rounded-2xl p-7 transition-all duration-300 cursor-default"
              style={{
                borderColor: product.featured ? product.border : '#1A2D45',
                boxShadow: product.featured ? `0 0 40px ${product.glow}` : 'none',
              }}
            >
              {product.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                  style={{ backgroundColor: product.tagColor, color: '#050C1A' }}
                >
                  Most Popular
                </div>
              )}

              {/* Icon + Tag */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{product.icon}</span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    color: product.tagColor,
                    backgroundColor: `${product.tagColor}15`,
                  }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Name */}
              <div className="text-xs font-mono text-[#475569] mb-1 tracking-widest">
                {product.name}
              </div>

              {/* Headline */}
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{product.headline}</h3>

              {/* Description */}
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mt-auto">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                      style={{ color: product.tagColor }}
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
      </div>
    </section>
  )
}
