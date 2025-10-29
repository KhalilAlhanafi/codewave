'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Code, 
  Database, 
  Palette, 
  Cloud, 
  Cpu, 
  Globe,
  Zap,
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const technologies = {
  frontend: [
    { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
    { name: 'Next.js', level: 90, color: 'from-gray-900 to-white', icon: '▲' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400', icon: 'TS' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-teal-600', icon: '🎨' },
    { name: 'Vue.js', level: 85, color: 'from-green-500 to-emerald-600', icon: 'V' },
    { name: 'Angular', level: 80, color: 'from-red-600 to-red-400', icon: '🅰️' }
  ],
  backend: [
    { name: 'Node.js', level: 90, color: 'from-green-600 to-green-400', icon: '🟢' },
    { name: 'Python', level: 88, color: 'from-blue-500 to-yellow-500', icon: '🐍' },
    { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-blue-500', icon: '🐘' },
    { name: 'MongoDB', level: 87, color: 'from-green-600 to-green-400', icon: '🍃' },
    { name: 'GraphQL', level: 82, color: 'from-pink-500 to-purple-600', icon: '◈' },
    { name: 'Docker', level: 83, color: 'from-blue-500 to-cyan-400', icon: '🐳' }
  ],
  mobile: [
    { name: 'React Native', level: 86, color: 'from-cyan-400 to-blue-600', icon: '📱' },
    { name: 'Flutter', level: 84, color: 'from-blue-400 to-cyan-600', icon: '🦋' },
    { name: 'Swift', level: 82, color: 'from-orange-500 to-red-500', icon: '🍎' },
    { name: 'Kotlin', level: 80, color: 'from-purple-600 to-purple-400', icon: '🟣' },
    { name: 'Expo', level: 85, color: 'from-black to-white', icon: '📲' },
    { name: 'Firebase', level: 88, color: 'from-yellow-400 to-orange-500', icon: '🔥' }
  ],
  devops: [
    { name: 'AWS', level: 87, color: 'from-orange-400 to-yellow-500', icon: '☁️' },
    { name: 'Vercel', level: 92, color: 'from-black to-white', icon: '▲' },
    { name: 'GitHub Actions', level: 85, color: 'from-gray-800 to-black', icon: '🔄' },
    { name: 'Kubernetes', level: 78, color: 'from-blue-600 to-blue-400', icon: '☸️' },
    { name: 'Nginx', level: 83, color: 'from-green-600 to-green-400', icon: '🌐' },
    { name: 'Redis', level: 84, color: 'from-red-600 to-red-400', icon: '🔴' }
  ]
}

const categories = [
  { id: 'frontend', name: 'Frontend', icon: Code, color: 'from-cyan-400 to-blue-500' },
  { id: 'backend', name: 'Backend', icon: Database, color: 'from-green-500 to-emerald-600' },
  { id: 'mobile', name: 'Mobile', icon: Globe, color: 'from-purple-500 to-pink-500' },
  { id: 'devops', name: 'DevOps', icon: Cloud, color: 'from-orange-500 to-red-500' }
]

export default function TechnologySection() {
  const [selectedCategory, setSelectedCategory] = useState('frontend')
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({})
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const currentTechs = technologies[selectedCategory as keyof typeof technologies]
    const newLevels: Record<string, number> = {}
    
    currentTechs.forEach((tech) => {
      setTimeout(() => {
        setAnimatedLevels(prev => ({ ...prev, [tech.name]: tech.level }))
      }, 100)
    })
  }, [selectedCategory])

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-300 text-sm font-medium">Technology Stack</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and tools we use to build powerful, 
            scalable, and innovative digital solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 border border-slate-600/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {technologies[selectedCategory as keyof typeof technologies].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-green-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-2xl font-bold text-white`}>
                          {tech.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                          <p className="text-sm text-gray-400">Expert Level</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-400">
                          {animatedLevels[tech.name] || 0}%
                        </span>
                      </div>
                    </div>
                    
                    <Progress 
                      value={animatedLevels[tech.name] || 0} 
                      className="h-3 bg-slate-700/50"
                      style={{
                        background: `linear-gradient(to right, ${tech.color.split(' ').join(', ')})`
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats and Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Expertise Stats */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                  Expertise Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'Projects Completed', value: '150+', icon: CheckCircle },
                  { label: 'Years of Experience', value: '8+', icon: Award },
                  { label: 'Happy Clients', value: '100+', icon: TrendingUp },
                  { label: 'Technologies Mastered', value: '25+', icon: Cpu }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{stat.label}</span>
                    </div>
                    <span className="text-xl font-bold text-green-400">{stat.value}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                  Why Our Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Cutting-edge technologies for optimal performance',
                  'Scalable solutions that grow with your business',
                  'Industry best practices and standards',
                  'Regular updates and security patches',
                  'Excellent community support and documentation'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Technology Cloud */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-600/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Technology Ecosystem
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(technologies).flat().map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="cursor-pointer"
              >
                <Badge
                  variant="secondary"
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white border-0 font-semibold`}
                >
                  {tech.icon} {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}