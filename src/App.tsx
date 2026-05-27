import { VideoBackground } from './components/VideoBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhatIsAI } from './components/WhatIsAI'
import { UseCases } from './components/UseCases'
import { ToolsStack } from './components/ToolsStack'
import { BlogPosts } from './components/BlogPosts'
import { NewsletterCTA } from './components/NewsletterCTA'
import { WhyAutoflow } from './components/WhyAutoflow'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="text-white relative">
      <VideoBackground />
      <Navbar />
      <Hero />
      <WhatIsAI />
      <UseCases />
      <ToolsStack />
      <BlogPosts />
      <NewsletterCTA />
      <WhyAutoflow />
      <Footer />
    </div>
  )
}
