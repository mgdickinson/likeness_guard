import MailchimpForm from './components/MailchimpForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          {/* Header */}
          <nav className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                LikenessGuard
              </span>
            </div>
            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all duration-200 backdrop-blur-sm">
              Get Early Access
            </button>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Next-Generation AI Protection</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Own Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Likeness
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Scan your face and voice. We proactively protect you from AI fraud, deepfakes, and identity theft in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105">
                Protect Your Identity
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold text-lg border border-white/20 backdrop-blur-sm transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-slate-400 text-sm">Detection Rate</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">&lt;1ms</div>
                  <div className="text-slate-400 text-sm">Response Time</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Advanced Protection Technology
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Military-grade AI detection and prevention to safeguard your digital identity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Face Scan Protection</h3>
            <p className="text-slate-400 leading-relaxed">
              Advanced biometric scanning creates your unique digital fingerprint, preventing unauthorized deepfakes and face swaps.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Voice Authentication</h3>
            <p className="text-slate-400 leading-relaxed">
              Voice pattern analysis detects AI-generated audio and prevents voice cloning attacks before they happen.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Alerts</h3>
            <p className="text-slate-400 leading-relaxed">
              Instant notifications when your likeness is detected online, with automated takedown requests and legal support.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <MailchimpForm />
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-slate-500">
          <p>&copy; 2025 LikenessGuard. Protecting your digital identity.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250% 0, 0 0;
          }
          100% {
            background-position: 250% 0, 0 0;
          }
        }
      `}</style>
    </div>
  );
}
