import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 lg:px-16 pt-4 md:pt-6">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:opacity-80 transition cursor-pointer bg-none border-none p-0"
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
              onClick={closeMenu}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Subscribe Button */}
        <a
          href="#newsletter"
          onClick={closeMenu}
          className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          Subscribe Free
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 flex items-center justify-center h-10 w-10"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden liquid-glass rounded-xl mt-2 px-6 py-4">
          <div className="space-y-0">
            {[
              { label: 'Tutorials', href: '#use-cases' },
              { label: 'Tools', href: '#tools' },
              { label: 'Issues', href: '#blog' },
              { label: 'Subscribe', href: '#newsletter' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-base text-white border-b border-white/10 hover:text-gray-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#newsletter"
            onClick={closeMenu}
            className="block w-full bg-white text-black py-3 rounded-lg text-center font-medium mt-2 hover:bg-gray-100 transition"
          >
            Subscribe Free
          </a>
        </div>
      )}
    </nav>
  );
}
