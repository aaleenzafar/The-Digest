export function NewsletterCTA() {
  return (
    <section id="newsletter" className="min-h-screen bg-black flex items-center justify-center px-6 py-24 relative text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-6">
          Get the next issue in your inbox.
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Every Monday. Free forever. Unsubscribe anytime.
        </p>

        <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-3 rounded-lg text-sm outline-none focus:border-white/50 transition"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Subscribe Free
          </button>
        </form>
      </div>
    </section>
  )
}
