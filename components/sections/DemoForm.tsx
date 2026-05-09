'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

type FormData = {
  name: string
  email: string
  company: string
  role: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function DemoForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', role: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', role: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[#060D1F] border border-[#1A2D45] text-[#F1F5F9] rounded-xl px-4 py-3 text-sm placeholder:text-[#334155] focus:outline-none focus:border-[rgba(0,200,255,0.5)] focus:ring-1 focus:ring-[rgba(0,200,255,0.2)] transition-all duration-200'

  return (
    <section
      id="demo"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,200,255,0.05),transparent)]" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[rgba(0,200,255,0.3)] bg-[rgba(0,200,255,0.06)] rounded-full px-3 py-1 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3A0] animate-pulse" />
            <span className="text-xs font-medium text-[#00C8FF] tracking-wider uppercase">
              Talk to Our Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            See LITE{' '}
            <span className="text-gradient-cyan">in action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#64748B] text-lg"
          >
            Request a 30-minute conversation with our team. We&rsquo;ll walk you through
            how LITE can work for your environment — no pressure, no commitment.
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#0A1628] border border-[#1A2D45] rounded-2xl p-8 md:p-10"
        >
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">Request received!</h3>
              <p className="text-[#64748B]">
                We&rsquo;ll be in touch within 24 hours to schedule your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">
                    Work Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">
                    Company *
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#64748B] mb-2">
                    Your Role *
                  </label>
                  <select
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="CISO">CISO</option>
                    <option value="CIO">CIO</option>
                    <option value="CDO">CDO / Chief Data Officer</option>
                    <option value="VP Data">VP Data</option>
                    <option value="VP Engineering">VP Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm text-[#EF4444] text-center">
                  Something went wrong. Please email us directly at{' '}
                  <a href="mailto:hello@liteplatform.io" className="underline">
                    hello@liteplatform.io
                  </a>
                </p>
              )}

              <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full mt-2">
                {status === 'loading' ? 'Sending…' : 'Request My Demo →'}
              </Button>

              <p className="text-center text-xs text-[#334155]">
                No spam. No sales calls without consent. We respect your time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
