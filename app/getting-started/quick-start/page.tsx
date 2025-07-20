export default function QuickStartPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Quick Start Guide
      </h1>
      
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Prerequisites
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Before starting, ensure you have the following installed:
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
          Required Software
        </h3>
        
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li><strong>Node.js 18+</strong> - <a href="https://nodejs.org/" className="text-orange-600 hover:text-orange-700">Download here</a></li>
          <li><strong>npm</strong> or <strong>yarn</strong> package manager</li>
          <li><strong>Git</strong> for cloning repositories</li>
          <li><strong>FFmpeg</strong> for media processing</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
          System Requirements
        </h3>
        
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
          <li><strong>Memory</strong>: Minimum 4GB RAM (8GB+ recommended for production)</li>
          <li><strong>Storage</strong>: 10GB+ free space</li>
          <li><strong>Network</strong>: Stable internet connection</li>
          <li><strong>OS</strong>: Linux (Ubuntu 20.04+), macOS, or Windows with WSL2</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Installation Steps
        </h2>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Step 1: Install FFmpeg
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`# Ubuntu/Debian
sudo apt update
sudo apt install ffmpeg

# macOS (with Homebrew)
brew install ffmpeg

# For NVIDIA GPU support (Ubuntu)
sudo apt install nvidia-cuda-toolkit`}
          </pre>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Step 2: Clone the Repositories
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`mkdir vimm-deployment
cd vimm-deployment

# Clone VIMM Core (streaming server)
git clone https://github.com/VIMM-TV/vimm-core.git

# Clone VIMM Frontend (web interface)
git clone https://github.com/VIMM-TV/vimm-frontend.git

# Clone VIMM Chat (chat server)
git clone https://github.com/VIMM-TV/vimm-chat.git`}
          </pre>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Step 3: Setup VIMM Core
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`cd vimm-core

# Install dependencies
npm install

# Initialize the database
node scripts/init-db.js

# Create media directories
mkdir -p media/live media/thumbnails

# Create environment file
cp .env.example .env`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Next Steps
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Congratulations! You now have a working VIMM deployment. Here's what to do next:
        </p>

        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li><strong>Production Setup</strong> - Configure SSL, domains, and security</li>
          <li><strong>Environment Configuration</strong> - Detailed configuration options</li>
          <li><strong>Troubleshooting</strong> - Common issues and solutions</li>
        </ul>
      </section>
    </div>
  )
}