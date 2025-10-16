'use client'

import { CopyButton } from '../../components/copy-button'
import Link from 'next/link'

export default function FrontendIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        vimm-frontend Integration Guide
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Learn how vimm-frontend connects to vimm-core APIs, implements Hive Keychain authentication, 
        and integrates with vimm-chat for a complete streaming platform experience.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
          📋 Overview
        </h3>
        <p className="text-blue-600 dark:text-blue-300">
          vimm-frontend is a React 19 reference implementation that demonstrates best practices for 
          building a streaming platform using VIMM Core (streaming server) and VIMM Chat (real-time chat). 
          It can be customized or used as a foundation for your own platform.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Configuration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Configure the frontend to connect to your vimm-core and vimm-chat servers:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`# .env file in vimm-frontend directory

# VIMM Core API Base URL
REACT_APP_VIMM_CORE_SERVER=http://localhost:3000

# VIMM Chat Server URL
REACT_APP_VIMM_CHAT_SERVER=http://localhost:3001

# Optional: Override default port
PORT=3002`}</code>
        </pre>
        <CopyButton text={`REACT_APP_VIMM_CORE_SERVER=http://localhost:3000
REACT_APP_VIMM_CHAT_SERVER=http://localhost:3001
PORT=3002`} />
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
          ⚠️ CORS Configuration
        </h4>
        <p className="text-yellow-600 dark:text-yellow-300">
          vimm-core has CORS enabled by default. For production, configure proper origin restrictions 
          in vimm-core to only allow requests from your frontend domain.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Authentication Flow
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        vimm-frontend implements the complete Hive Keychain authentication flow:
      </p>
      
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-3">
          <li>
            <strong>User Initiates Login:</strong> User clicks "Login with Hive" in Navbar component
          </li>
          <li>
            <strong>Request Challenge:</strong> Frontend calls <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/auth/challenge</code>
          </li>
          <li>
            <strong>Sign Challenge:</strong> Hive Keychain browser extension prompts user to sign the challenge
          </li>
          <li>
            <strong>Submit Signature:</strong> Frontend sends <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/hive</code> with username, signature, and challenge
          </li>
          <li>
            <strong>Receive JWT:</strong> vimm-core validates signature and returns JWT token (7-day expiry)
          </li>
          <li>
            <strong>Store Token:</strong> Token stored in AuthContext and localStorage
          </li>
          <li>
            <strong>Authenticated Requests:</strong> Token included in Authorization header for all API requests
          </li>
          <li>
            <strong>Handle Expiry:</strong> On 401/403 response, trigger re-authentication flow
          </li>
        </ol>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Example Implementation
      </h3>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// src/services/hiveAuth.js
const API_BASE = process.env.REACT_APP_VIMM_CORE_SERVER;

export async function authenticateWithHive(username) {
  // 1. Get challenge
  const challengeRes = await fetch(\`\${API_BASE}/api/auth/challenge\`);
  const { challenge } = await challengeRes.json();

  // 2. Sign with Hive Keychain
  return new Promise((resolve, reject) => {
    window.hive_keychain.requestSignBuffer(
      username,
      challenge,
      'Posting',
      async (response) => {
        if (response.success) {
          // 3. Submit signature
          const authRes = await fetch(\`\${API_BASE}/api/auth/hive\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username,
              signature: response.result,
              challenge
            })
          });
          
          const { token } = await authRes.json();
          
          // 4. Store token
          localStorage.setItem('jwt_token', token);
          resolve(token);
        } else {
          reject(new Error('Keychain signature failed'));
        }
      }
    );
  });
}`}</code>
        </pre>
        <CopyButton text={`const API_BASE = process.env.REACT_APP_VIMM_CORE_SERVER;

export async function authenticateWithHive(username) {
  const challengeRes = await fetch(\`\${API_BASE}/api/auth/challenge\`);
  const { challenge } = await challengeRes.json();

  return new Promise((resolve, reject) => {
    window.hive_keychain.requestSignBuffer(
      username,
      challenge,
      'Posting',
      async (response) => {
        if (response.success) {
          const authRes = await fetch(\`\${API_BASE}/api/auth/hive\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username,
              signature: response.result,
              challenge
            })
          });
          
          const { token } = await authRes.json();
          localStorage.setItem('jwt_token', token);
          resolve(token);
        } else {
          reject(new Error('Keychain signature failed'));
        }
      }
    );
  });
}`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Required API Endpoints
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        vimm-frontend depends on these vimm-core endpoints:
      </p>

      <div className="space-y-4 mb-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔐 Authentication</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/auth/challenge</code> - Get challenge for signing</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/hive</code> - Submit signature, receive JWT</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/auth/verify</code> - Verify token validity</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📺 Stream Browsing</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams</code> - List active streams (browse page)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/:username</code> - Get specific stream info</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/:streamId/thumbnail</code> - Get thumbnail</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎬 Player Integration</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/hls/token/:streamId</code> - Generate HLS access token</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/hls/key/:streamId?token=X</code> - Get encryption key (called by player)</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Dashboard Analytics</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/stats/:username</code> - Stream statistics (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/streams/followers/growth/:username</code> - Follower growth (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/chat/banned/:username</code> - List banned users (auth required)</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📡 Channel Management</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/channels/follow</code> - Follow channel (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">DELETE /api/channels/unfollow</code> - Unfollow channel (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/user/followed-channels</code> - Get followed channels (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/channels/my-channel</code> - Get own channel info (auth required)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">PUT /api/channels/my-channel</code> - Update channel settings (auth required)</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💬 Chat Configuration</h4>
          <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">GET /api/chat/stream/:hiveAccount</code> - Get chat config (public)</li>
            <li>• <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">POST /api/chat/stream/:hiveAccount</code> - Update chat config (auth required)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Service Layer Pattern
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        vimm-frontend uses singleton services to centralize API interactions:
      </p>
      
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// src/services/streamService.js
const API_BASE = process.env.REACT_APP_VIMM_CORE_SERVER;

class StreamService {
  async getActiveStreams(page = 1, limit = 20) {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(
      \`\${API_BASE}/api/streams?page=\${page}&limit=\${limit}\`,
      {
        headers: token ? { 'Authorization': \`Bearer \${token}\` } : {}
      }
    );
    return response.json();
  }

  async getStreamByUsername(username) {
    const response = await fetch(\`\${API_BASE}/api/streams/\${username}\`);
    if (!response.ok) throw new Error('Stream not found');
    return response.json();
  }

  async getHLSToken(streamId) {
    const response = await fetch(
      \`\${API_BASE}/api/hls/token/\${streamId}\`,
      { method: 'POST' }
    );
    const { token } = await response.json();
    return token;
  }
}

export default new StreamService();`}</code>
        </pre>
        <CopyButton text={`const API_BASE = process.env.REACT_APP_VIMM_CORE_SERVER;

class StreamService {
  async getActiveStreams(page = 1, limit = 20) {
    const token = localStorage.getItem('jwt_token');
    const response = await fetch(
      \`\${API_BASE}/api/streams?page=\${page}&limit=\${limit}\`,
      {
        headers: token ? { 'Authorization': \`Bearer \${token}\` } : {}
      }
    );
    return response.json();
  }

  async getStreamByUsername(username) {
    const response = await fetch(\`\${API_BASE}/api/streams/\${username}\`);
    if (!response.ok) throw new Error('Stream not found');
    return response.json();
  }

  async getHLSToken(streamId) {
    const response = await fetch(
      \`\${API_BASE}/api/hls/token/\${streamId}\`,
      { method: 'POST' }
    );
    const { token } = await response.json();
    return token;
  }
}

export default new StreamService();`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Component Integration Examples
      </h2>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        1. WatchPage - Stream Player
      </h3>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// WatchPage loads stream info and HLS token
import streamService from '../services/streamService';
import Hls from 'hls.js';

function WatchPage({ username }) {
  useEffect(() => {
    async function loadStream() {
      // Get stream info
      const stream = await streamService.getStreamByUsername(username);
      
      // Get HLS access token
      const hlsToken = await streamService.getHLSToken(stream.id);
      
      // Initialize HLS player with token
      const hls = new Hls();
      const playlistUrl = \`\${API_BASE}/hls/\${stream.id}/playlist.m3u8?token=\${hlsToken}\`;
      hls.loadSource(playlistUrl);
      hls.attachMedia(videoRef.current);
    }
    
    loadStream();
  }, [username]);
  
  return <video ref={videoRef} controls />;
}`}</code>
        </pre>
        <CopyButton text={`import streamService from '../services/streamService';
import Hls from 'hls.js';

function WatchPage({ username }) {
  useEffect(() => {
    async function loadStream() {
      const stream = await streamService.getStreamByUsername(username);
      const hlsToken = await streamService.getHLSToken(stream.id);
      
      const hls = new Hls();
      const playlistUrl = \`\${API_BASE}/hls/\${stream.id}/playlist.m3u8?token=\${hlsToken}\`;
      hls.loadSource(playlistUrl);
      hls.attachMedia(videoRef.current);
    }
    
    loadStream();
  }, [username]);
  
  return <video ref={videoRef} controls />;
}`} />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        2. Dashboard - Stream Statistics
      </h3>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`// Dashboard fetches authenticated stats
import dashboardService from '../services/dashboardService';

function StreamerDashboard() {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    async function loadStats() {
      const token = localStorage.getItem('jwt_token');
      const username = getCurrentUsername(); // from AuthContext
      
      const data = await dashboardService.getStreamStats(username, token);
      setStats(data);
    }
    
    loadStats();
    const interval = setInterval(loadStats, 5000); // Refresh every 5s
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h2>Current Viewers: {stats?.currentViewers}</h2>
      <h2>Peak Viewers: {stats?.peakViewers}</h2>
      <h2>Total Watch Time: {stats?.totalWatchTime}s</h2>
    </div>
  );
}`}</code>
        </pre>
        <CopyButton text={`import dashboardService from '../services/dashboardService';

function StreamerDashboard() {
  const [stats, setStats] = useState(null);
  
  useEffect(() => {
    async function loadStats() {
      const token = localStorage.getItem('jwt_token');
      const username = getCurrentUsername();
      
      const data = await dashboardService.getStreamStats(username, token);
      setStats(data);
    }
    
    loadStats();
    const interval = setInterval(loadStats, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h2>Current Viewers: {stats?.currentViewers}</h2>
      <h2>Peak Viewers: {stats?.peakViewers}</h2>
      <h2>Total Watch Time: {stats?.totalWatchTime}s</h2>
    </div>
  );
}`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Chat Integration
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        vimm-frontend connects to vimm-chat via Socket.IO for real-time messaging:
      </p>
      <div className="relative group mb-6">
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import io from 'socket.io-client';

const CHAT_SERVER = process.env.REACT_APP_VIMM_CHAT_SERVER;

function ChatComponent({ streamUsername }) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const newSocket = io(CHAT_SERVER);
    
    // Join stream's chat room
    newSocket.emit('join', { room: streamUsername });
    
    // Listen for messages
    newSocket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });
    
    setSocket(newSocket);
    
    return () => newSocket.close();
  }, [streamUsername]);
  
  const sendMessage = (text) => {
    socket.emit('chat_message', {
      room: streamUsername,
      message: text,
      username: getCurrentUsername(),
      token: localStorage.getItem('jwt_token')
    });
  };
  
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.username}: {msg.text}</div>
      ))}
      <input onSubmit={e => sendMessage(e.target.value)} />
    </div>
  );
}`}</code>
        </pre>
        <CopyButton text={`import io from 'socket.io-client';

const CHAT_SERVER = process.env.REACT_APP_VIMM_CHAT_SERVER;

function ChatComponent({ streamUsername }) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const newSocket = io(CHAT_SERVER);
    newSocket.emit('join', { room: streamUsername });
    
    newSocket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });
    
    setSocket(newSocket);
    return () => newSocket.close();
  }, [streamUsername]);
  
  const sendMessage = (text) => {
    socket.emit('chat_message', {
      room: streamUsername,
      message: text,
      username: getCurrentUsername(),
      token: localStorage.getItem('jwt_token')
    });
  };
  
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.username}: {msg.text}</div>
      ))}
      <input onSubmit={e => sendMessage(e.target.value)} />
    </div>
  );
}`} />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Prerequisites
      </h2>
      <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
        <li>vimm-core server must be running and accessible</li>
        <li>vimm-chat server must be running and accessible</li>
        <li>Hive Keychain browser extension must be installed</li>
        <li>CORS properly configured on both servers</li>
        <li>Environment variables correctly set in frontend .env file</li>
      </ul>

      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
          💡 Next Steps
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Explore the complete <Link href="/api-reference" className="underline">API Reference</Link> to understand 
          all available endpoints, or review <Link href="/server-components/frontend" className="underline">VIMM Frontend</Link> documentation 
          for architecture and component details.
        </p>
      </div>
    </div>
  )
}
