'use client'

import { CopyButton } from '../../components/copy-button'

export default function ChatComponentPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        VIMM Chat
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Real-time chat server powering interactive communication between streamers and viewers. 
        Built with WebSocket technology and integrated with Hive blockchain for decentralized moderation.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Overview
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        VIMM Chat provides the real-time communication layer that makes streaming interactive. 
        It handles chat messages, user interactions, moderation, and integrates seamlessly with 
        the Hive blockchain for decentralized user management and rewards.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Key Features
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            💬 Real-time Messaging
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            High-performance WebSocket server supporting thousands of concurrent chat participants.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🛡️ Smart Moderation
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            AI-powered moderation with spam detection, content filtering, and automated responses.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🎭 Custom Emotes
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Support for custom emotes, badges, and channel-specific chat features.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            🏆 Rewards Integration
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Integrated tipping system with Hive tokens and automatic reward distribution.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Architecture
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Chat is built with Socket.IO and Node.js for maximum performance:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <pre className="text-sm text-gray-700 dark:text-gray-300">
{`┌─────────────────────────────────────────┐
│              VIMM Chat                  │
├─────────────────────────────────────────┤
│  WebSocket  │   REST API   │  Admin UI  │
├─────────────────────────────────────────┤
│  Message Queue │ Moderation │ Analytics │
├─────────────────────────────────────────┤
│   Redis Cache  │  Database  │  Storage  │
└─────────────────────────────────────────┘`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Core Features
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Real-time Communication
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Advanced messaging capabilities:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Instant message delivery with sub-second latency</li>
        <li>Message history and persistence</li>
        <li>User presence and typing indicators</li>
        <li>Private messaging and whispers</li>
        <li>Chat rooms and channel organization</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Moderation System
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Comprehensive moderation tools:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Automated spam and toxicity detection</li>
        <li>Customizable word filters and blacklists</li>
        <li>User timeout and ban management</li>
        <li>Moderator role permissions</li>
        <li>Appeal system for banned users</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Interactive Features
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Engagement tools for streamers:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Custom commands and chat bots</li>
        <li>Polls and voting systems</li>
        <li>Subscriber-only mode</li>
        <li>Slow mode and follower-only chat</li>
        <li>Chat overlays for streaming software</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Key configuration options for VIMM Chat:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# Server Configuration
PORT=3001
HOST=0.0.0.0
NODE_ENV=production

# WebSocket Configuration
WS_PORT=3001
WS_PATH=/socket.io
CORS_ORIGIN=http://localhost:3002

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# Database
DB_TYPE=sqlite
DB_PATH=./data/chat.db

# Core API Integration
CORE_API_URL=http://localhost:3000
CORE_API_KEY=your-api-key

# Moderation
AUTO_MODERATION=true
SPAM_THRESHOLD=5
TOXICITY_THRESHOLD=0.7

# Rate Limiting
MESSAGE_RATE_LIMIT=10
MESSAGE_RATE_WINDOW=60

# Features
EMOTES_ENABLED=true
PRIVATE_MESSAGES=true
CHAT_HISTORY_DAYS=30`}</code>
        </pre>
        <CopyButton text={`# Server Configuration
PORT=3001
HOST=0.0.0.0
NODE_ENV=production

# WebSocket Configuration
WS_PORT=3001
WS_PATH=/socket.io
CORS_ORIGIN=http://localhost:3002

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# Database
DB_TYPE=sqlite
DB_PATH=./data/chat.db

# Core API Integration
CORE_API_URL=http://localhost:3000
CORE_API_KEY=your-api-key

# Moderation
AUTO_MODERATION=true
SPAM_THRESHOLD=5
TOXICITY_THRESHOLD=0.7

# Rate Limiting
MESSAGE_RATE_LIMIT=10
MESSAGE_RATE_WINDOW=60

# Features
EMOTES_ENABLED=true
PRIVATE_MESSAGES=true
CHAT_HISTORY_DAYS=30`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        WebSocket Events
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        VIMM Chat uses Socket.IO for real-time communication:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Client → Server Events</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">message</code> - Send chat message</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">join-room</code> - Join chat room</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">leave-room</code> - Leave chat room</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">typing</code> - Typing indicator</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Server → Client Events</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">message</code> - Receive chat message</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">user-joined</code> - User joined room</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">user-left</code> - User left room</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">moderation</code> - Moderation action</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Admin Events</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">ban-user</code> - Ban user from chat</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">timeout-user</code> - Timeout user</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">clear-chat</code> - Clear chat history</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">set-mode</code> - Set chat mode</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Chat Commands
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Built-in chat commands for users and moderators:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Commands</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/help</code> - Show available commands</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/w @user message</code> - Send whisper</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/tip @user amount</code> - Send tip</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/emotes</code> - Show available emotes</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Moderator Commands</h4>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/ban @user</code> - Ban user</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/timeout @user 300</code> - Timeout user</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/clear</code> - Clear chat</div>
            <div><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/slow 30</code> - Enable slow mode</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Scaling Considerations
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Tips for scaling VIMM Chat for high-traffic streams:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
        <li><strong>Redis clustering</strong>: Use Redis Cluster for horizontal scaling</li>
        <li><strong>Load balancing</strong>: Distribute connections across multiple chat servers</li>
        <li><strong>Message queuing</strong>: Use RabbitMQ or Apache Kafka for message processing</li>
        <li><strong>Database sharding</strong>: Shard chat history by channel or time</li>
        <li><strong>CDN integration</strong>: Serve static assets (emotes, images) via CDN</li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
          💡 Performance Tips
        </h3>
        <p className="text-blue-600 dark:text-blue-300">
          VIMM Chat can handle thousands of concurrent users per server instance. 
          For large-scale deployments, consider implementing horizontal scaling with 
          Redis pub/sub and load balancers.
        </p>
      </div>
    </div>
  )
}