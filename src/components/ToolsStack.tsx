export function ToolsStack() {
  const tools = [
    {
      name: 'n8n',
      desc: 'Open-source workflow automation. Connect any API visually.',
    },
    {
      name: 'Make (Integromat)',
      desc: 'No-code automation builder with 1000+ app integrations.',
    },
    {
      name: 'LangChain',
      desc: 'Framework for building LLM-powered apps and agents.',
    },
    {
      name: 'Zapier',
      desc: 'The classic automation tool. Simple, fast, and widely supported.',
    },
    {
      name: 'OpenAI API',
      desc: 'The backbone of most AI automation — GPT models for text and logic.',
    },
    {
      name: 'Vapi.ai',
      desc: 'AI phone calling platform. Voice agents for sales and support.',
    },
    {
      name: 'Resend',
      desc: 'Modern email API for transactional and automated outreach.',
    },
    {
      name: 'Playwright',
      desc: 'Browser automation for scraping, testing, and web interaction.',
    },
  ]

  return (
    <section id="tools" className="min-h-screen bg-black flex items-center px-6 md:px-12 lg:px-16 py-24 relative text-white">
      <div className="w-full">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight">
            Tools We Actually Use
          </h2>
        </div>
        <p className="text-gray-300 text-lg text-center mb-16">
          Every tutorial is built with real, mostly free tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="liquid-glass border border-white/20 rounded-2xl px-5 py-5"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
