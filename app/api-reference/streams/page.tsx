'use client'

import { CopyButton } from '../../components/copy-button'
import Link from 'next/link'

export default function StreamsAPIPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Streams API
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        List active streams, retrieve stream information, access thumbnails, and get stream statistics. 
        Most endpoints are public, while statistics require authentication.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Public Endpoints
      </h2>

      {/* GET /api/streams */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/streams</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          List all active streams with pagination and filtering options.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">page</code>
            <p className="text-gray-600 dark:text-gray-300">Page number for pagination (default: 1)</p>
          </div>
          <div className="flex items-start">
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">limit</code>
            <p className="text-gray-600 dark:text-gray-300">Number of streams per page (default: 20)</p>
          </div>
          <div className="flex items-start">
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">sortBy</code>
            <p className="text-gray-600 dark:text-gray-300">Sort field (viewerCount, startedAt, etc.)</p>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "streams": [
    {
      "id": "stream-123",
      "hiveAccount": "username",
      "title": "My Stream",
      "streamKey": "abc...def",
      "isLive": true,
      "viewerCount": 42,
      "startedAt": "2025-10-16T10:30:00Z",
      "thumbnailUrl": "/thumbnails/stream-123_current.jpg"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "pages": 1
  }
}`}</code>
          </pre>
          <CopyButton text={`{
  "streams": [
    {
      "id": "stream-123",
      "hiveAccount": "username",
      "title": "My Stream",
      "streamKey": "abc...def",
      "isLive": true,
      "viewerCount": 42,
      "startedAt": "2025-10-16T10:30:00Z",
      "thumbnailUrl": "/thumbnails/stream-123_current.jpg"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "pages": 1
  }
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example cURL</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`curl "http://localhost:3000/api/streams?page=1&limit=10"`}</code>
          </pre>
          <CopyButton text='curl "http://localhost:3000/api/streams?page=1&limit=10"' />
        </div>
      </div>

      {/* GET /api/streams/:username */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/streams/:username</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get information about a specific stream by Hive username.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">URL Parameters</h4>
        <div className="flex items-start mb-4">
          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">username</code>
          <p className="text-gray-600 dark:text-gray-300">Hive account username (case-insensitive)</p>
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "id": "stream-123",
  "hiveAccount": "username",
  "title": "My Gaming Stream",
  "description": "Playing some awesome games!",
  "streamKey": "abc...def",
  "isLive": true,
  "viewerCount": 42,
  "startedAt": "2025-10-16T10:30:00Z",
  "thumbnailUrl": "/thumbnails/stream-123_current.jpg",
  "hlsPlaylistUrl": "/hls/stream-123/playlist.m3u8"
}`}</code>
          </pre>
          <CopyButton text={`{
  "id": "stream-123",
  "hiveAccount": "username",
  "title": "My Gaming Stream",
  "description": "Playing some awesome games!",
  "streamKey": "abc...def",
  "isLive": true,
  "viewerCount": 42,
  "startedAt": "2025-10-16T10:30:00Z",
  "thumbnailUrl": "/thumbnails/stream-123_current.jpg",
  "hlsPlaylistUrl": "/hls/stream-123/playlist.m3u8"
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (404 Not Found)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`{
  "error": "Stream not found"
}`}</code>
          </pre>
          <CopyButton text={`{
  "error": "Stream not found"
}`} />
        </div>
      </div>

      {/* GET /api/streams/:streamId/thumbnail */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/streams/:streamId/thumbnail</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get thumbnail information for a stream. Thumbnails are auto-generated every 5 minutes for active streams.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">❌ No (Public endpoint)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">URL Parameters</h4>
        <div className="flex items-start mb-4">
          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">streamId</code>
          <p className="text-gray-600 dark:text-gray-300">Unique stream identifier</p>
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "streamId": "stream-123",
  "thumbnailUrl": "/thumbnails/stream-123_current.jpg",
  "generatedAt": "2025-10-16T10:35:00Z"
}`}</code>
          </pre>
          <CopyButton text={`{
  "streamId": "stream-123",
  "thumbnailUrl": "/thumbnails/stream-123_current.jpg",
  "generatedAt": "2025-10-16T10:35:00Z"
}`} />
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-blue-600 dark:text-blue-300 text-sm">
            <strong>Note:</strong> Thumbnails are stored in <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">media/thumbnails/</code> 
            and served via the static <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">/thumbnails/</code> route. 
            Configure resolution and quality in <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">config/default.js</code>.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Authenticated Endpoints
      </h2>

      {/* GET /api/streams/stats/:username */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/streams/stats/:username</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get comprehensive dashboard statistics for a stream. Includes current/peak viewers, watch time, chat metrics, and follower count.
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

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">URL Parameters</h4>
        <div className="flex items-start mb-4">
          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">username</code>
          <p className="text-gray-600 dark:text-gray-300">Hive account username (must be authenticated user or public stats)</p>
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "currentViewers": 42,
  "peakViewers": 87,
  "totalWatchTime": 3600, // seconds
  "averageWatchTime": 1200, // seconds
  "chatMessages": 256,
  "chatRate": 4.2, // messages per minute
  "followerCount": 523,
  "newFollowers": 12, // this session
  "streamDuration": 7200 // seconds
}`}</code>
          </pre>
          <CopyButton text={`{
  "currentViewers": 42,
  "peakViewers": 87,
  "totalWatchTime": 3600,
  "averageWatchTime": 1200,
  "chatMessages": 256,
  "chatRate": 4.2,
  "followerCount": 523,
  "newFollowers": 12,
  "streamDuration": 7200
}`} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example cURL</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{`curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  http://localhost:3000/api/streams/stats/username`}</code>
          </pre>
          <CopyButton text={`curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  http://localhost:3000/api/streams/stats/username`} />
        </div>
      </div>

      {/* GET /api/streams/followers/growth/:username */}
      <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm mr-3">GET</span>
          <code className="text-lg font-mono">/api/streams/followers/growth/:username</code>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get follower growth data over time. Requires daily snapshots via cron job.
        </p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Authentication Required</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">✅ Yes (Requires JWT token)</p>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Query Parameters</h4>
        <div className="flex items-start mb-4">
          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm mr-3 whitespace-nowrap">days</code>
          <p className="text-gray-600 dark:text-gray-300">Number of days to retrieve (default: 30)</p>
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response (200 OK)</h4>
        <div className="relative group">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code>{`{
  "growth": [
    {
      "date": "2025-10-16",
      "followerCount": 523,
      "change": 12
    },
    {
      "date": "2025-10-15",
      "followerCount": 511,
      "change": -3
    }
  ]
}`}</code>
          </pre>
          <CopyButton text={`{
  "growth": [
    {
      "date": "2025-10-16",
      "followerCount": 523,
      "change": 12
    },
    {
      "date": "2025-10-15",
      "followerCount": 511,
      "change": -3
    }
  ]
}`} />
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-yellow-600 dark:text-yellow-300 text-sm">
            <strong>Requires:</strong> Daily cron job running <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">node scripts/snapshot-follower-growth.js</code> 
            to populate historical data.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Viewer Tracking
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Viewer counts are tracked automatically via HLS segment requests:
      </p>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
        <li>Unique viewers identified per stream session</li>
        <li>Activity timeout: 30 seconds (viewer removed if no activity)</li>
        <li>Updates <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">viewerCount</code> field in StreamKey model</li>
        <li>Memory-efficient with automatic cleanup</li>
      </ul>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          💡 Next Steps
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Learn about <Link href="/api-reference/hls" className="underline">HLS Encryption</Link> to secure stream playback, 
          or explore <Link href="/api-reference/dashboard" className="underline">Dashboard Analytics</Link> for advanced metrics.
        </p>
      </div>
    </div>
  )
}
