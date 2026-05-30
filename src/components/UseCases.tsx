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
    <section id="use-cases" className="px-4 md:px-12 lg:px-16 py-16 md:py-24 relative text-white min-h-screen flex flex-col justify-center">
      <div className="w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal tracking-tight mb-3 md:mb-4">
            Topics We Cover
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg">
            Every issue dives into one of these areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="liquid-glass border border-white/20 rounded-2xl px-5 md:px-6 py-5 md:py-6 hover:border-white/40 transition"
            >
              <div className="text-3xl mb-3">{useCase.emoji}</div>
              <h3 className="text-base md:text-lg font-medium mb-2 text-white">{useCase.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
