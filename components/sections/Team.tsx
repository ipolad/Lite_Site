'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Itzik Polad',
    role: 'Co-CEO',
    bio: 'Data industry veteran and entrepreneur. Brings deep expertise in enterprise data products and go-to-market strategy, focused on making LITE the standard for data retention at scale.',
    linkedin: '#',
    initial: 'IP',
  },
  {
    name: 'Adi Glasman',
    role: 'Co-CEO',
    subtitle: 'VP Engineering · VP Data',
    bio: 'Engineering and data leader with a track record of building high-scale data infrastructure. Architects the technical foundation of LITE to handle enterprise-grade complexity with elegance.',
    linkedin: '#',
    initial: 'AG',
  },
]

export function Team() {
  return (
    <section id="team" className="py-28 px-6 bg-[#060D1F]">
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
              The Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Built by{' '}
            <span className="text-gradient-cyan">data experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-xl mx-auto"
          >
            LITE was founded by practitioners who lived the data retention problem firsthand —
            and decided to solve it properly.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-8 hover:border-[rgba(0,200,255,0.2)] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgba(0,200,255,0.2)] to-[rgba(34,211,160,0.2)] border border-[rgba(0,200,255,0.2)] flex items-center justify-center mb-5">
                <span className="text-lg font-bold text-[#00C8FF]">{member.initial}</span>
              </div>

              <h3 className="text-xl font-bold text-[#F1F5F9] mb-0.5">{member.name}</h3>
              <div className="text-sm font-medium text-[#00C8FF] mb-1">{member.role}</div>
              {member.subtitle && (
                <div className="text-xs text-[#475569] mb-4">{member.subtitle}</div>
              )}

              <p className="text-[#64748B] text-sm leading-relaxed mb-6">{member.bio}</p>

              <a
                href={member.linkedin}
                className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#00C8FF] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
