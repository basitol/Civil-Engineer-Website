"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const gradientPoints = [
      { x: canvas.width * 0.1, y: canvas.height * 0.1, radius: 300, color: "rgba(59, 130, 246, 0.15)" }, // Blue
      { x: canvas.width * 0.8, y: canvas.height * 0.3, radius: 250, color: "rgba(99, 102, 241, 0.15)" }, // Indigo
      { x: canvas.width * 0.5, y: canvas.height * 0.8, radius: 350, color: "rgba(79, 70, 229, 0.15)" }, // Violet
    ]

    // Animation variables
    const speeds = gradientPoints.map(() => ({
      x: Math.random() * 0.5 - 0.25,
      y: Math.random() * 0.5 - 0.25,
    }))

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      gradientPoints.forEach((point, i) => {
        point.x += speeds[i].x
        point.y += speeds[i].y

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) speeds[i].x *= -1
        if (point.y <= 0 || point.y >= canvas.height) speeds[i].y *= -1

        // Draw gradient
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)
        gradient.addColorStop(0, point.color)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" aria-hidden="true" />
}
