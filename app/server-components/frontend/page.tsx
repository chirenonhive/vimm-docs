'use client'

import { CopyButton } from '../../components/copy-button'

export default function FrontendComponentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        VIMM Frontend
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        A React 19-based reference implementation that integrates VIMM Core (streaming server) and VIMM Chat 
        (real-time chat) while implementing Hive blockchain social features for a complete live streaming experience.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Overview
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Frontend is the web application that ties together the VIMM ecosystem. It provides a comprehensive 
        user interface for stream discovery, live viewing with HLS.js player, real-time chat via Socket.IO, 
        and streamer management tools. Built with modern React patterns and Hive blockchain integration.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        As a reference implementation, it demonstrates best practices for integrating all VIMM components 
        and can be customized or used as a foundation for your own streaming platform.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Key Features
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            📺 Stream Viewing
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            HLS.js-based adaptive video player with real-time chat integration and stream information display.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            💬 Real-time Chat
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Socket.IO-powered chat with moderator tools, message history, and connection status indicators.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🎛️ Streamer Dashboard
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive control panel with live stats, chat moderation, and stream settings management.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🔐 Hive Authentication
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Decentralized authentication using Hive Keychain with JWT token management and protected routes.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Architecture & Structure
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        The frontend follows a component-based architecture with clear separation of concerns:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <pre className="text-sm text-gray-700 dark:text-gray-300">
{`vimm-frontend/
├── src/
│   ├── pages/          # Route components
│   ├── components/     # Reusable UI  
│   ├── services/       # API layer (singletons)
│   ├── contexts/       # React contexts
│   └── config/         # Configuration`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Core Components
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        WatchPage - Stream Viewing Interface
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Main stream viewing page combining video player and chat:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>HLS.js-based adaptive video player</li>
        <li>Real-time chat integration</li>
        <li>Stream information display</li>
        <li>Follow/unfollow functionality</li>
        <li>Mobile-responsive with fullscreen support</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        StreamerDashboard - Control Panel
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive dashboard for streamers:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Live stream preview</li>
        <li>Real-time viewer statistics</li>
        <li>Chat moderation tools</li>
        <li>Stream settings editor</li>
        <li>Protected route requiring authentication</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Service Layer Pattern
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        API interactions through singleton services:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>streamService - Stream data and metadata</li>
        <li>chatService - Chat messaging and history</li>
        <li>dashboardService - Dashboard statistics</li>
        <li>hiveAuth - Hive authentication</li>
        <li>followService - Follow/unfollow management</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Environment variables for VIMM Frontend:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# .env file
REACT_APP_VIMM_CHAT_SERVER=https://chat.vimm.tv
REACT_APP_VIMM_CORE_SERVER=https://www.vimm.tv

# For local development
REACT_APP_VIMM_CHAT_SERVER=http://localhost:3001
REACT_APP_VIMM_CORE_SERVER=http://localhost:3000
PORT=3002`}</code>
        </pre>
        <CopyButton text={`# .env file
REACT_APP_VIMM_CHAT_SERVER=https://chat.vimm.tv
REACT_APP_VIMM_CORE_SERVER=https://www.vimm.tv

# For local development
REACT_APP_VIMM_CHAT_SERVER=http://localhost:3001
REACT_APP_VIMM_CORE_SERVER=http://localhost:3000
PORT=3002`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Dependencies
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Core dependencies required by VIMM Frontend:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^6.x",
    "socket.io-client": "^4.7.3",
    "hls.js": "^1.x"
  }
}`}</code>
        </pre>
        <CopyButton text={`{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^6.x",
    "socket.io-client": "^4.7.3",
    "hls.js": "^1.x"
  }
}`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Authentication Flow
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Frontend uses Hive Keychain for decentralized authentication:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
          <li>User clicks "Login with Hive" in Navbar</li>
          <li>HiveLogin component opens and user enters Hive username</li>
          <li>Hive Keychain browser extension prompts for signature</li>
          <li>Frontend sends authentication request to VIMM Core</li>
          <li>Core validates signature and returns JWT token</li>
          <li>Token stored in AuthContext and localStorage</li>
          <li>Token included in API requests</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Quick Start
      </h2>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Clone repository
git clone https://github.com/VIMM-TV/vimm-frontend.git
cd vimm-frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with server URLs

# Start development server
npm start`}</code>
        </pre>
        <CopyButton text={`# Clone repository
git clone https://github.com/VIMM-TV/vimm-frontend.git
cd vimm-frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with server URLs

# Start development server
npm start`} />
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
          ⚠️ Prerequisites
        </h3>
        <ul className="text-yellow-600 dark:text-yellow-300 space-y-1">
          <li>• VIMM Core server must be running</li>
          <li>• VIMM Chat server must be running</li>
          <li>• Hive Keychain extension required</li>
          <li>• CORS configured on both servers</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Development Tips
      </h2>
      <div className="space-y-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔧 Hot Reload</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Use npm start for development with automatic hot reloading.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎭 Mock Data</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Dashboard includes mock data fallbacks for development.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🌐 CORS</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Ensure servers allow requests from your frontend origin.
          </p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          🎨 Reference Implementation
        </h3>
        <p className="text-green-600 dark:text-green-300">
          VIMM Frontend demonstrates how to build a complete streaming platform frontend 
          that integrates with VIMM Core and Chat. Customize and extend for your needs.
        </p>
      </div>
    </div>
  )
}