import Link from 'next/link'
import { ArrowRight, Server, Globe, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          VIMM Framework
          <span className="block text-vimm-orange">Documentation</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Complete guide to deploying and configuring the VIMM decentralized streaming framework. 
          Build your own streaming platform with Hive blockchain integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started/quick-start"
            className="inline-flex items-center px-6 py-3 bg-vimm-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/VIMM-TV"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      {/* Components Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Server className="w-12 h-12 text-vimm-orange mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            VIMM Core
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) 
            and Hive blockchain integration.
          </p>
          <Link
            href="/components/core"
            className="text-vimm-orange hover:text-orange-600 font-medium"
          >
            Learn more →
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <Globe className="w-12 h-12 text-vimm-orange mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            VIMM Frontend
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            React-based reference frontend application with responsive design, 
            stream viewing, and user management features.
          </p>
          <Link
            href="/components/frontend"
            className="text-vimm-orange hover:text-orange-600 font-medium"
          >
            Learn more →
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <MessageCircle className="w-12 h-12 text-vimm-orange mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            VIMM Chat
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Real-time chat server with WebSocket support, moderation tools, 
            and seamless integration with streaming components.
          </p>
          <Link
            href="/components/chat"
            className="text-vimm-orange hover:text-orange-600 font-medium"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Quick Start
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get your VIMM framework up and running in minutes with our streamlined deployment process.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Prerequisites
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Node.js 18+ and npm</li>
              <li>• FFmpeg for media processing</li>
              <li>• SSL certificates for production</li>
              <li>• Domain name (recommended)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Installation
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Clone the repositories</li>
              <li>• Configure environment variables</li>
              <li>• Install dependencies</li>
              <li>• Start the services</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/getting-started/quick-start"
            className="inline-flex items-center text-vimm-orange hover:text-orange-600 font-medium"
          >
            View detailed setup guide
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Multi-protocol streaming (RTMP, WebRTC, HLS)',
            'Hive blockchain integration',
            'Real-time chat system',
            'Adaptive bitrate streaming',
            'Hardware acceleration support',
            'Horizontal scaling capability',
            'Complete REST API',
            'Production-ready security'
          ].map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-vimm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}