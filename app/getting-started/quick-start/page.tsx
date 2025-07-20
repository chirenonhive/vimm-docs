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

      {/* Continue with the rest of your content... */}
      
    </div>
  )
}