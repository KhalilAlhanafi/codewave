'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PremiumLoader from '@/components/PremiumLoader'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TechnologySection from '@/components/TechnologySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import { useTheme } from 'next-themes'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Set initial theme
    setTheme('dark')
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [setTheme])

  if (loading) {
    return <PremiumLoader />
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TechnologySection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/codewave-logo.png" 
                  alt="CodeWave Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-white">
                  Code<span className="text-cyan-400">Wave</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Crafting digital excellence with innovative solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#technologies" className="hover:text-cyan-400 transition-colors">Technologies</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:codewave@gmail.com.com" className="hover:text-cyan-400 transition-colors">codeyourdreamswithwave@gmail.com</a></li>
                <li><a href="tel:+963932534193" className="hover:text-cyan-400 transition-colors">+(963) 932534193</a></li>
                <li><span className="hover:text-cyan-400 transition-colors">Damascus, Syria</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CodeWave. All rights reserved. Built with passion and cutting-edge technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}