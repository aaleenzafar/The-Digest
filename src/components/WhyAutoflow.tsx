export function WhyAutoflow() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      desc: 'Get your first automation running in minutes, not weeks. No complex configurations or technical debt.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      desc: 'Bank-grade encryption, SOC 2 compliant, and role-based access control for peace of mind.',
    },
    {
      icon: '📈',
      title: 'Measurable ROI',
      desc: 'Cut operational costs by up to 60% and reclaim 15+ hours per team member every week.',
    },
    {
      icon: '🤖',
      title: 'AI-Native',
      desc: 'Built for modern AI agents. Easy LLM integration, prompt management, and real-time monitoring.',
    },
    {
      icon: '🛠️',
      title: 'No-Code Builder',
      desc: 'Drag-and-drop workflows with full API access. Technical and non-technical teams work together.',
    },
    {
      icon: '🌍',
      title: '24/7 Support',
      desc: 'Expert support team, comprehensive docs, and active community ready to help you succeed.',
    },
  ]

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-16 py-24 relative text-white">
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Why Choose Autoflow
          </p>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-4">
            Built for teams that want to win.
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We've engineered every detail to give you maximum speed, security, and control. Your automation deserves better than templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="liquid-glass border border-white/20 rounded-2xl px-6 py-8 hover:border-white/40 transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-medium mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to transform your workflows?
          </p>
          <a
            href="#newsletter"
            className="inline-block bg-white text-black px-10 py-4 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
