import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'

export function Hero() {
  return (
    <section id="top" className="min-h-screen relative text-white px-4 sm:px-6 md:px-12 lg:px-16 flex items-center">
      <div className="w-full flex flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center gap-0">
        {/* Left Column */}
        <div>
          <div style={{ letterSpacing: '-0.04em' }}>
            <AnimatedHeading
              text={`The AI Automation\nDigest.`}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-3 sm:mb-4 leading-tight"
            />
          </div>

          <FadeIn delay={800}>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-5 leading-relaxed">
              Every week, one real automation workflow — broken down step by step. No fluff. Just builds.
            </p>
          </FadeIn>

          <FadeIn delay={1200}>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <a
                href="#blog"
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-100 transition"
              >
                Read Latest Issue
              </a>
              <a
                href="#tools"
                className="liquid-glass border border-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-white hover:text-black transition"
              >
                Browse Tutorials
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column - Bottom Right Glass Tag */}
        <FadeIn delay={1400}>
          <div className="hidden lg:flex justify-end">
            <div className="liquid-glass border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-xl inline-block">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                Weekly. Free. Practical.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
