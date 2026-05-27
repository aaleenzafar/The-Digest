import React, { useEffect, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: '1000ms',
      }}
      className="transition-opacity"
    >
      {children}
    </div>
  )
}
