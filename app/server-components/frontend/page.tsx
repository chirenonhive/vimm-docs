'use client'

import { CopyButton } from '../../components/copy-button'

export default function FrontendComponentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        VIMM Frontend
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        The user-facing web application providing the streaming interface for viewers and streamers. 
        Built with React and modern web technologies for optimal performance and user experience.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Overview
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        VIMM Frontend is the web application that users interact with to watch streams, chat with 
        other viewers, manage their profiles, and access all VIMM platform features. It's designed 
        to be responsive, fast, and accessible across all devices.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Key Features
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            📺 Stream Player
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Advanced video player with adaptive bitrate streaming, quality selection, and fullscreen support.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            💬 Integrated Chat
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time chat interface with emotes, moderation tools, and interactive features.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🎛️ Streamer Dashboard
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive dashboard for streamers to manage their channel, analytics, and settings.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            📱 Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Mobile-first design that works seamlessly across desktop, tablet, and mobile devices.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Technology Stack
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Frontend is built with modern web technologies:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <pre className="text-sm text-gray-700 dark:text-gray-300">
{`┌─────────────────────────────────────────┐
│            VIMM Frontend                │
├─────────────────────────────────────────┤
│   React 18   │  TypeScript  │  Next.js  │
├─────────────────────────────────────────┤
│ Tailwind CSS │  Socket.IO   │  Video.js │
├─────────────────────────────────────────┤
│   PWA Ready  │  Service SW  │  Offline  │
└─────────────────────────────────────────┘`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Core Components
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Video Player
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Advanced streaming video player features:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>HLS and DASH protocol support</li>
        <li>Adaptive bitrate streaming (ABR)</li>
        <li>Manual quality selection</li>
        <li>Theater and fullscreen modes</li>
        <li>Picture-in-picture support</li>
        <li>Live DVR functionality</li>
        <li>Low-latency streaming</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Chat Interface
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Interactive chat experience:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Real-time message display</li>
        <li>Custom emotes and badges</li>
        <li>User mentions and replies</li>
        <li>Moderation controls</li>
        <li>Chat history and search</li>
        <li>Private messaging</li>
        <li>Mobile-optimized interface</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        User Dashboard
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive user management:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Profile management and customization</li>
        <li>Stream analytics and insights</li>
        <li>Revenue tracking and payouts</li>
        <li>Follower and subscriber management</li>
        <li>Stream scheduling tools</li>
        <li>Content management system</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Key configuration options for VIMM Frontend:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# App Configuration
REACT_APP_SITE_NAME=VIMM
REACT_APP_SITE_URL=http://localhost:3002
REACT_APP_VERSION=1.0.0

# API Endpoints
REACT_APP_API_URL=http://localhost:3000
REACT_APP_CHAT_URL=http://localhost:3001
REACT_APP_WEBSOCKET_URL=ws://localhost:3001

# Features
REACT_APP_CHAT_ENABLED=true
REACT_APP_DONATIONS_ENABLED=true
REACT_APP_SUBSCRIPTIONS_ENABLED=true
REACT_APP_ANALYTICS_ENABLED=true

# Video Player
REACT_APP_HLS_ENABLED=true
REACT_APP_DASH_ENABLED=true
REACT_APP_WEBRTC_ENABLED=true
REACT_APP_DVR_ENABLED=true

# Theme and Branding
REACT_APP_PRIMARY_COLOR=#ff6b35
REACT_APP_SECONDARY_COLOR=#1a1a1a
REACT_APP_LOGO_URL=/assets/logo.png

# Social Integration
REACT_APP_TWITTER_HANDLE=vimm_tv
REACT_APP_DISCORD_INVITE=discord.gg/vimm
REACT_APP_GITHUB_URL=github.com/VIMM-TV

# Analytics
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
REACT_APP_HOTJAR_ID=1234567`}</code>
        </pre>
        <CopyButton text={`# App Configuration
REACT_APP_SITE_NAME=VIMM
REACT_APP_SITE_URL=http://localhost:3002
REACT_APP_VERSION=1.0.0

# API Endpoints
REACT_APP_API_URL=http://localhost:3000
REACT_APP_CHAT_URL=http://localhost:3001
REACT_APP_WEBSOCKET_URL=ws://localhost:3001

# Features
REACT_APP_CHAT_ENABLED=true
REACT_APP_DONATIONS_ENABLED=true
REACT_APP_SUBSCRIPTIONS_ENABLED=true
REACT_APP_ANALYTICS_ENABLED=true

# Video Player
REACT_APP_HLS_ENABLED=true
REACT_APP_DASH_ENABLED=true
REACT_APP_WEBRTC_ENABLED=true
REACT_APP_DVR_ENABLED=true

# Theme and Branding
REACT_APP_PRIMARY_COLOR=#ff6b35
REACT_APP_SECONDARY_COLOR=#1a1a1a
REACT_APP_LOGO_URL=/assets/logo.png

# Social Integration
REACT_APP_TWITTER_HANDLE=vimm_tv
REACT_APP_DISCORD_INVITE=discord.gg/vimm
REACT_APP_GITHUB_URL=github.com/VIMM-TV

# Analytics
REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
REACT_APP_HOTJAR_ID=1234567`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Page Structure
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Key pages and routes in the VIMM Frontend:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Public Pages</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/</code> - Homepage with featured streams</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/browse</code> - Browse all live streams</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/channel/:username</code> - Individual channel page</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/category/:name</code> - Browse by category</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Pages</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/dashboard</code> - User dashboard</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/profile</code> - Profile settings</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/following</code> - Followed channels</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/subscriptions</code> - Subscription management</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Streamer Pages</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/streamer/dashboard</code> - Streamer control panel</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/streamer/analytics</code> - Stream analytics</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/streamer/settings</code> - Channel settings</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/streamer/monetization</code> - Revenue management</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Customization
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Frontend supports extensive customization:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Theming
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'vimm': {
          'orange': '#ff6b35',
          'dark': '#1a1a1a',
          'gray': '#2a2a2a'
        }
      }
    }
  }
}`}</code>
        </pre>
        <CopyButton text={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'vimm': {
          'orange': '#ff6b35',
          'dark': '#1a1a1a',
          'gray': '#2a2a2a'
        }
      }
    }
  }
}`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Component Customization
      </h3>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Custom player skins and controls</li>
        <li>Branded chat themes and emotes</li>
        <li>Personalized dashboard layouts</li>
        <li>Custom overlay components</li>
        <li>White-label branding options</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Performance Optimization
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Built-in performance optimizations:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li><strong>Code splitting</strong>: Automatic route-based code splitting</li>
        <li><strong>Image optimization</strong>: Next.js Image component with WebP support</li>
        <li><strong>Caching</strong>: Aggressive caching strategies for static assets</li>
        <li><strong>PWA features</strong>: Service worker for offline functionality</li>
        <li><strong>Lazy loading</strong>: Components and images load on demand</li>
        <li><strong>Bundle optimization</strong>: Tree shaking and minification</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Development Workflow
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Development commands and workflows:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Type checking
npm run type-check

# Bundle analysis
npm run analyze`}</code>
        </pre>
        <CopyButton text={`# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Type checking
npm run type-check

# Bundle analysis
npm run analyze`} />
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          🎨 Modern UI/UX
        </h3>
        <p className="text-green-600 dark:text-green-300">
          VIMM Frontend provides a modern, intuitive interface that prioritizes user experience 
          while maintaining the performance needed for live streaming applications.
        </p>
      </div>
    </div>
  )
}