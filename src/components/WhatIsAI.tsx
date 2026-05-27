export function WhatIsAI() {
  return (
    <section id="what-is-ai" className="min-h-screen bg-black flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 relative text-white">
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            ABOUT THE DIGEST
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6 tracking-tight">
            A weekly letter about building with AI.
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-gray-300 text-base leading-relaxed">
              Every Monday, we break down one real-world automation — how it was built, what tools were used, and how you can replicate it in under an hour.
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              No theory. No hype. Just workflows that actually work — using tools like n8n, Vapi, Gemini, Resend, and more.
            </p>
          </div>
          <a href="#blog" className="text-white underline inline-block hover:no-underline">
            See past issues →
          </a>
        </div>

        {/* Right - Stats Grid */}
        <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-0">
          {[
            { num: '1x', label: 'new automation workflow every single week' },
            { num: 'Free', label: 'forever. No paywalls on core content' },
            { num: '10min', label: 'average read time per issue' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="liquid-glass border border-white/20 rounded-2xl px-6 py-5"
            >
              <div className="text-4xl font-semibold text-white mb-1">
                {stat.num}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
