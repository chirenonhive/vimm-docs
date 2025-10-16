'use client'

import Link from 'next/link'

export default function APIReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        API Reference
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Complete reference for VIMM Core v1.0.0 REST API endpoints. All endpoints follow RESTful conventions 
        and return JSON responses.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
          🔗 Base URL
        </h3>
        <p className="text-blue-600 dark:text-blue-300 font-mono">
          http://localhost:3000
        </p>
        <p className="text-blue-600 dark:text-blue-300 text-sm mt-2">
          Replace with your server's URL in production. All API endpoints are prefixed with <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">/api</code>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        API Categories
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Link href="/api-reference/authentication" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🔐 Authentication
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Hive Keychain authentication with JWT tokens. Challenge-response flow for secure login.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• GET /api/auth/challenge</li>
              <li>• POST /api/auth/hive</li>
              <li>• POST /api/auth/verify</li>
              <li>• POST /api/auth/stream-key</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/streams" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              📺 Streams
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              List and retrieve stream information, thumbnails, and statistics.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• GET /api/streams</li>
              <li>• GET /api/streams/:username</li>
              <li>• GET /api/streams/:streamId/thumbnail</li>
              <li>• GET /api/streams/stats/:username</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/channels" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              📡 Channels
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Follow/unfollow channels and manage channel settings. Requires authentication.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• POST /api/channels/follow</li>
              <li>• DELETE /api/channels/unfollow</li>
              <li>• GET /api/channels/my-channel</li>
              <li>• PUT /api/channels/my-channel</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/user" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              👤 User
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              User profile and followed channels. Requires authentication.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• GET /api/user/followed-channels</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/chat" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              💬 Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Chat configuration and moderation. Banned users require auth.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• GET /api/chat/stream/:hiveAccount</li>
              <li>• POST /api/chat/stream/:hiveAccount</li>
              <li>• GET /api/chat/banned/:username</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/hls" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🔒 HLS Encryption
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Token-based HLS stream access with AES-128 encryption.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• POST /api/hls/token/:streamId</li>
              <li>• GET /api/hls/key/:streamId</li>
            </ul>
          </div>
        </Link>

        <Link href="/api-reference/dashboard" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-vimm-orange transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              📊 Dashboard Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Stream statistics and follower growth data. Requires authentication.
            </p>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
              <li>• GET /api/streams/stats/:username</li>
              <li>• GET /api/streams/followers/growth/:username</li>
            </ul>
          </div>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Authentication
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Most endpoints require JWT authentication. Include the token in the Authorization header:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <pre className="text-sm text-gray-700 dark:text-gray-300">
{`Authorization: Bearer <your-jwt-token>`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        HTTP Status Codes
      </h2>
      <div className="space-y-2 mb-8">
        <div className="flex items-start">
          <code className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">200</code>
          <p className="text-gray-600 dark:text-gray-300">Success - Request completed successfully</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">400</code>
          <p className="text-gray-600 dark:text-gray-300">Bad Request - Invalid parameters or request body</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">401</code>
          <p className="text-gray-600 dark:text-gray-300">Unauthorized - Missing or invalid authentication token</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">403</code>
          <p className="text-gray-600 dark:text-gray-300">Forbidden - Insufficient permissions for this resource</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">404</code>
          <p className="text-gray-600 dark:text-gray-300">Not Found - Resource does not exist</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">409</code>
          <p className="text-gray-600 dark:text-gray-300">Conflict - Duplicate resource or conflicting state</p>
        </div>
        <div className="flex items-start">
          <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">500</code>
          <p className="text-gray-600 dark:text-gray-300">Internal Server Error - Server-side error occurred</p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          💡 Getting Started
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Start with the <Link href="/api-reference/authentication" className="underline">Authentication API</Link> to understand 
          how to obtain JWT tokens for accessing protected endpoints.
        </p>
      </div>
    </div>
  )
}
