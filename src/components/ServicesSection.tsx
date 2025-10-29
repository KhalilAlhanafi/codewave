'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  Cloud, 
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Code,
    title: 'Custom Website Development',
    description: 'Tailored web solutions built with modern frameworks and best practices',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Cross-browser Compatible'],
    color: 'from-blue-500 to-cyan-400',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    features: ['Native Performance', 'Offline Support', 'Push Notifications', 'App Store Ready'],
    color: 'from-purple-500 to-pink-400',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    icon: Database,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from frontend to backend and database',
    features: ['API Development', 'Database Design', 'Authentication', 'Real-time Features'],
    color: 'from-green-500 to-teal-400',
    technologies: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight your users',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-orange-500 to-red-400',
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions & Deployment',
    description: 'Scalable cloud infrastructure and automated deployment',
    features: ['Auto-scaling', 'CDN Integration', 'Load Balancing', 'Monitoring'],
    color: 'from-indigo-500 to-blue-400',
    technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes']
  },
  {
    icon: Zap,
    title: 'API Development & Integration',
    description: 'Robust APIs and seamless third-party integrations',
    features: ['RESTful APIs', 'GraphQL', 'Webhooks', 'Documentation'],
    color: 'from-yellow-500 to-orange-400',
    technologies: ['REST', 'GraphQL', 'WebSocket', 'gRPC']
  }
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
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
            className="inline-flex items-center px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 text-sm font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Offer</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-1">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-xs text-cyan-300 rounded-md border border-cyan-400/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full group/btn bg-slate-700/30 hover:bg-slate-700/50 text-cyan-300 hover:text-cyan-200 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-200"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl p-12 border border-blue-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                  <Users className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 font-semibold px-8 py-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  Schedule Consultation
                  <Clock className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}