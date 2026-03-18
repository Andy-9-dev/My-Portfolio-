import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'
import { FiCode, FiZap, FiHeart, FiTrendingUp } from 'react-icons/fi'

const AboutPage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Particle explosion opening animation
  const particleCount = 30

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stats = [
    { icon: FiCode, label: 'Lines of Code', value: '10,000+' },
    { icon: FiZap, label: 'Projects Built', value: '15+' },
    { icon: FiHeart, label: 'Coffee Consumed', value: '∞' },
    { icon: FiTrendingUp, label: 'Skills Growing', value: 'Daily' },
  ]

  const values = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that others can understand and build upon.',
    },
    {
      title: 'User First',
      description: 'Every design decision is made with the end user experience in mind.',
    },
    {
      title: 'Never Stop Learning',
      description: 'Technology evolves fast. I evolve faster. Always learning, always growing.',
    },
    {
      title: 'Attention to Detail',
      description: 'Pixel-perfect designs and smooth animations that make interfaces feel alive.',
    },
  ]

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Particle explosion opening */}
      {[...Array(particleCount)].map((_, i) => {
        const angle = (i / particleCount) * Math.PI * 2
        const distance = 100
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x, y, scale: 0, opacity: 0 }}
            transition={{
              duration: 1,
              delay: i * 0.02,
              ease: 'easeOut',
            }}
            className="fixed top-1/2 left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-red via-primary-blue to-primary-green"
            style={{ zIndex: 100 }}
          />
        )
      })}

      {showContent && (
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-12">
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #ef4444, #3b82f6, #10b981, #ef4444)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                About Me
              </motion.h1>
              <div className="flex-1 h-px bg-gradient-to-r from-primary-blue to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {/* Main Bio Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.p className="text-gray-300 text-lg leading-relaxed">
                  {personalInfo.bio}
                </motion.p>

                <motion.p className="text-gray-300 text-lg leading-relaxed">
                  I believe that great code is like poetry - elegant, purposeful, and impactful. Every
                  project is an opportunity to push boundaries and create something that not only works
                  flawlessly but also delights users at every interaction.
                </motion.p>

                <motion.div className="glass rounded-xl p-6 border-l-4 border-primary-blue">
                  <p className="text-gray-400 italic text-lg">
                    "The only way to do great work is to love what you do."
                  </p>
                  <p className="text-primary-blue mt-2 font-semibold">- Steve Jobs</p>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="glass rounded-2xl p-8 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-red via-primary-blue to-primary-green rounded-2xl"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-primary-red"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-primary-blue"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-primary-green"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>

                    <div className="space-y-4 font-mono text-sm">
                      <div className="text-gray-400">
                        <span className="text-primary-blue">const</span>{' '}
                        <span className="text-white">developer</span> ={' '}
                        <span className="text-primary-green">{'{'}</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        {[
                          { key: 'name', value: `'${personalInfo.name}'` },
                          { key: 'role', value: `'${personalInfo.title}'` },
                          { key: 'passion', value: "'Building Amazing UIs'" },
                          { key: 'mindset', value: "'Growth & Innovation'" },
                          { key: 'status', value: "'Available for work'" },
                        ].map((item, index) => (
                          <motion.div
                            key={item.key}
                            className="text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                          >
                            <span className="text-primary-red">{item.key}:</span>{' '}
                            <span className="text-primary-green">{item.value}</span>
                            {index < 4 && ','}
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-gray-400">
                        <span className="text-primary-green">{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 gradient-text">By The Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-6 text-center group cursor-pointer"
                  >
                    <stat.icon className="text-4xl mx-auto mb-3 text-primary-blue group-hover:text-primary-green transition-colors" />
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What I Do Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 gradient-text">What I Do</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Build responsive, mobile-first web applications that work flawlessly on any device',
                  'Create smooth animations and micro-interactions that bring interfaces to life',
                  'Transform complex designs into clean, maintainable, pixel-perfect code',
                  'Optimize performance for lightning-fast load times and smooth 60fps experiences',
                  'Collaborate with designers and teams to bring visions to reality',
                  'Write semantic, accessible HTML that works for everyone',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 glass rounded-lg p-4 hover:bg-white/5 transition-colors"
                  >
                    <motion.span
                      className="text-primary-green text-xl mt-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                    >
                      ▹
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 gradient-text">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-6 border-l-4 border-primary-blue hover:border-primary-green transition-colors"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inspirational Quote */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-blue/10 to-primary-green/10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl text-gray-300 italic mb-6 leading-relaxed">
                  "Imagination is more important than knowledge. Knowledge is limited. Imagination
                  encircles the world."
                </p>
                <p className="text-primary-blue text-xl font-semibold">- Albert Einstein</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary-red/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-primary-green/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      )}
    </section>
  )
}

export default AboutPage
