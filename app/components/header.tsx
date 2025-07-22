'use client';

import { useAppSettings } from '../config/app-settings';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useHivePosts } from '../hooks/useHivePosts';

export default function Header() {
  const { settings, updateSettings } = useAppSettings();
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const { posts: hivePosts, loading: postsLoading, error: postsError } = useHivePosts('chiren', 'development', 5);

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }
  };

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
            <span className="badge bg-danger rounded-pill">{hivePosts.length}</span>
          </a>
          <div className="dropdown-menu media-list dropdown-menu-end" style={{ minWidth: '320px' }}>
            <div className="dropdown-header">DEVELOPMENT UPDATES ({hivePosts.length})</div>
            
            {postsLoading && (
              <div className="dropdown-item text-center py-3">
                <i className="fa fa-spinner fa-spin me-2"></i>
                Loading updates...
              </div>
            )}
            
            {postsError && (
              <div className="dropdown-item text-center py-3 text-danger">
                <i className="fa fa-exclamation-triangle me-2"></i>
                Failed to load updates
              </div>
            )}
            
            {!postsLoading && !postsError && hivePosts.length === 0 && (
              <div className="dropdown-item text-center py-3 text-muted">
                No development posts found
              </div>
            )}
            
            {!postsLoading && !postsError && hivePosts.map((post, index) => (
              <a 
                key={post.permlink} 
                href={post.url} 
                className="dropdown-item media"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="media-left">
                  <i className="fa fa-code media-object bg-blue text-white p-2 rounded"></i>
                </div>
                <div className="media-body ms-3">
                  <h6 className="media-heading mb-1">{post.title}</h6>
                  <p className="mb-1 text-muted small">{post.description}</p>
                  <div className="text-muted fs-11px">{formatTimeAgo(post.created)}</div>
                </div>
              </a>
            ))}
            
            <div className="dropdown-footer text-center">
              <a 
                href="https://peakd.com/@chiren" 
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all posts by @chiren
              </a>
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