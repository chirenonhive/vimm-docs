'use client'

import { CopyButton } from '../../components/copy-button'
import Link from 'next/link'

export default function AuthenticationAPIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Authentication API
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        VIMM Core uses Hive Keychain for decentralized authentication with JWT tokens (7-day expiry). 
        The challenge-response flow ensures secure authentication without exposing private keys.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
          🔑 Authentication Flow
        </h3>
        <ol className="text-blue-600 dark:text-blue-300 space-y-1 list-decimal pl-5">
          <li>Request challenge from server</li>
          <li>Sign challenge with Hive Keychain (browser extension required)</li>
          <li>Submit username, signature, and challenge to server</li>
          <li>Receive JWT token (valid for 7 days)</li>
          <li>Include token in Authorization header for protected endpoints</li>
          <li>Re-authenticate when token expires (401/403 response)</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Endpoints
      </h2>

      {/* GET /api/auth/challenge */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/auth/challenge</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Request a challenge string for authentication. The challenge expires after 5 minutes.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "challenge": "8f7a2b4e1c9d3f6a5e7b2c4d1a3e5f7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9"
}`}</code>
          </pre>
          <CopyButton text={`{
  "challenge": "8f7a2b4e1c9d3f6a5e7b2c4d1a3e5f7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9"
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example cURL</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`curl http://localhost:3000/api/auth/challenge`}</code>
          </pre>
          <CopyButton text="curl http://localhost:3000/api/auth/challenge" />
        </div>
      </div>

      {/* POST /api/auth/hive */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded font-mono text-sm mr-3">POST</span>
          <code className="text-lg font-mono">/api/auth/hive</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Submit signed challenge to receive JWT token. Use Hive Keychain to sign the challenge.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "username": "your-hive-username",
  "signature": "1f8a...", // Signature from Hive Keychain
  "challenge": "8f7a..." // Challenge from previous request
}`}</code>
          </pre>
          <CopyButton text={`{
  "username": "your-hive-username",
  "signature": "1f8a...",
  "challenge": "8f7a..."
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "your-hive-username"
}`}</code>
          </pre>
          <CopyButton text={`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "your-hive-username"
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">JavaScript Example (with Hive Keychain)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`// 1. Get challenge
const challengeRes = await fetch('http://localhost:3000/api/auth/challenge');
const { challenge } = await challengeRes.json();

// 2. Sign with Hive Keychain
window.hive_keychain.requestSignBuffer(
  username,
  challenge,
  'Posting',
  (response) => {
    if (response.success) {
      // 3. Submit signature
      fetch('http://localhost:3000/api/auth/hive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          signature: response.result,
          challenge
        })
      })
      .then(res => res.json())
      .then(data => {
        // Store token
        localStorage.setItem('jwt_token', data.token);
      });
    }
  }
);`}</code>
          </pre>
          <CopyButton text={`const challengeRes = await fetch('http://localhost:3000/api/auth/challenge');
const { challenge } = await challengeRes.json();

window.hive_keychain.requestSignBuffer(
  username,
  challenge,
  'Posting',
  (response) => {
    if (response.success) {
      fetch('http://localhost:3000/api/auth/hive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          signature: response.result,
          challenge
        })
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('jwt_token', data.token);
      });
    }
  }
);`} />
        </div>
      </div>

      {/* POST /api/auth/verify */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded font-mono text-sm mr-3">POST</span>
          <code className="text-lg font-mono">/api/auth/verify</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Verify if a JWT token is still valid and not expired.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Body</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}</code>
          </pre>
          <CopyButton text={`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`{
  "valid": true,
  "username": "your-hive-username"
}`}</code>
          </pre>
          <CopyButton text={`{
  "valid": true,
  "username": "your-hive-username"
}`} />
        </div>
      </div>

      {/* POST /api/auth/stream-key */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded font-mono text-sm mr-3">POST</span>
          <code className="text-lg font-mono">/api/auth/stream-key</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Generate a streaming key for RTMP broadcasting. Uses Keychain-based authentication.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">✅ Yes (Requires JWT token)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Headers</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}</code>
          </pre>
          <CopyButton text="Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`{
  "streamKey": "abc123def456..."
}`}</code>
          </pre>
          <CopyButton text={`{
  "streamKey": "abc123def456..."
}`} />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Token Lifespan
      </h2>
      <div className="space-y-2 mb-8">
        <div className="flex items-start">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">JWT Token</span>
          <p className="text-gray-600 dark:text-gray-300">7 days (no auto-refresh, must re-authenticate after expiry)</p>
        </div>
        <div className="flex items-start">
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">Challenge</span>
          <p className="text-gray-600 dark:text-gray-300">5 minutes (expires if not used)</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Error Responses
      </h2>
      <div className="space-y-4 mb-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">400</code>
            <span className="font-semibold text-gray-900 dark:text-white">Bad Request</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Missing parameters or invalid signature format</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded mt-2 text-sm">{`{ "error": "Missing required fields" }`}</pre>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <code className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-3 py-1 rounded font-mono text-sm mr-3">401</code>
            <span className="font-semibold text-gray-900 dark:text-white">Unauthorized</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">Invalid signature, expired challenge, or missing token</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded mt-2 text-sm">{`{ "error": "Invalid signature" }`}</pre>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
          ⚠️ Prerequisites
        </h3>
        <ul className="text-yellow-600 dark:text-yellow-300 space-y-1">
          <li>• Users must have <a href="https://hive-keychain.com/" className="underline" target="_blank" rel="noopener noreferrer">Hive Keychain</a> browser extension installed</li>
          <li>• JWT_SECRET must be configured in server environment variables</li>
          <li>• Challenges expire after 5 minutes - request new one if expired</li>
          <li>• Store JWT tokens securely (localStorage or httpOnly cookies)</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          💡 Next Steps
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Once authenticated, explore the <Link href="/api-reference/streams" className="underline">Streams API</Link> to 
          list active streams or the <Link href="/api-reference/channels" className="underline">Channels API</Link> to 
          manage follows and channel settings.
        </p>
      </div>
    </div>
  )
}
