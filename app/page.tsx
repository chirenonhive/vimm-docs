import Link from 'next/link'
import { ArrowRight, Server, Globe, MessageCircle, Play, Shield, Zap, Users, Code, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-none">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-vimm-orange/10 to-orange-100/20 dark:from-vimm-orange/20 dark:to-gray-800 rounded-2xl p-12 mb-16">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-vimm-orange/10 border border-vimm-orange/20 rounded-full text-vimm-orange text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Open Source Streaming Framework
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            VIMM Framework
            <span className="block text-vimm-orange bg-gradient-to-r from-vimm-orange to-orange-600 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build powerful decentralized streaming platforms with our comprehensive framework. 
            Get professional-grade streaming infrastructure with Hive blockchain integration, 
            real-time chat, and enterprise-ready deployment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started/quick-start"
              className="inline-flex items-center px-8 py-4 bg-vimm-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play className="mr-2 w-5 h-5" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/VIMM-TV"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="mr-2 w-5 h-5" />
              View on GitHub
            </Link>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-vimm-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200/20 rounded-full blur-2xl"></div>
      </div>

      {/* Enhanced Components Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Core Components
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to build a professional streaming platform
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-vimm-orange dark:hover:border-vimm-orange transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-vimm-orange to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              VIMM Core
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) 
              and seamless Hive blockchain integration for decentralized content delivery.
            </p>
            <Link
              href="/components/core"
              className="inline-flex items-center text-vimm-orange hover:text-orange-600 font-semibold group-hover:translate-x-2 transition-all duration-300"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-vimm-orange dark:hover:border-vimm-orange transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              VIMM Frontend
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Modern React-based frontend with responsive design, advanced stream viewing capabilities, 
              user management, and customizable UI components.
            </p>
            <Link
              href="/components/frontend"
              className="inline-flex items-center text-vimm-orange hover:text-orange-600 font-semibold group-hover:translate-x-2 transition-all duration-300"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-vimm-orange dark:hover:border-vimm-orange transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              VIMM Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Real-time chat server with WebSocket support, advanced moderation tools, 
              emoji support, and seamless integration with streaming components.
            </p>
            <Link
              href="/components/chat"
              className="inline-flex items-center text-vimm-orange hover:text-orange-600 font-semibold group-hover:translate-x-2 transition-all duration-300"
            >
              Learn more
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Start Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get your VIMM framework up and running in minutes with our streamlined deployment process
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-vimm-orange rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Prerequisites
                </h3>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Node.js 18+ and npm
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  FFmpeg for media processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  SSL certificates for production
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Domain name (recommended)
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-vimm-orange rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Installation Steps
                </h3>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Clone the repositories
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Configure environment variables
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Install dependencies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3"></div>
                  Start the services
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/getting-started/quick-start"
              className="inline-flex items-center px-6 py-3 bg-vimm-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300"
            >
              View detailed setup guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade features for professional streaming applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, text: 'Multi-protocol streaming (RTMP, WebRTC, HLS)', color: 'from-yellow-500 to-orange-500' },
            { icon: Shield, text: 'Hive blockchain integration', color: 'from-blue-500 to-purple-500' },
            { icon: MessageCircle, text: 'Real-time chat system', color: 'from-green-500 to-blue-500' },
            { icon: Server, text: 'Adaptive bitrate streaming', color: 'from-purple-500 to-pink-500' },
            { icon: Zap, text: 'Hardware acceleration support', color: 'from-red-500 to-orange-500' },
            { icon: Users, text: 'Horizontal scaling capability', color: 'from-indigo-500 to-blue-500' },
            { icon: Code, text: 'Complete REST API', color: 'from-gray-500 to-gray-700' },
            { icon: Shield, text: 'Production-ready security', color: 'from-green-500 to-teal-500' }
          ].map((feature, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-vimm-orange dark:hover:border-vimm-orange transition-all duration-300 hover:shadow-lg">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Showcase Section */}
      <section className="bg-gradient-to-br from-vimm-orange/5 to-orange-50/50 dark:from-vimm-orange/10 dark:to-gray-800/50 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing community of developers building the future of decentralized streaming
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-vimm-orange mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-vimm-orange mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Contributors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-vimm-orange mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Community Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}