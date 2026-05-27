export function Navbar() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition cursor-pointer bg-none border-none p-0"
        >
          THE DIGEST
        </button>

        {/* Center Links - Hidden on mobile */}
        <div className="hidden md:flex gap-8">
          {[
            { label: 'Tutorials', href: '#use-cases' },
            { label: 'Tools', href: '#tools' },
            { label: 'Issues', href: '#blog' },
            { label: 'Subscribe', href: '#newsletter' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <a
          href="#newsletter"
          className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          Subscribe Free
        </a>
      </div>
    </nav>
  )
}
