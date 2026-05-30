import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'

export function Hero() {
  return (
    <section id="top" className="relative text-white px-4 md:px-12 lg:px-16 pt-24 pb-10 min-h-[100dvh] flex flex-col justify-center lg:justify-end lg:grid lg:grid-cols-2 lg:items-center">
      <div className="w-full">
        {/* Left Column */}
        <div>
          <div style={{ letterSpacing: '-0.04em' }}>
            <AnimatedHeading
              text={`The AI Automation\nDigest.`}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-2 sm:mb-3 md:mb-4 leading-tight"
            />
          </div>

          <FadeIn delay={800}>
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-5 leading-relaxed max-w-xl">
              Every week, one real automation workflow — broken down step by step. No fluff. Just builds.
            </p>
          </FadeIn>

          <FadeIn delay={1200}>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href="#blog"
                className="bg-white text-black px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-gray-100 transition h-fit"
              >
                Read Latest Issue
              </a>
              <a
                href="#tools"
                className="liquid-glass border border-white/20 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-white hover:text-black transition h-fit"
              >
                Browse Tutorials
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Right Column - Bottom Right Glass Tag */}
      <FadeIn delay={1400}>
        <div className="hidden lg:flex justify-end">
          <div className="liquid-glass border border-white/20 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl inline-block">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light">
              Weekly. Free. Practical.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
