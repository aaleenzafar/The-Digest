export function NewsletterCTA() {
  return (
    <section id="newsletter" className="bg-black px-4 md:px-12 lg:px-16 py-16 md:py-24 relative text-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4 md:mb-6">
          Get the next issue in your inbox.
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 md:mb-10">
          Every Monday. Free forever. Unsubscribe anytime.
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 md:px-5 py-2.5 md:py-3 rounded-lg text-sm outline-none focus:border-white/50 transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            Subscribe Free
          </button>
        </form>
      </div>
    </section>
  );
}
