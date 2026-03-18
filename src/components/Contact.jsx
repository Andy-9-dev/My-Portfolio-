import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
    <section id="contact" className="py-20 px-6 relative">
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
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary-green to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                    <FiMail className="text-xl" />
                  </div>
                  <span>{personalInfo.email}</span>
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                    <FiGithub className="text-xl" />
                  </div>
                  <span>GitHub</span>
                </motion.a>

                {personalInfo.linkedin && (
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                      <FiLinkedin className="text-xl" />
                    </div>
                    <span>LinkedIn</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-transparent text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-transparent text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue bg-transparent text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={submitStatus === 'sending'}
                whileHover={{ scale: submitStatus === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: submitStatus === 'sending' ? 1 : 0.98 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitStatus === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-gradient-to-r from-primary-red via-primary-blue to-primary-green hover:shadow-lg hover:shadow-primary-blue/50'
                }`}
              >
                <span>
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
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <FiSend />
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
