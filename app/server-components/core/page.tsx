'use client'

import { CopyButton } from '../../components/copy-button'

export default function CoreComponentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        VIMM Core
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        The streaming server and backbone of the VIMM framework. VIMM Core handles RTMP ingestion, 
        media processing, blockchain integration, and provides the API for all platform operations.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Overview
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        VIMM Core is the central component that orchestrates all streaming operations. It acts as the 
        bridge between streamers, viewers, and the Hive blockchain, ensuring decentralized and 
        censorship-resistant streaming experiences.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Key Features
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🎥 RTMP Server
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Built-in RTMP server for receiving live streams from OBS, XSplit, and other broadcasting software.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🔄 Media Processing
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Real-time transcoding and adaptive bitrate streaming using FFmpeg for optimal viewing experiences.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            ⛓️ Hive Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Direct integration with Hive blockchain for user authentication, rewards, and decentralized data storage.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            📊 Analytics Engine
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive analytics for stream performance, viewer engagement, and revenue tracking.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Architecture
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Core is built with Node.js and follows a modular architecture:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <pre className="text-sm text-gray-700 dark:text-gray-300">
{`┌─────────────────────────────────────────┐
│              VIMM Core                  │
├─────────────────────────────────────────┤
│  RTMP Server  │  API Server  │  WebRTC  │
├─────────────────────────────────────────┤
│       Media Processing Engine           │
├─────────────────────────────────────────┤
│  Database  │  Blockchain  │  Storage    │
└─────────────────────────────────────────┘`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Core Modules
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        RTMP Ingestion Module
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Handles incoming RTMP streams from broadcasting software:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Stream authentication and authorization</li>
        <li>Real-time stream validation</li>
        <li>Automatic stream key generation</li>
        <li>Stream health monitoring</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Media Processing Pipeline
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Advanced media processing capabilities:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Multi-bitrate transcoding (720p, 1080p, 4K)</li>
        <li>HLS and DASH streaming protocols</li>
        <li>GPU-accelerated encoding (NVIDIA, AMD)</li>
        <li>Automatic recording and VOD generation</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Blockchain Integration
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Deep integration with Hive blockchain:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>User authentication via Hive accounts</li>
        <li>Automatic reward distribution</li>
        <li>Decentralized metadata storage</li>
        <li>Smart contract interactions</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Key configuration options for VIMM Core:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Server Configuration
PORT=3000
HOST=0.0.0.0
NODE_ENV=production

# RTMP Configuration
RTMP_PORT=1935
RTMP_CHUNK_SIZE=4096
RTMP_GOP_CACHE=true

# Media Processing
TRANSCODE_ENABLED=true
RECORDING_ENABLED=true
GPU_ACCELERATION=true
BITRATES=720,1080,1440

# Database
DB_TYPE=sqlite
DB_PATH=./data/vimm.db

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
HIVE_ACCOUNT=your-account
HIVE_POSTING_KEY=your-key

# Storage
STREAM_DIR=./streams
RECORDING_DIR=./recordings
TEMP_DIR=./temp`}</code>
        </pre>
        <CopyButton text={`# Server Configuration
PORT=3000
HOST=0.0.0.0
NODE_ENV=production

# RTMP Configuration
RTMP_PORT=1935
RTMP_CHUNK_SIZE=4096
RTMP_GOP_CACHE=true

# Media Processing
TRANSCODE_ENABLED=true
RECORDING_ENABLED=true
GPU_ACCELERATION=true
BITRATES=720,1080,1440

# Database
DB_TYPE=sqlite
DB_PATH=./data/vimm.db

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
HIVE_ACCOUNT=your-account
HIVE_POSTING_KEY=your-key

# Storage
STREAM_DIR=./streams
RECORDING_DIR=./recordings
TEMP_DIR=./temp`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        API Endpoints
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Core v1.0.0 exposes a REST API for authentication, streaming, and channel management. 
        For complete API documentation, see the <a href="/api-reference" className="text-vimm-orange hover:underline">API Reference</a> section.
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/auth/challenge</code> - Get challenge for signing</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/hive</code> - Submit signature, receive JWT</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/verify</code> - Verify token validity</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/stream-key</code> - Generate streaming key</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Streams</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams</code> - List active streams</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/:username</code> - Get stream info</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/:streamId/thumbnail</code> - Get thumbnail</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/stats/:username</code> - Dashboard stats (auth)</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/followers/growth/:username</code> - Follower growth (auth)</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Channels & User</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/channels/follow</code> - Follow channel (auth)</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">DELETE /api/channels/unfollow</code> - Unfollow channel (auth)</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/user/followed-channels</code> - Get followed channels (auth)</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Chat & HLS</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/chat/stream/:hiveAccount</code> - Get chat config</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/chat/stream/:hiveAccount</code> - Update chat config (auth)</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/hls/token/:streamId</code> - Generate HLS access token</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/hls/key/:streamId</code> - Get encryption key (with token)</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Performance Optimization
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Tips for optimizing VIMM Core performance:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li><strong>Hardware acceleration</strong>: Use GPU encoding for better performance</li>
        <li><strong>Load balancing</strong>: Distribute streams across multiple servers</li>
        <li><strong>CDN integration</strong>: Use CDN for global content delivery</li>
        <li><strong>Database optimization</strong>: Use PostgreSQL for production workloads</li>
        <li><strong>Caching</strong>: Implement Redis for session and data caching</li>
      </ul>

      <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400 mb-2">
          🚀 Production Ready
        </h3>
        <p className="text-orange-600 dark:text-orange-300">
          VIMM Core is designed for production deployment with support for clustering, 
          load balancing, and high availability configurations.
        </p>
      </div>
    </div>
  )
}