'use client';

import MailchimpForm from './components/MailchimpForm';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-50px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0c09] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-final.png"
                alt="LikenessGuard"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <div>
                <div className="text-2xl font-bold text-white tracking-tight leading-none">
                  LikenessGuard
                </div>
                <div className="text-xs text-[#ceff66] font-medium">
                  AI Identity Protection
                </div>
              </div>
            </div>
            <a
              href="#waitlist"
              className="px-6 py-3 bg-[#ceff66] hover:bg-[#b8e856] text-[#0f0c09] rounded-lg font-bold text-sm transition-colors duration-200"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <div className="w-2 h-2 bg-[#ceff66] rounded-full animate-pulse" />
              <span className="text-[#e7e7e7] text-sm font-medium">AI Identity Protection</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              Your Face. Your Voice.<br />
              <span className="text-[#ceff66]">Your Identity.</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-[#e7e7e7] mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              We make sure they stay yours.
            </motion.p>

            <motion.p
              className="text-lg text-[#a8a8a8] mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              AI can now copy your face and voice in seconds — creating deepfakes, impersonations, and content you never agreed to. We give you the easiest way to claim your likeness and get proactive protection.
            </motion.p>

            <motion.a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#ceff66] hover:bg-[#b8e856] text-[#0f0c09] rounded-lg font-bold text-lg transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              Get Protected Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem} transition={{ delay: 0.1 }}>
              <div className="text-4xl font-bold text-[#ceff66] mb-2">24/7</div>
              <div className="text-[#e7e7e7] text-sm font-medium mb-1">Active Monitoring</div>
              <div className="text-[#a8a8a8] text-xs">Continuous protection while you sleep</div>
            </motion.div>
            <motion.div variants={staggerItem} transition={{ delay: 0.2 }}>
              <div className="text-4xl font-bold text-[#ceff66] mb-2">Zero Sharing</div>
              <div className="text-[#e7e7e7] text-sm font-medium mb-1">Your identity is never sold</div>
              <div className="text-[#a8a8a8] text-xs">Complete ownership of your data</div>
            </motion.div>
            <motion.div variants={staggerItem} transition={{ delay: 0.3 }}>
              <div className="text-4xl font-bold text-[#ceff66] mb-2">Real-Time Alerts</div>
              <div className="text-[#e7e7e7] text-sm font-medium mb-1">Immediate notifications</div>
              <div className="text-[#a8a8a8] text-xs">Act fast on suspicious activity</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-[#a8a8a8] max-w-2xl mx-auto">
              Simple, powerful protection in four steps
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Step 1 */}
            <motion.div
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#ceff66]/30 transition-all duration-300"
              variants={staggerItem}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ceff66]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#ceff66]">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Register Your Likeness</h3>
                  <p className="text-[#a8a8a8] leading-relaxed">
                    Upload a quick face scan and voice sample. We generate your official digital identity profile — your proof of ownership in the AI era.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#ceff66]/30 transition-all duration-300"
              variants={staggerItem}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ceff66]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#ceff66]">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Continuous Monitoring</h3>
                  <p className="text-[#a8a8a8] leading-relaxed">
                    We scan public platforms, AI-generated content, and indexed media 24/7 for suspicious use of your face or voice. You're the first to know.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#ceff66]/30 transition-all duration-300"
              variants={staggerItem}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ceff66]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#ceff66]">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Take Action Instantly</h3>
                  <p className="text-[#a8a8a8] leading-relaxed">
                    One click to request removal, file reports, and activate enforcement tools. We handle the heavy lifting so you stay protected with minimal effort.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#ceff66]/30 transition-all duration-300"
              variants={staggerItem}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ceff66]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#ceff66]">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Proactive Protection</h3>
                  <p className="text-[#a8a8a8] leading-relaxed">
                    Join the Likeness Registry — a privacy-first standard that makes it easy for responsible AI companies to exclude your likeness from their systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Registry Feature Section */}
      <section className="py-20 sm:py-28 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <motion.div
                className="inline-flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                <Image
                  src="/registry-icon-v2.png"
                  alt="Likeness Registry"
                  width={96}
                  height={96}
                  className="w-24 h-24"
                />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                The Likeness Registry
              </h2>
              <p className="text-xl text-[#e7e7e7] mb-6 leading-relaxed">
                Once registered, your identity becomes part of the Likeness Registry — a privacy-first standard used by responsible AI developers to avoid training on protected individuals.
              </p>
              <p className="text-lg text-[#a8a8a8] leading-relaxed">
                Modern AI companies can automatically exclude your face and voice from future training datasets and generation tools. This gives you built-in protection as the AI ecosystem evolves — a proactive shield that ensures your likeness is respected, not replicated.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Use Cases */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Who Needs LikenessGuard?
            </h2>
            <p className="text-xl text-[#a8a8a8]">
              Anyone with a digital presence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="text-center" variants={staggerItem} transition={{ delay: 0.1 }}>
              <div className="w-16 h-16 bg-[#ceff66]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ceff66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Creators & Influencers</h3>
              <p className="text-[#a8a8a8]">Protect your personal brand from unauthorized deepfakes</p>
            </motion.div>

            <motion.div className="text-center" variants={staggerItem} transition={{ delay: 0.2 }}>
              <div className="w-16 h-16 bg-[#ceff66]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ceff66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professionals</h3>
              <p className="text-[#a8a8a8]">Safeguard your reputation and prevent impersonation</p>
            </motion.div>

            <motion.div className="text-center" variants={staggerItem} transition={{ delay: 0.3 }}>
              <div className="w-16 h-16 bg-[#ceff66]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ceff66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Parents & Families</h3>
              <p className="text-[#a8a8a8]">Keep your children safe from AI-generated abuse</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Your likeness shouldn&apos;t be used<br />without your consent
            </h2>
            <p className="text-xl text-[#e7e7e7]">
              We make it simple to protect it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <MailchimpForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[#a8a8a8] mb-2">Protecting your digital identity in the AI age</p>
            <p className="text-[#666] text-sm">&copy; 2025 LikenessGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
