import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
}

export function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const lines = text.split('\n')
  const totalChars = lines.reduce((sum, line) => sum + line.length, 0)

  const [animatedChars, setAnimatedChars] = useState<boolean[]>(
    Array(totalChars).fill(false)
  )

  useEffect(() => {
    const charDelay = 30
    const timers: ReturnType<typeof setTimeout>[] = []

    let globalIndex = 0
    lines.forEach((line, lineIndex) => {
      line.split('').forEach((_, charIndex) => {
        const stagger =
          lineIndex * line.length * charDelay + charIndex * charDelay + 200
        const idx = globalIndex + charIndex

        const timer = setTimeout(() => {
          setAnimatedChars((prev) => {
            const updated = [...prev]
            updated[idx] = true
            return updated
          })
        }, stagger)

        timers.push(timer)
      })
      globalIndex += line.length
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  let renderIndex = 0

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => {
        const lineStart = renderIndex
        renderIndex += line.length

        return (
          <div key={lineIndex}>
            {line.split('').map((char, charIndex) => (
              <span
                key={`${lineIndex}-${charIndex}`}
                style={{
                  display: 'inline-block',
                  opacity: animatedChars[lineStart + charIndex] ? 1 : 0,
                  transform: animatedChars[lineStart + charIndex]
                    ? 'translateX(0)'
                    : 'translateX(-18px)',
                  transition: 'opacity 500ms ease, transform 500ms ease',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        )
      })}
    </div>
  )
}