'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Filter,
  Search,
  Calendar,
  Eye,
  Heart,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Modern e-commerce solution with real-time inventory and AI recommendations',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    featured: true,
    stats: { views: 12500, likes: 342, comments: 28 },
    date: '2024-01',
    client: 'TechStore Inc.',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Comprehensive fitness app with workout plans and progress tracking',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Redux', 'Charts.js'],
    featured: true,
    stats: { views: 8900, likes: 256, comments: 19 },
    date: '2024-02',
    client: 'FitLife Studios',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Analytics dashboard for business intelligence and reporting',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    featured: false,
    stats: { views: 6700, likes: 189, comments: 15 },
    date: '2023-12',
    client: 'DataCorp',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'mobile',
    description: 'Connect and share with friends in a modern social platform',
    image: '/api/placeholder/600/400',
    technologies: ['Flutter', 'Dart', 'WebSocket', 'AWS'],
    featured: false,
    stats: { views: 15400, likes: 567, comments: 89 },
    date: '2023-11',
    client: 'SocialConnect',
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    category: 'web',
    description: 'Property listing platform with virtual tours and mortgage calculator',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Mapbox'],
    featured: true,
    stats: { views: 9800, likes: 298, comments: 34 },
    date: '2023-10',
    client: 'HomeHub Realty',
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'mobile',
    description: 'Order food from your favorite restaurants with real-time tracking',
    image: '/api/placeholder/600/400',
    technologies: ['Swift', 'Kotlin', 'Google Maps', 'Node.js'],
    featured: false,
    stats: { views: 11200, likes: 412, comments: 56 },
    date: '2023-09',
    client: 'QuickEats',
    link: '#',
    github: '#'
  }
]

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'featured', name: 'Featured', count: projects.filter(p => p.featured).length }
]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        filtered = filtered.filter(p => p.featured)
      } else {
        filtered = filtered.filter(p => p.category === selectedCategory)
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredProjects(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Eye className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Our Portfolio</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Projects</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses 
            achieve their digital goals with innovative solutions.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 border border-slate-600/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-slate-600/50 text-gray-300">
                    {category.count}
                  </Badge>
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-slate-700/70 transition-all duration-200"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="group h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-400/20" />
                    <motion.div
                      className="absolute inset-0 bg-slate-700/50 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">Project Preview</p>
                      </div>
                    </motion.div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-xs font-semibold text-white">Featured</span>
                      </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          className="absolute inset-0 bg-black/60 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="flex space-x-3">
                            <motion.a
                              href={project.link}
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </motion.a>
                            <motion.a
                              href={project.github}
                              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-5 h-5 text-white" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </span>
                        <span>{project.client}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-700/50 text-purple-300 border-purple-400/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-gray-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-600/50">
                      <div className="flex space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {project.stats.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {project.stats.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {project.stats.comments}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </div>
            <Button
              variant="outline"
              className="mt-4 border-purple-400/50 text-purple-300 hover:bg-purple-400/10"
              onClick={() => {
                setSelectedCategory('all')
                setSearchTerm('')
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && filteredProjects.length < projects.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-400/10 hover:border-purple-400"
            >
              Load More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}