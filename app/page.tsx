import MailchimpForm from './components/MailchimpForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/5">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
          {/* Header */}
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">
                LikenessGuard
              </span>
            </div>
            <a href="#waitlist" className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-all duration-200">
              Join Waitlist
            </a>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto pb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Face. Your Voice.<br />Your Identity.
            </h1>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
              We make sure they stay yours.
            </p>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI can now copy your face and voice in seconds — creating deepfakes, impersonations, and content you never agreed to. We give you the easiest way to claim your likeness and get proactive protection before things spiral.
            </p>

            <a href="#waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/50">
              Get Protected Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four simple steps to protect your digital identity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative bg-slate-900/30 border border-white/10 rounded-xl p-6">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <div className="mt-4">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Register Your Likeness</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Upload a quick face scan and voice sample. We generate your official digital identity profile — your proof of ownership in the AI era.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-slate-900/30 border border-white/10 rounded-xl p-6">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="mt-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Get Monitored for Misuse</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We continuously scan public platforms, AI-generated content, and search-indexed media for suspicious use of your face or voice.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-slate-900/30 border border-white/10 rounded-xl p-6">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <div className="mt-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Take Action Instantly</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                One click lets you request removal, file impersonation reports, and activate our enforcement tools. We handle the heavy lifting.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative bg-slate-900/30 border border-white/10 rounded-xl p-6">
            <div className="absolute -top-4 left-6 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              4
            </div>
            <div className="mt-4">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Protect Yourself Proactively</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Join the Likeness Registry — a privacy-first standard that makes it easy for responsible AI companies to exclude your likeness from their systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-y border-white/5">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-slate-400">Continuous Monitoring</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">Privacy-First</div>
            <div className="text-slate-400">Your Data Stays Yours</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">Instant</div>
            <div className="text-slate-400">Alert & Response</div>
          </div>
        </div>
      </div>

      {/* Registry Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 border border-white/10 rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-cyan-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Likeness Registry
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Once your identity is registered, it becomes part of the Likeness Registry — a privacy-first standard used by responsible AI developers to avoid training their models on protected individuals.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              By being included, you make it easy for modern AI companies to automatically exclude your face and voice from future training datasets and generation tools. This gives you a built-in layer of protection as the AI ecosystem evolves — a proactive shield that ensures your likeness is respected, not replicated.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Section */}
      <div id="waitlist" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your likeness shouldn&apos;t be used without your consent
          </h2>
          <p className="text-xl text-slate-400">
            We make it simple to protect it.
          </p>
        </div>
        <MailchimpForm />
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-slate-500">
          <p className="mb-2 font-medium text-slate-400">Protecting your digital identity in the AI age</p>
          <p className="text-sm">&copy; 2025 LikenessGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
