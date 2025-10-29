'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Zap, Waves } from 'lucide-react'

export default function PremiumLoader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15 + 5
        const newProgress = Math.min(prev + increment, 100)
        
        if (newProgress === 100) {
          clearInterval(progressInterval)
          setTimeout(() => setLoading(false), 500)
        }
        
        return newProgress
      })
    }, 200)

    const skipTimeout = setTimeout(() => setShowSkip(true), 1000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(skipTimeout)
    }
  }, [isClient])

  const handleSkip = () => {
    setProgress(100)
    setTimeout(() => setLoading(false), 300)
  }

  if (!isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                  y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
              />
            ))}
          </div>

          {/* Main Loader Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 p-6 rounded-2xl">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Company Name with Wave Effect */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Code
              </span>
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Waves className="w-12 h-12 text-cyan-400 inline-block ml-2" />
              </motion.span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Wave
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting Digital Excellence
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 mx-auto mb-4">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Progress Percentage */}
            <motion.div
              className="text-2xl font-bold text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-cyan-400">{Math.floor(progress)}</span>%
            </motion.div>

            {/* Loading States */}
            <motion.div
              className="flex justify-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['Initializing', 'Loading Assets', 'Optimizing', 'Ready'].map((state, index) => (
                <motion.span
                  key={state}
                  className={`text-sm ${
                    progress > index * 25 ? 'text-cyan-400' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: progress > index * 25 ? 1 : 0.3,
                    x: progress > index * 25 ? 0 : -10
                  }}
                  transition={{ delay: 0.1 * index }}
                >
                  {state}
                </motion.span>
              ))}
            </motion.div>

            {/* Skip Button */}
            {showSkip && (
              <motion.button
                onClick={handleSkip}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Skip to Site
              </motion.button>
            )}
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8">
            <motion.div
              className="w-20 h-20 border-t-2 border-l-2 border-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="absolute top-8 right-8">
            <motion.div
              className="w-20 h-20 border-t-2 border-r-2 border-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.div
              className="w-20 h-20 border-b-2 border-l-2 border-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
          <div className="absolute bottom-8 right-8">
            <motion.div
              className="w-20 h-20 border-b-2 border-r-2 border-cyan-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}