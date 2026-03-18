import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss 
} from 'react-icons/si'
import { techStack } from '../data/portfolio'

const TechStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const iconMap = {
    html: SiHtml5,
    css: SiCss3,
    js: SiJavascript,
    react: SiReact,
    tailwind: SiTailwindcss,
  }

  return (
    <section id="tech" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-green to-transparent"></div>
          </div>

          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Technologies I use to bring ideas to life
          </p>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const Icon = iconMap[tech.icon]
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-blue/10 to-primary-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <Icon className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-white font-semibold text-center">{tech.name}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400">
              Always learning and exploring new technologies to stay ahead of the curve
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
