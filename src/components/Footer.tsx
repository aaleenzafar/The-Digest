export function Footer() {
  return (
    <footer className="bg-black py-10 md:py-12 px-4 md:px-12 lg:px-16 text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 text-center md:text-left">
        <div>
          <div className="text-lg md:text-xl font-semibold">THE DIGEST</div>
          <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-sm md:max-w-xs">
            Real automations. Every week.
          </p>
        </div>

        <div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-3 md:mb-4">
            Navigation
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <a href="#blog" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Issues
            </a>
            <a href="#use-cases" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Tutorials
            </a>
            <a href="#tools" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Tools
            </a>
            <a href="#newsletter" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Subscribe
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-3 md:mb-4">
            Legal
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 border-t border-white/10 pt-6 text-xs md:text-sm text-gray-500">
        <p>© 2026 The AI Automation Digest.</p>
      </div>
    </footer>
  );
}
