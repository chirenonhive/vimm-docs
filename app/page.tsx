import Link from 'next/link'
import { ArrowRight, Server, Globe, MessageCircle, Zap, Shield, Cpu } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          VIMM Framework
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-vimm-orange to-orange-600">
            Documentation
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
          Complete guide to deploying and configuring the VIMM decentralized streaming framework. 
          Build your own streaming platform with Hive blockchain integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/getting-started/quick-start"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-vimm-orange to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/VIMM-TV"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      {/* Components Overview */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Core Components</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              VIMM Core
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) 
              and Hive blockchain integration.
            </p>
            <Link
              href="/components/core"
              className="text-vimm-orange hover:text-orange-600 font-medium inline-flex items-center group"
            >
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              VIMM Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              React-based reference frontend application with responsive design, 
              stream viewing, and user management features.
            </p>
            <Link
              href="/components/frontend"
              className="text-vimm-orange hover:text-orange-600 font-medium inline-flex items-center group"
            >
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              VIMM Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Real-time chat server with WebSocket support, moderation tools, 
              and seamless integration with streaming components.
            </p>
            <Link
              href="/components/chat"
              className="text-vimm-orange hover:text-orange-600 font-medium inline-flex items-center group"
            >
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Quick Start
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get your VIMM framework up and running in minutes with our streamlined deployment process.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <div className="w-6 h-6 bg-vimm-orange rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">1</div>
              Prerequisites
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Node.js 18+ and npm
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                FFmpeg for media processing
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                SSL certificates for production
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Domain name (recommended)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <div className="w-6 h-6 bg-vimm-orange rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">2</div>
              Installation
            </h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Clone the repositories
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Configure environment variables
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Install dependencies
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-vimm-orange rounded-full mr-3"></div>
                Start the services
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/getting-started/quick-start"
            className="inline-flex items-center text-vimm-orange hover:text-orange-600 font-medium group"
          >
            View detailed setup guide
            <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Multi-protocol streaming', desc: 'RTMP, WebRTC, HLS support' },
            { icon: Shield, title: 'Hive blockchain integration', desc: 'Decentralized authentication' },
            { icon: MessageCircle, title: 'Real-time chat system', desc: 'WebSocket-based messaging' },
            { icon: Cpu, title: 'Adaptive bitrate streaming', desc: 'Optimized for all devices' },
            { icon: Server, title: 'Hardware acceleration', desc: 'GPU-accelerated encoding' },
            { icon: Globe, title: 'Horizontal scaling', desc: 'Multi-server deployment ready' },
          ].map((feature, index) => (
            <div key={index} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-gradient-to-br from-vimm-orange to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <feature.icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}