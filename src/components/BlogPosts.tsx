export function BlogPosts() {
  const posts = [
    {
      tag: 'Issue #003',
      tagColor: 'bg-blue-500',
      title: 'Build an AI Cold Caller with Vapi in 45 Minutes',
      excerpt:
        'We wired up Vapi, a Gemini script, and a Google Sheet to create a bot that calls 100 leads per day — completely hands-free.',
      date: 'May 2026',
      readTime: '5 min read',
    },
    {
      tag: 'Issue #002',
      tagColor: 'bg-purple-500',
      title: 'How We Scraped 500 Leads for Free Using Playwright',
      excerpt:
        'No paid APIs. Just a Node.js script, Playwright, and LinkedIn — pulling enriched lead data into a spreadsheet automatically.',
      date: 'May 2026',
      readTime: '5 min read',
    },
    {
      tag: 'Issue #001',
      tagColor: 'bg-emerald-500',
      title: 'Automating Cold Email End-to-End with Resend + Gemini',
      excerpt:
        'Our very first issue. A full walkthrough of building a personalized cold email system from scratch using free-tier tools only.',
      date: 'Apr 2026',
      readTime: '5 min read',
    },
  ]

  return (
    <section id="blog" className="min-h-screen px-6 md:px-12 lg:px-16 py-24 relative text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-4">
          Latest Issues
        </h2>
        <p className="text-gray-300 text-lg">
          Recent workflows, tutorials, and breakdowns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="liquid-glass border border-white/20 rounded-2xl overflow-hidden"
          >
            <div className={`h-1 ${post.tagColor}`}></div>
            <div className="px-6 py-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                {post.tag}
              </p>
              <h3 className="text-xl font-medium text-white mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a
                href="#"
                className="text-white text-sm hover:underline inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
