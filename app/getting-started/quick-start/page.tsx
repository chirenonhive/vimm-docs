import { CodeBlock } from '../../components/code-block'
import { Callout } from '../../components/callout'
import { SocialShare } from '../../components/social-share'
import { FAQ } from '../../components/faq'

export default function QuickStartPage() {
  const faqItems = [
    {
      question: "What operating systems are supported?",
      answer: "VIMM supports Linux (Ubuntu 20.04+), macOS, and Windows with WSL2. For production deployments, we recommend Ubuntu 22.04 LTS."
    },
    {
      question: "Can I use VIMM without GPU acceleration?",
      answer: "Yes, VIMM works without GPU acceleration, but hardware acceleration significantly improves performance for encoding and transcoding streams."
    },
    {
      question: "How much bandwidth do I need?",
      answer: "Bandwidth requirements depend on your streaming needs. For basic streaming, 10 Mbps upload is sufficient. For high-quality streams or multiple streams, consider 50+ Mbps."
    },
    {
      question: "Is VIMM suitable for production use?",
      answer: "Yes, VIMM is production-ready with features like horizontal scaling, load balancing, SSL/TLS support, and comprehensive monitoring tools."
    }
  ]

  return (
    <div className="max-w-none">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Start Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.
          </p>
        </div>
        <SocialShare 
          title="VIMM Framework Quick Start Guide"
          description="Learn how to deploy and configure the VIMM streaming framework in under 30 minutes"
        />
      </div>

      <Callout type="tip" title="Pro Tip">
        This guide focuses on a single-server deployment for development and testing. 
        For production deployments, check out our <a href="/deployment/production" className="underline">Production Setup Guide</a>.
      </Callout>

      <h2 id="prerequisites">Prerequisites</h2>
      <p>
        Before starting, ensure you have the following installed on your system:
      </p>

      <h3 id="required-software">Required Software</h3>
      <ul>
        <li><strong>Node.js 18+</strong> - <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Download here</a></li>
        <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
        <li><strong>Git</strong> for cloning repositories</li>
        <li><strong>FFmpeg</strong> for media processing</li>
      </ul>

      <h3 id="system-requirements">System Requirements</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Minimum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Recommended</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Memory</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">4GB RAM</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">8GB+ RAM</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Storage</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">10GB free space</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">50GB+ SSD</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Network</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">10 Mbps</td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">50+ Mbps</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="install-ffmpeg">Install FFmpeg</h3>
      <p>FFmpeg is required for media processing and transcoding:</p>

      <CodeBlock 
        language="bash" 
        title="Install FFmpeg"
      >
{`# Ubuntu/Debian
sudo apt update
sudo apt install ffmpeg

# macOS (with Homebrew)
brew install ffmpeg

# Windows (with Chocolatey)
choco install ffmpeg

# For NVIDIA GPU support (Ubuntu)
sudo apt install nvidia-cuda-toolkit`}
      </CodeBlock>

      <Callout type="info" title="GPU Acceleration">
        For better performance, especially with multiple streams, consider installing NVIDIA CUDA toolkit 
        or AMD ROCm for hardware-accelerated encoding.
      </Callout>

      <h2 id="step1-clone">Step 1: Clone the Repositories</h2>
      <p>
        Create a directory for your VIMM deployment and clone all three components:
      </p>

      <CodeBlock 
        language="bash" 
        title="Clone VIMM Repositories"
      >
{`mkdir vimm-deployment
cd vimm-deployment

# Clone VIMM Core (streaming server)
git clone https://github.com/VIMM-TV/vimm-core.git

# Clone VIMM Frontend (web interface)
git clone https://github.com/VIMM-TV/vimm-frontend.git

# Clone VIMM Chat (chat server)
git clone https://github.com/VIMM-TV/vimm-chat.git`}
      </CodeBlock>

      <h2 id="step2-configure">Step 2: Configure Environment Variables</h2>
      <p>
        Each component requires environment configuration. Start with VIMM Core:
      </p>

      <CodeBlock 
        language="bash" 
        filename=".env"
        title="VIMM Core Configuration"
      >
{`cd vimm-core
cp .env.example .env

# Edit the configuration
nano .env`}
      </CodeBlock>

      <p>Update the <code>.env</code> file with your settings:</p>

      <CodeBlock 
        language="bash" 
        filename="vimm-core/.env"
      >
{`# Server Configuration
PORT=3001
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vimm_core
DB_USER=vimm
DB_PASS=your_secure_password

# Streaming Configuration
RTMP_PORT=1935
HLS_PORT=8080
WEBRTC_PORT=3003

# Hive Blockchain Configuration
HIVE_NODE=https://api.hive.blog
HIVE_CHAIN_ID=beeab0de00000000000000000000000000000000000000000000000000000000

# Security
JWT_SECRET=your_jwt_secret_here
ENCRYPTION_KEY=your_32_character_encryption_key`}
      </CodeBlock>

      <Callout type="warning" title="Security Note">
        Always use strong passwords and secrets in production. Consider using a password manager 
        or environment variable management service for sensitive data.
      </Callout>

      <h2 id="step3-install">Step 3: Install Dependencies</h2>
      <p>Install dependencies for each component:</p>

      <CodeBlock 
        language="bash" 
        title="Install Dependencies"
      >
{`# Install VIMM Core dependencies
cd vimm-core
npm install

# Install VIMM Frontend dependencies
cd ../vimm-frontend
npm install

# Install VIMM Chat dependencies
cd ../vimm-chat
npm install`}
      </CodeBlock>

      <h2 id="step4-database">Step 4: Setup Database</h2>
      <p>
        VIMM uses PostgreSQL for data storage. Install and configure it:
      </p>

      <CodeBlock 
        language="bash" 
        title="Install PostgreSQL"
      >
{`# Ubuntu/Debian
sudo apt install postgresql postgresql-contrib

# macOS (with Homebrew)
brew install postgresql

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql`}
      </CodeBlock>

      <CodeBlock 
        language="sql" 
        title="Create Database and User"
      >
{`# Connect to PostgreSQL
sudo -u postgres psql

-- Create database and user
CREATE DATABASE vimm_core;
CREATE USER vimm WITH ENCRYPTED PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE vimm_core TO vimm;

-- Exit psql
\\q`}
      </CodeBlock>

      <h2 id="step5-start">Step 5: Start the Services</h2>
      <p>
        Now you can start all VIMM components. Open three terminal windows:
      </p>

      <CodeBlock 
        language="bash" 
        title="Terminal 1: Start VIMM Core"
      >
{`cd vimm-core
npm run dev`}
      </CodeBlock>

      <CodeBlock 
        language="bash" 
        title="Terminal 2: Start VIMM Frontend"
      >
{`cd vimm-frontend
npm run dev`}
      </CodeBlock>

      <CodeBlock 
        language="bash" 
        title="Terminal 3: Start VIMM Chat"
      >
{`cd vimm-chat
npm start`}
      </CodeBlock>

      <Callout type="success" title="Success!">
        If everything is configured correctly, you should see:
        <ul className="mt-2 space-y-1">
          <li>• VIMM Core running on <code>http://localhost:3001</code></li>
          <li>• VIMM Frontend running on <code>http://localhost:3000</code></li>
          <li>• VIMM Chat running on <code>http://localhost:3002</code></li>
        </ul>
      </Callout>

      <h2 id="step6-verify">Step 6: Verify Installation</h2>
      <p>
        Test your installation by visiting the frontend and creating a test stream:
      </p>

      <ol>
        <li>Open your browser and go to <code>http://localhost:3000</code></li>
        <li>Create a new account or sign in</li>
        <li>Navigate to the streaming dashboard</li>
        <li>Start a test stream using OBS or similar software</li>
      </ol>

      <h3 id="obs-setup">OBS Studio Setup</h3>
      <p>Configure OBS Studio to stream to your VIMM instance:</p>

      <CodeBlock 
        language="text" 
        title="OBS Stream Settings"
      >
{`Service: Custom
Server: rtmp://localhost:1935/live
Stream Key: your_stream_key_from_dashboard`}
      </CodeBlock>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Congratulations! You now have a working VIMM installation. Here are some recommended next steps:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Configure SSL/TLS
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Set up SSL certificates for secure streaming and web access.
          </p>
          <a href="/configuration/ssl" className="text-vimm-orange hover:text-orange-600 font-medium">
            SSL/TLS Setup Guide →
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Production Deployment
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn how to deploy VIMM for production with load balancing and monitoring.
          </p>
          <a href="/deployment/production" className="text-vimm-orange hover:text-orange-600 font-medium">
            Production Guide →
          </a>
        </div>
      </div>

      <Callout type="error" title="Troubleshooting">
        If you encounter issues during installation, check our 
        <a href="/guides/troubleshooting" className="underline ml-1">troubleshooting guide</a> 
        or join our community Discord for help.
      </Callout>

      <FAQ items={faqItems} />
    </div>
  )
}