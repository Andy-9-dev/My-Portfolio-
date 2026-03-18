import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const ContactPage = () => {
  const [showContent, setShowContent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xqedwjyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(''), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Radar/Pulse opening effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            ease: 'easeOut',
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-primary-green"
        />
      ))}

      {showContent && (
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              animate={{
                textShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.5)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="gradient-text">Get In Touch</span>
            </motion.h1>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-green to-transparent"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold mb-4"
                >
                  Let's work together
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 leading-relaxed"
                >
                  I'm always interested in hearing about new projects and opportunities. Whether
                  you have a question or just want to say hi, feel free to reach out!
                </motion.p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {[
                  { icon: FiMail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: FiGithub, label: 'GitHub', href: personalInfo.github },
                  ...(personalInfo.linkedin
                    ? [{ icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin }]
                    : []),
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  >
                    <motion.div
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="text-xl" />
                    </motion.div>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Decorative pulse */}
              <motion.div
                className="relative w-32 h-32 mx-auto mt-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-primary-green/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.6,
                      repeat: Infinity,
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                  📡
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  placeholder: 'your.email@example.com',
                },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    value={formData[field.id]}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-transparent text-white transition-all"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-transparent text-white resize-none transition-all"
                  placeholder="Your message..."
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'sending'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: submitStatus === 'sending' ? 1 : 1.05, y: submitStatus === 'sending' ? 0 : -2 }}
                whileTap={{ scale: submitStatus === 'sending' ? 1 : 0.95 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 relative overflow-hidden group ${
                  submitStatus === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-gradient-to-r from-primary-red via-primary-blue to-primary-green hover:shadow-lg hover:shadow-primary-blue/50'
                }`}
              >
                {submitStatus !== 'sending' && submitStatus !== 'success' && submitStatus !== 'error' && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {submitStatus === 'sending'
                    ? 'Sending...'
                    : submitStatus === 'success'
                    ? 'Message Sent!'
                    : submitStatus === 'error'
                    ? 'Failed. Try Again'
                    : 'Send Message'}
                </span>
                {submitStatus === 'sending' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full relative z-10"
                  />
                ) : (
                  <FiSend className="relative z-10" />
                )}
              </motion.button>
            </motion.form>
          </div>

          {/* Floating connection lines */}
          <svg className="absolute inset-0 pointer-events-none opacity-20" style={{ zIndex: -1 }}>
            {[...Array(5)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </section>
  )
}

export default ContactPage
