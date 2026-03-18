import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'
import { techStack } from '../data/portfolio'

const TechStackPage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const iconMap = {
    html: SiHtml5,
    css: SiCss3,
    js: SiJavascript,
    react: SiReact,
    tailwind: SiTailwindcss,
  }

  // Matrix-style cascade animation
  const cascadeVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Matrix-style opening: Vertical lines falling */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.8 }}
          animate={{ height: '100vh', opacity: 0 }}
          transition={{
            duration: 1,
            delay: i * 0.05,
            ease: 'easeOut',
          }}
          className="fixed top-0 w-0.5 bg-gradient-to-b from-primary-green to-transparent"
          style={{ left: `${(i / 20) * 100}%` }}
        />
      ))}

      {showContent && (
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              animate={{
                textShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 40px rgba(16, 185, 129, 0.8)',
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="gradient-text">Tech Stack</span>
            </motion.h1>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-green to-transparent"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-lg mb-12 max-w-2xl"
          >
            Technologies I use to bring ideas to life
          </motion.p>

          {/* Tech Grid with cascade effect */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const Icon = iconMap[tech.icon]

              return (
                <motion.div
                  key={tech.name}
                  custom={index}
                  variants={cascadeVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    rotateY: 10,
                  }}
                  className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-blue/10 to-primary-green/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-green/20 to-transparent"
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Icon
                        className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </motion.div>
                    <span className="text-white font-semibold text-center">{tech.name}</span>
                  </div>

                  {/* Corner accents */}
                  <motion.div
                    className="absolute top-0 left-0 w-2 h-2 bg-primary-green"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-2 h-2 bg-primary-blue"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400">
              Always learning and exploring new technologies to stay ahead of the curve
            </p>
          </motion.div>

          {/* Floating tech symbols */}
          <motion.div
            className="absolute top-40 right-40 text-6xl opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {'</>'}
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-40 text-6xl opacity-10"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {'{}'}
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default TechStackPage
