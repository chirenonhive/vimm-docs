'use client'

import { CopyButton } from '../../components/copy-button'
import { Breadcrumbs } from '../../components/breadcrumbs'

export default function QuickStartPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumbs />
        
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Quick Start Guide
          </h1>
          <p className="text-xl text-secondary mb-12 leading-relaxed">
            Get your VIMM framework up and running in under 30 minutes with this comprehensive guide.
          </p>

          <div className="space-y-16">
            {/* Prerequisites Section */}
            <section className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                Prerequisites
              </h2>
              <p className="text-lg text-secondary mb-8">
                Before starting, ensure you have the following installed:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="surface-elevation-1 rounded-2xl p-8 border border-custom">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Required Software
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { name: 'Node.js 18+', desc: 'JavaScript runtime', link: 'https://nodejs.org/' },
                      { name: 'npm or yarn', desc: 'Package manager', link: null },
                      { name: 'Git', desc: 'Version control', link: null },
                      { name: 'FFmpeg', desc: 'Media processing', link: null }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-vimm-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <div>
                          <strong className="text-primary">{item.name}</strong>
                          {item.link ? (
                            <>
                              <span className="text-secondary"> - </span>
                              <a href={item.link} className="link-primary" target="_blank" rel="noopener noreferrer">
                                Download here
                              </a>
                            </>
                          ) : (
                            <span className="text-secondary"> - {item.desc}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="surface-elevation-1 rounded-2xl p-8 border border-custom">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    System Requirements
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { name: 'Memory', desc: 'Minimum 4GB RAM (8GB+ recommended for production)' },
                      { name: 'Storage', desc: '10GB+ free space' },
                      { name: 'Network', desc: 'Stable internet connection' },
                      { name: 'OS', desc: 'Linux (Ubuntu 20.04+), macOS, or Windows with WSL2' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-vimm-orange rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <div>
                          <strong className="text-primary">{item.name}:</strong>
                          <span className="text-secondary"> {item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FFmpeg Installation */}
            <section className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Install FFmpeg
              </h3>
              <div className="surface-elevation-2 rounded-2xl overflow-hidden">
                <div className="code-filename">install-ffmpeg.sh</div>
                <div className="relative group">
                  <pre className="rounded-t-none">
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
              </div>
            </section>

            {/* Step 1 */}
            <section className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-vimm-orange to-vimm-orange-dark text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
                Clone the Repositories
              </h2>
              <p className="text-lg text-secondary mb-8">
                Create a directory for your VIMM deployment and clone all three components:
              </p>
              <div className="surface-elevation-2 rounded-2xl overflow-hidden">
                <div className="code-filename">setup-vimm.sh</div>
                <div className="relative group">
                  <pre className="rounded-t-none">
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
            </section>

            {/* Step 2 */}
            <section className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-vimm-orange to-vimm-orange-dark text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
                Configure Environment Variables
              </h2>
              <p className="text-lg text-secondary mb-8">
                Each component requires specific environment variables. Create <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.env</code> files for each:
              </p>
              
              <div className="grid gap-8">
                <div className="surface-elevation-1 rounded-2xl p-8 border border-custom">
                  <h3 className="text-xl font-semibold text-primary mb-4">VIMM Core (.env)</h3>
                  <div className="surface-elevation-2 rounded-xl overflow-hidden">
                    <div className="relative group">
                      <pre>
                        <code>{`# Server Configuration
PORT=3001
NODE_ENV=production

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vimm_core
DB_USER=vimm_user
DB_PASS=your_secure_password

# Streaming
RTMP_PORT=1935
HLS_PATH=/tmp/hls
RECORD_PATH=/tmp/recordings

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
POSTING_KEY=your_posting_key`}</code>
                      </pre>
                      <CopyButton text={`# Server Configuration
PORT=3001
NODE_ENV=production

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=vimm_core
DB_USER=vimm_user
DB_PASS=your_secure_password

# Streaming
RTMP_PORT=1935
HLS_PATH=/tmp/hls
RECORD_PATH=/tmp/recordings

# Hive Blockchain
HIVE_NODE=https://api.hive.blog
POSTING_KEY=your_posting_key`} />
                    </div>
                  </div>
                </div>

                <div className="surface-elevation-1 rounded-2xl p-8 border border-custom">
                  <h3 className="text-xl font-semibold text-primary mb-4">VIMM Frontend (.env)</h3>
                  <div className="surface-elevation-2 rounded-xl overflow-hidden">
                    <div className="relative group">
                      <pre>
                        <code>{`# API Configuration
REACT_APP_API_URL=http://localhost:3001
REACT_APP_CHAT_URL=ws://localhost:3002
REACT_APP_HLS_URL=http://localhost:3001/hls

# Authentication
REACT_APP_HIVE_NODE=https://api.hive.blog`}</code>
                      </pre>
                      <CopyButton text={`# API Configuration
REACT_APP_API_URL=http://localhost:3001
REACT_APP_CHAT_URL=ws://localhost:3002
REACT_APP_HLS_URL=http://localhost:3001/hls

# Authentication
REACT_APP_HIVE_NODE=https://api.hive.blog`} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Continue button */}
            <div className="text-center surface-elevation-2 rounded-3xl p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready for the next steps?
              </h3>
              <p className="text-lg text-secondary mb-6">
                Continue with installation and deployment configuration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Continue Setup
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  View Full Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}