export function Footer() {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 lg:px-16 text-white">
      <div className="grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <div className="text-xl font-semibold">THE DIGEST</div>
          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Real automations. Every week.
          </p>
        </div>

        <div>
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Navigation
          </div>
          <div className="flex flex-col gap-3">
            <a href="#blog" className="text-sm text-gray-400 hover:text-white transition">
              Issues
            </a>
            <a href="#use-cases" className="text-sm text-gray-400 hover:text-white transition">
              Tutorials
            </a>
            <a href="#tools" className="text-sm text-gray-400 hover:text-white transition">
              Tools
            </a>
            <a href="#newsletter" className="text-sm text-gray-400 hover:text-white transition">
              Subscribe
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Legal
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
        <p>© 2026 The AI Automation Digest.</p>
      </div>
    </footer>
  )
}
