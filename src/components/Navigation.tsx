'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, Zap, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'about', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#home')}
            >
              <div className="transition-colors">
              <img 
                src="/codewave-logo.png" 
                alt="CodeWave Logo" 
                className={`w-22 h-22 object-contain transition-colors ${
                  scrolled ? '' : ''
                }`}
              />
              </div>
              <span className={`text-xl font-bold ${
                scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Code<span className="text-cyan-400">Wave</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? scrolled 
                        ? 'text-blue-600 dark:text-cyan-400' 
                        : 'text-cyan-300'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400'
                        : 'text-white/90 hover:text-cyan-300'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-400"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
                  <div className="flex items-center">
                    <img 
                      src="/codewave-logo.png" 
                      alt="CodeWave Logo" 
                      className="w-25 h-25 object-contain"
                    />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Code<span className="text-cyan-400">Wave</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(item.href)
                        }}
                        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeSection === item.href.slice(1)
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-cyan-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                        }`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ x: 0 }}
                      >
                        <span className="font-medium">{item.name}</span>
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full"
                            layoutId="activeMobileSection"
                          />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-slate-700">
                  <Button 
                    className="w-full bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Get Started
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <a href="tel:+1234567890" className="flex items-center hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a href="mailto:hello@codewave.com" className="flex items-center hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}