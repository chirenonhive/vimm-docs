'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Github } from 'lucide-react'
import Link from 'next/link'
import { MobileSidebar } from './mobile-sidebar'

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'surface-elevation-2 border-custom backdrop-blur-lg bg-opacity-80' 
          : 'surface-elevation-1 border-custom'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Mobile sidebar toggle */}
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden p-2 mr-3 rounded-xl text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-vimm-orange to-vimm-orange-dark rounded-xl flex items-center justify-center shadow-glow transition-all duration-300 group-hover:shadow-glow-lg group-hover:scale-110">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className="text-xl font-bold text-primary transition-colors duration-200 group-hover:text-vimm-orange">
                  VIMM Docs
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://github.com/VIMM-TV"
                className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced mobile menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="surface-elevation-1 border-t border-custom animate-slide-in-left">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="https://github.com/VIMM-TV"
                className="flex items-center px-4 py-3 text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </Link>
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  setMobileMenuOpen(false)
                }}
                className="flex items-center w-full px-4 py-3 text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all duration-200"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 mr-3" /> : <Moon className="w-5 h-5 mr-3" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileSidebar isOpen={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
    </>
  )
}