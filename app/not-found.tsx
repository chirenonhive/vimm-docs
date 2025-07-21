import Link from 'next/link'
import { Home, Search, BookOpen, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-vimm-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold text-white">404</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-vimm-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/getting-started/quick-start"
              className="inline-flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-vimm-orange transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Quick Start Guide
            </Link>
            <Link
              href="javascript:history.back()"
              className="inline-flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-vimm-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Popular Pages
          </h3>
          <div className="space-y-2">
            <Link
              href="/components/core"
              className="block text-vimm-orange hover:text-orange-600 transition-colors"
            >
              VIMM Core Documentation
            </Link>
            <Link
              href="/deployment/docker"
              className="block text-vimm-orange hover:text-orange-600 transition-colors"
            >
              Docker Deployment Guide
            </Link>
            <Link
              href="/guides/troubleshooting"
              className="block text-vimm-orange hover:text-orange-600 transition-colors"
            >
              Troubleshooting Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}