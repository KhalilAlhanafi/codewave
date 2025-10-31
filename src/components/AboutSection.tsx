'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  Heart,
  Globe,
  Clock,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
  {
    name: 'Khalil Alhanafi',
    role: 'CEO & Lead Developer',
    image: '/api/placeholder/300/300',
    bio: 'Full-stack developer with 10+ years of experience in building scalable web applications.',
    skills: ['React', 'Node.js', 'Cloud Architecture'],
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  
  {
    name: 'Ibrahim Lotfi',
    role: 'Backend Engineer',
    image: '/api/placeholder/300/300',
    bio: 'Specialized in building robust APIs and scalable cloud infrastructure.',
    skills: ['Python', 'PostgreSQL', 'AWS'],
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
]

const stats = [
  { label: 'Projects Completed', value: 150, icon: Award, color: 'from-blue-500 to-cyan-400' },
  { label: 'Happy Clients', value: 100, icon: Users, color: 'from-purple-500 to-pink-400' },
  { label: 'Years Experience', value: 8, icon: Clock, color: 'from-green-500 to-emerald-400' },
  { label: 'Team Members', value: 12, icon: TrendingUp, color: 'from-orange-500 to-red-400' }
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and pour our hearts into every project we undertake.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every line of code and every pixel we design.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We build solutions that make a difference across the globe.'
  }
]

const timeline = [
  {
    year: '2016',
    title: 'CodeWave Founded',
    description: 'Started with a small team and big dreams.'
  },
  {
    year: '2018',
    title: 'First Major Client',
    description: 'Landed our first enterprise project.'
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew to 10+ talented professionals.'
  },
  {
    year: '2022',
    title: 'International Recognition',
    description: 'Received awards for innovative solutions.'
  },
  {
    year: '2024',
    title: 'Full-Service Agency',
    description: 'Complete end-to-end digital solutions.'
  }
]

function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          setHasAnimated(true)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [value, hasAnimated])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function AboutSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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
            className="inline-flex items-center px-4 py-2 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-300 text-sm font-medium">About CodeWave</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Are</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and innovators 
            dedicated to creating exceptional digital experiences that transform businesses.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-orange-400/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-orange-400/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                className="cursor-pointer"
              >
                <Card className={`h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 transition-all duration-300 ${
                  selectedMember === index ? 'border-orange-400/50 ring-2 ring-orange-400/20' : 'hover:border-orange-400/50'
                }`}>
                  <CardContent className="p-6">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <motion.div
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                    <p className="text-orange-400 text-sm mb-3">{member.role}</p>
                    
                    <AnimatePresence>
                      {selectedMember === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                          
                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="secondary"
                                className="bg-slate-700/50 text-orange-300 border-orange-400/20"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Social Links */}
                          <div className="flex justify-center space-x-3">
                            <motion.a
                              href={member.social.linkedin}
                              className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Linkedin className="w-4 h-4 text-gray-300" />
                            </motion.a>
                            <motion.a
                              href={member.social.twitter}
                              className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Twitter className="w-4 h-4 text-gray-300" />
                            </motion.a>
                            <motion.a
                              href={member.social.github}
                              className="p-2 bg-slate-700/50 rounded-full hover:bg-slate-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-4 h-4 text-gray-300" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {selectedMember !== index && (
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{member.bio}</p>
                        <p className="text-orange-300 text-sm">Click to learn more →</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-400" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1/2" />
                  
                  {/* Timeline Dot */}
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                  
                  <div className="w-1/2 px-8">
                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-orange-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-5 h-5 text-orange-400 mr-2" />
                          <span className="text-orange-400 font-semibold">{item.year}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-400/10 rounded-2xl p-12 border border-orange-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our family of happy clients and let's create something amazing together.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-400 hover:from-orange-600 hover:to-red-500 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}