'use client'

import { CopyButton } from '../../components/copy-button'

export default function QuickStartPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Quick Start Guide
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Prerequisites
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Before starting, ensure you have the following installed:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Required Software
      </h3>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li><strong>Node.js 18+</strong> - <a href="https://nodejs.org/" className="text-vimm-orange hover:underline">Download here</a></li>
        <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
        <li><strong>Git</strong> for cloning repositories</li>
        <li><strong>FFmpeg</strong> for media processing</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        System Requirements
      </h3>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li><strong>Memory</strong>: Minimum 4GB RAM (8GB+ recommended for production)</li>
        <li><strong>Storage</strong>: 10GB+ free space</li>
        <li><strong>Network</strong>: Stable internet connection</li>
        <li><strong>OS</strong>: Linux (Ubuntu 20.04+), macOS, or Windows with WSL2</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Install FFmpeg
      </h3>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Ubuntu/Debian
sudo apt update
sudo apt install ffmpeg

# macOS (with Homebrew)
brew install ffmpeg

# For NVIDIA GPU support (Ubuntu)
sudo apt install nvidia-cuda-toolkit`}</code>
        </pre>
        <CopyButton text={`# Ubuntu/Debian
sudo apt update
sudo apt install ffmpeg

# macOS (with Homebrew)
brew install ffmpeg

# For NVIDIA GPU support (Ubuntu)
sudo apt install nvidia-cuda-toolkit`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 1: Clone the Repositories
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Create a directory for your VIMM deployment and clone all three components:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`mkdir vimm-deployment
cd vimm-deployment

# Clone VIMM Core (streaming server)
git clone https://github.com/VIMM-TV/vimm-core.git

# Clone VIMM Frontend (web interface)
git clone https://github.com/VIMM-TV/vimm-frontend.git

# Clone VIMM Chat (chat server)
git clone https://github.com/VIMM-TV/vimm-chat.git`}</code>
        </pre>
        <CopyButton text={`mkdir vimm-deployment
cd vimm-deployment

# Clone VIMM Core (streaming server)
git clone https://github.com/VIMM-TV/vimm-core.git

# Clone VIMM Frontend (web interface)
git clone https://github.com/VIMM-TV/vimm-frontend.git

# Clone VIMM Chat (chat server)
git clone https://github.com/VIMM-TV/vimm-chat.git`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 2: Configure Environment Variables
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Each component requires environment configuration. Create the necessary `.env` files:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        VIMM Core Configuration
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd vimm-core
cp .env.example .env`}</code>
        </pre>
        <CopyButton text={`cd vimm-core
cp .env.example .env`} />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Edit the `.env` file with your configuration. Key variables include:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Database
DB_PATH=./data/vimm.db

# Server Configuration
PORT=3000
RTMP_PORT=1935

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
HIVE_ACCOUNT=your-hive-account
HIVE_KEY=your-posting-key

# Stream Settings
STREAM_DIR=./streams
RECORDING_ENABLED=true`}</code>
        </pre>
        <CopyButton text={`# Database
DB_PATH=./data/vimm.db

# Server Configuration
PORT=3000
RTMP_PORT=1935

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
HIVE_ACCOUNT=your-hive-account
HIVE_KEY=your-posting-key

# Stream Settings
STREAM_DIR=./streams
RECORDING_ENABLED=true`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        VIMM Frontend Configuration
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd ../vimm-frontend
cp .env.example .env`}</code>
        </pre>
        <CopyButton text={`cd ../vimm-frontend
cp .env.example .env`} />
      </div>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# API Configuration
REACT_APP_API_URL=http://localhost:3000
REACT_APP_CHAT_URL=http://localhost:3001

# Frontend Settings
PORT=3002
REACT_APP_SITE_NAME=VIMM
REACT_APP_SITE_URL=http://localhost:3002`}</code>
        </pre>
        <CopyButton text={`# API Configuration
REACT_APP_API_URL=http://localhost:3000
REACT_APP_CHAT_URL=http://localhost:3001

# Frontend Settings
PORT=3002
REACT_APP_SITE_NAME=VIMM
REACT_APP_SITE_URL=http://localhost:3002`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        VIMM Chat Configuration
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd ../vimm-chat
cp .env.example .env`}</code>
        </pre>
        <CopyButton text={`cd ../vimm-chat
cp .env.example .env`} />
      </div>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Chat Server Configuration
PORT=3001
CORE_API_URL=http://localhost:3000

# WebSocket Settings
WS_PORT=3001
CORS_ORIGIN=http://localhost:3002`}</code>
        </pre>
        <CopyButton text={`# Chat Server Configuration
PORT=3001
CORE_API_URL=http://localhost:3000

# WebSocket Settings
WS_PORT=3001
CORS_ORIGIN=http://localhost:3002`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 3: Install Dependencies
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Install the required dependencies for each component:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Install VIMM Core dependencies
cd vimm-core
npm install

# Install VIMM Frontend dependencies
cd ../vimm-frontend
npm install

# Install VIMM Chat dependencies
cd ../vimm-chat
npm install`}</code>
        </pre>
        <CopyButton text={`# Install VIMM Core dependencies
cd vimm-core
npm install

# Install VIMM Frontend dependencies
cd ../vimm-frontend
npm install

# Install VIMM Chat dependencies
cd ../vimm-chat
npm install`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 4: Initialize Database
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Initialize the database for VIMM Core:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd vimm-core
npm run init-db`}</code>
        </pre>
        <CopyButton text={`cd vimm-core
npm run init-db`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 5: Start the Services
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Start each service in separate terminal windows. The order matters:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Terminal 1: Start VIMM Core
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd vimm-core
npm start`}</code>
        </pre>
        <CopyButton text={`cd vimm-core
npm start`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Terminal 2: Start VIMM Chat
      </h3>
      <div className="relative group mb-4">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd vimm-chat
npm start`}</code>
        </pre>
        <CopyButton text={`cd vimm-chat
npm start`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Terminal 3: Start VIMM Frontend
      </h3>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`cd vimm-frontend
npm start`}</code>
        </pre>
        <CopyButton text={`cd vimm-frontend
npm start`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Step 6: Verify Installation
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Check that all services are running correctly:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li><strong>VIMM Core</strong>: <a href="http://localhost:3000" className="text-vimm-orange hover:underline">http://localhost:3000</a> - Should show API status</li>
        <li><strong>VIMM Chat</strong>: <a href="http://localhost:3001" className="text-vimm-orange hover:underline">http://localhost:3001</a> - Should show chat server status</li>
        <li><strong>VIMM Frontend</strong>: <a href="http://localhost:3002" className="text-vimm-orange hover:underline">http://localhost:3002</a> - Should show the VIMM web interface</li>
      </ul>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          🎉 Success!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Your VIMM framework is now running! You can access the web interface at <strong>http://localhost:3002</strong> and start streaming.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Next Steps
      </h2>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li>Configure your streaming software (OBS, etc.) to stream to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">rtmp://localhost:1935/live/YOUR_STREAM_KEY</code></li>
        <li>Set up SSL certificates for production deployment</li>
        <li>Configure your Hive blockchain credentials for full integration</li>
        <li>Explore the configuration options for optimal performance</li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
          💡 Development Mode
        </h3>
        <p className="text-blue-600 dark:text-blue-300 mb-2">
          For development, you can use <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">npm run dev</code> instead of <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">npm start</code> for hot reloading.
        </p>
      </div>
    </div>
  )
}