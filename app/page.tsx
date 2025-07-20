import Link from 'next/link'
import { ArrowRight, Server, Globe, MessageCircle, Star, Zap, Shield, Users } from 'lucide-react'
import { Breadcrumbs } from './components/breadcrumbs'
import { EditPageLink } from './components/edit-page-link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 id="vimm-framework-documentation" className="text-6xl md:text-7xl font-bold text-primary mb-8 leading-tight">
            VIMM Framework
            <span className="block bg-gradient-to-r from-vimm-orange to-vimm-orange-dark bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-10 max-w-4xl mx-auto leading-relaxed">
            Complete guide to deploying and configuring the VIMM decentralized streaming framework. 
            Build your own streaming platform with Hive blockchain integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
            <Link
              href="/getting-started/quick-start"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/VIMM-TV"
              className="btn-secondary text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in">
          {[
            { icon: Users, label: 'Active Deployments', value: '500+' },
            { icon: Star, label: 'GitHub Stars', value: '2.5K+' },
            { icon: Zap, label: 'Performance Boost', value: '3x' },
            { icon: Shield, label: 'Security Score', value: 'A+' },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-bounce-gentle" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="surface-elevation-2 rounded-2xl p-6 mb-4">
                <stat.icon className="w-8 h-8 text-vimm-orange mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Components Overview */}
        <section id="components-overview">
          <h2 id="core-components" className="text-4xl font-bold text-primary mb-12 text-center">
            Core Components
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Server,
                title: 'VIMM Core',
                description: 'High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) and Hive blockchain integration.',
                href: '/components/core',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Globe,
                title: 'VIMM Frontend',
                description: 'React-based reference frontend application with responsive design, stream viewing, and user management features.',
                href: '/components/frontend',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: MessageCircle,
                title: 'VIMM Chat',
                description: 'Real-time chat server with WebSocket support, moderation tools, and seamless integration with streaming components.',
                href: '/components/chat',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((component, index) => (
              <div key={index} className="group animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="surface-elevation-1 hover:surface-elevation-3 p-8 rounded-2xl border border-custom transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <component.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-vimm-orange transition-colors duration-300">
                    {component.title}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {component.description}
                  </p>
                  <Link
                    href={component.href}
                    className="link-primary font-semibold inline-flex items-center"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start-overview" className="surface-elevation-2 rounded-3xl p-10 mb-20 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 id="quick-start" className="text-4xl font-bold text-primary mb-6 text-center">
              Quick Start
            </h2>
            <p className="text-xl text-secondary mb-8 text-center">
              Get your VIMM framework up and running in minutes with our streamlined deployment process.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 id="prerequisites-overview" className="text-2xl font-semibold text-primary mb-4">
                  Prerequisites
                </h3>
                <ul className="space-y-3">
                  {[
                    'Node.js 18+ and npm',
                    'FFmpeg for media processing',
                    'SSL certificates for production',
                    'Domain name (recommended)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-secondary">
                      <div className="w-2 h-2 bg-vimm-orange rounded-full mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 id="installation-overview" className="text-2xl font-semibold text-primary mb-4">
                  Installation
                </h3>
                <ul className="space-y-3">
                  {[
                    'Clone the repositories',
                    'Configure environment variables',
                    'Install dependencies',
                    'Start the services'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-secondary">
                      <div className="w-6 h-6 bg-gradient-to-r from-vimm-orange to-vimm-orange-dark text-white text-sm rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
                        {index + 1}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/getting-started/quick-start"
                className="btn-primary text-lg px-8 py-4"
              >
                View detailed setup guide
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="key-features" className="mb-20 animate-fade-in">
          <h2 id="features" className="text-4xl font-bold text-primary mb-12 text-center">
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
              <div key={index} className="flex items-start p-4 surface-elevation-1 rounded-xl border border-custom hover:surface-elevation-2 transition-all duration-200 animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-3 h-3 bg-gradient-to-r from-vimm-orange to-vimm-orange-dark rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-secondary leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="get-started-cta" className="text-center surface-elevation-2 rounded-3xl p-10 animate-fade-in">
          <h2 id="ready-to-start" className="text-3xl font-bold text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing streaming platforms with VIMM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started/quick-start"
              className="btn-primary text-lg px-8 py-4"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/guides/troubleshooting"
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Help
            </Link>
          </div>
        </section>

        <EditPageLink />
      </div>
    </div>
  )
}