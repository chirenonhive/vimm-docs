import Link from 'next/link'
import { Github, Twitter, Globe, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-vimm-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                VIMM Framework
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Open-source decentralized streaming framework with Hive blockchain integration. 
              Build your own streaming platform with professional-grade tools.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/VIMM-TV"
                className="text-gray-400 hover:text-vimm-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://vimm.tv"
                className="text-gray-400 hover:text-vimm-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Documentation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Documentation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/getting-started/quick-start" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors">
                  Quick Start
                </Link>
              </li>
              <li>
                <Link href="/components/core" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors">
                  VIMM Core
                </Link>
              </li>
              <li>
                <Link href="/deployment/docker" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors">
                  Docker Setup
                </Link>
              </li>
              <li>
                <Link href="/guides/troubleshooting" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors">
                  Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://github.com/VIMM-TV" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/vimm" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors" target="_blank" rel="noopener noreferrer">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://vimm.tv" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors" target="_blank" rel="noopener noreferrer">
                  Official Site
                </Link>
              </li>
              <li>
                <Link href="/guides/security" className="text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} VIMM Framework. Open source under MIT License.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the streaming community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}