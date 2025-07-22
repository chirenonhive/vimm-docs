'use client';

import { useAppSettings } from '../config/app-settings';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Header() {
  const { settings, updateSettings } = useAppSettings();
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebarMobile = () => {
    updateSettings({
      appSidebarMobileToggled: !settings.appSidebarMobileToggled
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search query:', searchQuery);
  };

  return (
    <div id="header" className="app-header" data-bs-theme={theme === 'dark' ? 'dark' : ''}>
      <div className="navbar-header">
        <button 
          type="button" 
          className="navbar-mobile-toggler"
          onClick={toggleSidebarMobile}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="/" className="navbar-brand">
          <span className="navbar-logo">V</span>
          <b>VIMM</b> Docs
        </a>
      </div>

      <div className="navbar-nav">
        {/* Search Form */}
        <div className="navbar-item navbar-form">
          <form onSubmit={handleSearch} name="search">
            <div className="form-group d-flex">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search documentation..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ minWidth: '250px' }}
              />
              <button type="submit" className="btn btn-search ms-2">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Theme Toggle */}
        <div className="navbar-item">
          <button
            className="btn btn-link navbar-link"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`fa ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>

        {/* Notifications */}
        <div className="navbar-item dropdown">
          <a 
            href="#" 
            data-bs-toggle="dropdown" 
            className="navbar-link dropdown-toggle icon"
            role="button"
          >
            <i className="fa fa-bell"></i>
            <span className="badge bg-danger rounded-pill">3</span>
          </a>
          <div className="dropdown-menu media-list dropdown-menu-end" style={{ minWidth: '320px' }}>
            <div className="dropdown-header">UPDATES (3)</div>
            <a href="#" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-code-branch media-object bg-blue text-white p-2 rounded"></i>
              </div>
              <div className="media-body ms-3">
                <h6 className="media-heading mb-1">VIMM Core v2.1.0 Released</h6>
                <p className="mb-1 text-muted small">New features and bug fixes available</p>
                <div className="text-muted fs-11px">2 hours ago</div>
              </div>
            </a>
            <a href="#" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-book media-object bg-green text-white p-2 rounded"></i>
              </div>
              <div className="media-body ms-3">
                <h6 className="media-heading mb-1">Documentation Updated</h6>
                <p className="mb-1 text-muted small">New deployment guides added</p>
                <div className="text-muted fs-11px">1 day ago</div>
              </div>
            </a>
            <a href="#" className="dropdown-item media">
              <div className="media-left">
                <i className="fa fa-server media-object bg-orange text-white p-2 rounded"></i>
              </div>
              <div className="media-body ms-3">
                <h6 className="media-heading mb-1">Server Maintenance</h6>
                <p className="mb-1 text-muted small">Scheduled maintenance completed</p>
                <div className="text-muted fs-11px">3 days ago</div>
              </div>
            </a>
            <div className="dropdown-footer text-center">
              <a href="#" className="text-decoration-none">View all updates</a>
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="navbar-item navbar-user dropdown">
          <a 
            href="#" 
            className="navbar-link dropdown-toggle d-flex align-items-center" 
            data-bs-toggle="dropdown"
            role="button"
          >
            <div className="navbar-user-img rounded-circle bg-theme text-white d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', fontSize: '14px', fontWeight: 'bold' }}>
              VD
            </div>
            <span className="d-none d-md-inline ms-2">
              <span className="fw-bold">VIMM Docs</span>
              <b className="caret ms-1"></b>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end me-1">
            <a href="https://github.com/VIMM-TV" className="dropdown-item" target="_blank">
              <i className="fa fa-code-branch me-2"></i> View Source
            </a>
            <a href="https://github.com/VIMM-TV/vimm-docs/issues" className="dropdown-item" target="_blank">
              <i className="fa fa-bug me-2"></i> Report Issue
            </a>
            <a href="https://discord.gg/vimm" className="dropdown-item" target="_blank">
              <i className="fab fa-discord me-2"></i> Join Discord
            </a>
            <div className="dropdown-divider"></div>
            <a href="https://github.com/VIMM-TV" className="dropdown-item" target="_blank">
              <i className="fab fa-github me-2"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}