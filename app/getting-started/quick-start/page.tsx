'use client'

import { CopyButton } from '../../components/copy-button'
import { ExternalLink, GitBranch, Package, Settings, Play, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { WarningCallout, TipCallout, SuccessCallout } from '../../components/callout'

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div className="pb-6 border-b border-gray-200 dark:border-gray-700">
        <h1 id="quick-start-guide" className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Quick Start Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.
        </p>
      </div>

      <TipCallout title="Before You Start">
        This guide assumes you have basic knowledge of command line operations and Node.js development. 
        If you're new to these concepts, consider reviewing the <Link href="/getting-started/requirements" className="text-vimm-orange hover:underline">system requirements</Link> first.
      </TipCallout>

      {/* Prerequisites Section */}
      <section>
        <h2 id="prerequisites" className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Settings className="w-8 h-8 mr-3 text-vimm-orange" />
          Prerequisites
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Before starting, ensure you have the following installed:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 id="required-software" className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Package className="w-5 h-5 mr-2 text-blue-500" />
              Required Software
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                <div>
                  <strong>Node.js 18+</strong> - 
                  <Link href="https://nodejs.org/" className="text-vimm-orange hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    Download here <ExternalLink className="w-3 h-3 inline ml-1" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                <span><strong>npm</strong> or <strong>yarn</strong> package manager</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                <span><strong>Git</strong> for cloning repositories</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                <span><strong>FFmpeg</strong> for media processing</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 id="system-requirements" className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-purple-500" />
              System Requirements
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-vimm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Memory</strong>: Minimum 4GB RAM (8GB+ recommended for production)
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-vimm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Storage</strong>: 10GB+ free space
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-vimm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>Network</strong>: Stable internet connection
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-vimm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong>OS</strong>: Linux (Ubuntu 20.04+), macOS, or Windows with WSL2
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="install-ffmpeg" className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Install FFmpeg
        </h3>
        <div className="relative group mb-8">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
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

        <WarningCallout title="GPU Support">
          NVIDIA GPU support is optional but highly recommended for production deployments to enable hardware-accelerated encoding and better performance.
        </WarningCallout>
      </section>

      {/* Installation Steps */}
      <section>
        <h2 id="installation" className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <GitBranch className="w-8 h-8 mr-3 text-vimm-orange" />
          Installation
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-vimm-orange pl-6">
            <h3 id="step-1-clone-repositories" className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Step 1: Clone the Repositories
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create a directory for your VIMM deployment and clone all three components:
            </p>
            <div className="relative group mb-6">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
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
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 id="step-2-install-dependencies" className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Step 2: Install Dependencies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Install the required dependencies for each component:
            </p>
            <div className="relative group mb-6">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
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
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 id="step-3-configuration" className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Step 3: Configuration
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Configure environment variables for each component. Copy the example files and edit them:
            </p>
            <div className="relative group mb-6">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-700">
                <code>{`# Configure VIMM Core
cd vimm-core
cp .env.example .env
# Edit .env with your settings

# Configure VIMM Frontend
cd ../vimm-frontend
cp .env.example .env
# Edit .env with your settings

# Configure VIMM Chat
cd ../vimm-chat
cp .env.example .env
# Edit .env with your settings`}</code>
              </pre>
              <CopyButton text={`# Configure VIMM Core
cd vimm-core
cp .env.example .env
# Edit .env with your settings

# Configure VIMM Frontend
cd ../vimm-frontend
cp .env.example .env
# Edit .env with your settings

# Configure VIMM Chat
cd ../vimm-chat
cp .env.example .env
# Edit .env with your settings`} />
            </div>

            <TipCallout title="Configuration Help">
              Need help with configuration? Check out our detailed <Link href="/configuration/environment" className="text-vimm-orange hover:underline">environment variables guide</Link> for all available options.
            </TipCallout>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 id="step-4-start-services" className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Step 4: Start Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Start all three services in separate terminal windows:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Terminal 1: VIMM Core</h4>
                <div className="relative group">
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    <code>{`cd vimm-core
npm start`}</code>
                  </pre>
                  <CopyButton text="cd vimm-core && npm start" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Terminal 2: VIMM Frontend</h4>
                <div className="relative group">
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    <code>{`cd vimm-frontend
npm run dev`}</code>
                  </pre>
                  <CopyButton text="cd vimm-frontend && npm run dev" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Terminal 3: VIMM Chat</h4>
                <div className="relative group">
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                    <code>{`cd vimm-chat
npm start`}</code>
                  </pre>
                  <CopyButton text="cd vimm-chat && npm start" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-gradient-to-br from-vimm-orange to-orange-600 rounded-2xl p-8 text-white">
        <h2 id="next-steps" className="text-3xl font-bold mb-4 flex items-center">
          <Play className="w-8 h-8 mr-3" />
          Next Steps
        </h2>
        <p className="text-orange-100 mb-6">
          Congratulations! Your VIMM framework should now be running. Here's what to do next:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Access the Frontend</h3>
                <p className="text-orange-100 text-sm">Open http://localhost:3000 in your browser</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Configure SSL</h3>
                <p className="text-orange-100 text-sm">Set up SSL certificates for production use</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Deploy to Production</h3>
                <p className="text-orange-100 text-sm">Follow our production deployment guide</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                <span className="text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Test Streaming</h3>
                <p className="text-orange-100 text-sm">Start streaming with OBS or your favorite tool</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/configuration/ssl"
            className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            SSL Setup Guide
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/deployment/production"
            className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            Production Deployment
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <SuccessCallout title="You're All Set!">
        If all services started successfully, you now have a fully functional VIMM streaming platform running locally. 
        Visit the <Link href="/guides/troubleshooting" className="text-vimm-orange hover:underline">troubleshooting guide</Link> if you encounter any issues.
      </SuccessCallout>
    </div>
  )
}