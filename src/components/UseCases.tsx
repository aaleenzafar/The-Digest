export function UseCases() {
  const useCases = [
    {
      emoji: '📧',
      title: 'Email Automation',
      desc: 'Cold outreach, follow-ups, and inbox management — all on autopilot.',
    },
    {
      emoji: '📞',
      title: 'AI Voice Agents',
      desc: 'How to build bots that call leads, handle objections, and book meetings.',
    },
    {
      emoji: '🔗',
      title: 'Workflow Builders',
      desc: 'n8n, Make, Zapier — when to use which and how to chain them together.',
    },
    {
      emoji: '🤖',
      title: 'LLM Integration',
      desc: 'Plugging Gemini, GPT, and Claude into real apps without breaking the bank.',
    },
    {
      emoji: '🕷️',
      title: 'Lead Scraping',
      desc: 'Playwright, Outscraper, Apollo — finding and enriching leads automatically.',
    },
    {
      emoji: '📊',
      title: 'CRM Automation',
      desc: 'Auto-updating pipelines, lead scoring, and deal tracking without manual input.',
    },
  ]

  return (
    <section id="use-cases" className="min-h-screen px-6 md:px-12 lg:px-16 py-24 relative text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-4">
          Topics We Cover
        </h2>
        <p className="text-gray-300 text-lg">
          Every issue dives into one of these areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, idx) => (
          <div
            key={idx}
            className="liquid-glass border border-white/20 rounded-2xl px-6 py-6 hover:border-white/40 transition"
          >
            <div className="text-3xl mb-3">{useCase.emoji}</div>
            <h3 className="text-lg font-medium mb-2 text-white">{useCase.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
