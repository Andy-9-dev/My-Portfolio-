import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolio'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6 relative">
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-blue to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">What I Do</h3>
                <ul className="space-y-3">
                  {[
                    'Build responsive, mobile-first web applications',
                    'Create smooth animations and micro-interactions',
                    'Transform designs into pixel-perfect code',
                    'Optimize performance for lightning-fast experiences',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-primary-green text-xl mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-8 relative overflow-hidden group">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary-red animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-primary-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-primary-green animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-gray-400">
                      <span className="text-primary-blue">const</span>{' '}
                      <span className="text-white">developer</span> ={' '}
                      <span className="text-primary-green">{'{'}</span>
                    </div>
                    <div className="pl-4 space-y-2">
                      <div className="text-gray-400">
                        <span className="text-primary-red">name:</span>{' '}
                        <span className="text-primary-green">'{personalInfo.name}'</span>,
                      </div>
                      <div className="text-gray-400">
                        <span className="text-primary-red">role:</span>{' '}
                        <span className="text-primary-green">'{personalInfo.title}'</span>,
                      </div>
                      <div className="text-gray-400">
                        <span className="text-primary-red">passion:</span>{' '}
                        <span className="text-primary-green">'Building Amazing UIs'</span>,
                      </div>
                      <div className="text-gray-400">
                        <span className="text-primary-red">status:</span>{' '}
                        <span className="text-primary-green">'Available for work'</span>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-primary-green">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
