import Link from 'next/link'

export default function Home() {
  return (
    <div className="container-fluid">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">Documentation</li>
        </ol>
      </nav>

      {/* Page Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="page-header mb-2">
            VIMM Framework Documentation
            <small className="text-muted d-block">Complete guide to deploying and configuring the VIMM streaming framework</small>
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="panel panel-inverse">
            <div className="panel-body text-center py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-3">Welcome to VIMM Framework</h2>
                  <p className="lead mb-4">
                    Build your own decentralized streaming platform with Hive blockchain integration. 
                    Get started with our comprehensive guides and deployment instructions.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Link
                      href="/getting-started/quick-start"
                      className="btn btn-primary btn-lg px-4"
                    >
                      <i className="fa fa-rocket me-2"></i>
                      Get Started
                    </Link>
                    <a
                      href="https://github.com/VIMM-TV"
                      className="btn btn-outline-secondary btn-lg px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-2"></i>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components Overview */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="panel h-100">
            <div className="panel-body text-center">
              <div className="text-primary mb-3">
                <i className="fa fa-server fa-3x"></i>
              </div>
              <h5 className="panel-title mb-3">VIMM Core</h5>
              <p className="text-muted mb-4">
                High-performance streaming server with multi-protocol support (RTMP, WebRTC, HLS) 
                and Hive blockchain integration.
              </p>
              <Link
                href="/components/core"
                className="btn btn-outline-primary"
              >
                Learn more <i className="fa fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="panel h-100">
            <div className="panel-body text-center">
              <div className="text-success mb-3">
                <i className="fa fa-desktop fa-3x"></i>
              </div>
              <h5 className="panel-title mb-3">VIMM Frontend</h5>
              <p className="text-muted mb-4">
                React-based reference frontend application with responsive design, 
                stream viewing, and user management features.
              </p>
              <Link
                href="/components/frontend"
                className="btn btn-outline-success"
              >
                Learn more <i className="fa fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="panel h-100">
            <div className="panel-body text-center">
              <div className="text-info mb-3">
                <i className="fa fa-comments fa-3x"></i>
              </div>
              <h5 className="panel-title mb-3">VIMM Chat</h5>
              <p className="text-muted mb-4">
                Real-time chat server with WebSocket support, moderation tools, 
                and seamless integration with streaming components.
              </p>
              <Link
                href="/components/chat"
                className="btn btn-outline-info"
              >
                Learn more <i className="fa fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="panel panel-inverse">
            <div className="panel-heading">
              <h4 className="panel-title">
                <i className="fa fa-rocket me-2"></i>
                Quick Start Guide
              </h4>
            </div>
            <div className="panel-body">
              <p className="mb-4">
                Get your VIMM framework up and running in minutes with our streamlined deployment process.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-3">
                    <i className="fa fa-list-check me-2 text-primary"></i>
                    Prerequisites
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i> Node.js 18+ and npm</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i> FFmpeg for media processing</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i> SSL certificates for production</li>
                    <li className="mb-2"><i className="fa fa-check text-success me-2"></i> Domain name (recommended)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold mb-3">
                    <i className="fa fa-download me-2 text-success"></i>
                    Installation Steps
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fa fa-arrow-right text-primary me-2"></i> Clone the repositories</li>
                    <li className="mb-2"><i className="fa fa-arrow-right text-primary me-2"></i> Configure environment variables</li>
                    <li className="mb-2"><i className="fa fa-arrow-right text-primary me-2"></i> Install dependencies</li>
                    <li className="mb-2"><i className="fa fa-arrow-right text-primary me-2"></i> Start the services</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/getting-started/quick-start"
                  className="btn btn-primary"
                >
                  <i className="fa fa-book me-2"></i>
                  View detailed setup guide
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <i className="fa fa-star me-2"></i>
                Key Features
              </h4>
            </div>
            <div className="panel-body">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Multi-protocol streaming
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Hive blockchain integration
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Real-time chat system
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Adaptive bitrate streaming
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Hardware acceleration
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Horizontal scaling
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Complete REST API
                </li>
                <li className="mb-2">
                  <i className="fa fa-circle text-primary me-2" style={{ fontSize: '8px' }}></i>
                  Production-ready security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="row">
        <div className="col-12">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <i className="fa fa-clock me-2"></i>
                Recent Updates
              </h4>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded p-2">
                        <i className="fa fa-code-branch"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">VIMM Core v2.1.0</h6>
                      <p className="text-muted mb-1 small">Enhanced streaming performance and new WebRTC features</p>
                      <small className="text-muted">2 days ago</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="bg-success text-white rounded p-2">
                        <i className="fa fa-book"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Documentation Update</h6>
                      <p className="text-muted mb-1 small">New Docker deployment guides and troubleshooting section</p>
                      <small className="text-muted">1 week ago</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="bg-info text-white rounded p-2">
                        <i className="fa fa-shield-alt"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Security Enhancement</h6>
                      <p className="text-muted mb-1 small">Improved authentication and rate limiting features</p>
                      <small className="text-muted">2 weeks ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}