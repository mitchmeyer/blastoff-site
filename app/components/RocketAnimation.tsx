'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  speed: number
  life: number
  maxLife: number
  color: string
}

interface Rocket {
  x: number
  y: number
  speed: number
}

const INITIAL_ROCKET_COUNT = 5;
const MAX_ROCKET_COUNT = 20;
const SECTION_HEIGHT = 600 // Increased height to cover more of the hero section

export default function RocketAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rocketImageRef = useRef<HTMLImageElement | null>(null)
  const [currentRocketCount, setCurrentRocketCount] = useState(INITIAL_ROCKET_COUNT);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = SECTION_HEIGHT
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Load rocket image
    const rocketImage = new Image()
    rocketImage.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3354-removebg-preview-KiqtytOw19iMBKYehIWdcSKZFQ5FqU.png"
    rocketImage.crossOrigin = "anonymous"
    rocketImageRef.current = rocketImage

    const particles: Particle[] = []
    const rocketSize = { width: 30, height: 30 }

    const createRocket = (index: number): Rocket => ({
      x: (index / currentRocketCount) * canvas.width + (Math.random() * canvas.width / currentRocketCount),
      y: canvas.height + Math.random() * 100, // Add some vertical variation
      speed: Math.random() * 1 + 0.5
    })

    let rockets: Rocket[] = Array(currentRocketCount).fill(0).map((_, index) => createRocket(index))

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      speed: Math.random() * 0.5 + 0.2,
      life: 0.6,
      maxLife: Math.random() * 0.3 + 0.2,
      color: ['#FF5C28', '#FFB728', '#ffffff'][Math.floor(Math.random() * 3)]
    })

    const increaseRocketCount = () => {
      setCurrentRocketCount(prevCount => Math.min(prevCount + 1, MAX_ROCKET_COUNT));
    };

    const rocketIncreaseInterval = setInterval(increaseRocketCount, 2000); // Increase every 2 seconds

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      while (rockets.length < currentRocketCount) {
        rockets.push(createRocket(rockets.length));
      }

      rockets.forEach(rocket => {
        // Move rocket upwards
        rocket.y -= rocket.speed

        // Reset rocket if it goes off-screen
        if (rocket.y + rocketSize.height < 0) {
          Object.assign(rocket, createRocket(rockets.indexOf(rocket)))
        }

        // Create particle trail
        if (Math.random() > 0.5) {
          particles.push(createParticle(
            rocket.x,
            rocket.y + rocketSize.height / 2
          ))
        }

        // Draw rocket
        if (rocketImageRef.current) {
          ctx.save()
          ctx.globalAlpha = 0.15
          ctx.translate(rocket.x, rocket.y)
          // Remove the rotation to keep the rocket facing upwards
          ctx.drawImage(
            rocketImageRef.current,
            -rocketSize.width / 2,
            -rocketSize.height / 2,
            rocketSize.width,
            rocketSize.height
          )
          ctx.restore()
        }
      })

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life -= 0.02
        particle.y += particle.speed

        if (particle.life <= 0) {
          particles.splice(index, 1)
        } else {
          ctx.beginPath()
          ctx.strokeStyle = particle.color
          ctx.globalAlpha = particle.life * 0.5
          ctx.lineWidth = 1
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particle.x, particle.y - 6) // Keep drawing upwards
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      })

      requestAnimationFrame(animate)
    }

    rocketImage.onload = () => {
      animate()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(rocketIncreaseInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{ height: `${SECTION_HEIGHT}px` }}
    />
  )
}

