import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <FiHeart className="text-primary-red" /> by Anderson Andrew
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
