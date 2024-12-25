'use client'

import { useEffect, useRef } from 'react'

interface Line {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  color: string
}


export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const lines: Line[] = []
    const lineCount = 15

    const createLine = (): Line => ({
      x: Math.random() < 0.5 ? 0 : canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI / 4 - Math.PI / 8,
      color: `rgba(255, 92, 40, ${Math.random() * 0.15 + 0.05})`
    })


    for (let i = 0; i < lineCount; i++) {
      lines.push(createLine())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach(line => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        const endX = line.x + Math.cos(line.angle) * line.length
        const endY = line.y + Math.sin(line.angle) * line.length
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = line.color
        ctx.lineWidth = 1
        ctx.stroke()

        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        if (line.x < -line.length || line.x > canvas.width + line.length ||
            line.y < -line.length || line.y > canvas.height + line.length) {
          Object.assign(line, createLine())
        }
      })


      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}

