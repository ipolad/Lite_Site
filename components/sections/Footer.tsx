'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Request Demo', href: '#demo' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#1A2D45] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Image src="/logo.png" alt="LITE Platform" width={56} height={34} className="object-contain" />
            <span className="text-xs text-[#475569]">Making data retention seamless.</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#475569] hover:text-[#94A3B8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-xs text-[#334155] text-center md:text-right">
            <div>© 2026 Lite Technologies Ltd.</div>
            <div className="mt-0.5">All rights reserved.</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
