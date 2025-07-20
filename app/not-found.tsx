'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  const goBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* 404 Graphic */}
          <div className="mb-8">
            <div className="text-9xl font-bold bg-gradient-to-r from-vimm-orange to-vimm-orange-dark bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-vimm-orange to-vimm-orange-dark mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-secondary mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn-primary text-lg px-8 py-4"
            >
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={goBack}
              className="btn-secondary text-lg px-8 py-4"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="surface-elevation-1 rounded-2xl p-8 border border-custom">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Popular Pages
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Quick Start Guide', href: '/getting-started/quick-start', icon: '🚀' },
                { title: 'VIMM Core', href: '/components/core', icon: '⚡' },
                { title: 'Docker Deployment', href: '/deployment/docker', icon: '🐳' },
                { title: 'Troubleshooting', href: '/guides/troubleshooting', icon: '🔧' },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center p-4 text-left text-secondary hover:text-primary surface-elevation-2 hover:surface-elevation-3 rounded-xl transition-all duration-200 group"
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8 p-6 surface-elevation-2 rounded-xl border border-custom">
            <div className="flex items-center justify-center text-secondary">
              <Search className="w-5 h-5 mr-2" />
              <span>Try using the search function (</span>
              <kbd className="mx-1 px-2 py-1 text-xs surface-elevation-3 border-custom rounded">
                Ctrl+K
              </kbd>
              <span>) to find what you're looking for</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}