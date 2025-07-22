'use client';

import { useHivePosts } from '../hooks/useHivePosts';

export default function RecentUpdates() {
  const { posts: hivePosts, loading: postsLoading, error: postsError } = useHivePosts('chiren', 'development', 3);

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

  const formatReward = (amount: number) => {
    return amount.toFixed(2);
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <h4 className="panel-title">
          <i className="fa fa-clock me-2"></i>
          Recent Development Updates
        </h4>
      </div>
      <div className="panel-body">
        {postsLoading && (
          <div className="text-center py-4">
            <i className="fa fa-spinner fa-spin me-2"></i>
            Loading latest updates...
          </div>
        )}
        
        {postsError && (
          <div className="text-center py-4 text-danger">
            <i className="fa fa-exclamation-triangle me-2"></i>
            Failed to load updates. Showing fallback content.
          </div>
        )}
        
        {!postsLoading && !postsError && hivePosts.length === 0 && (
          <div className="text-center py-4 text-muted">
            No development posts found
          </div>
        )}
        
        <div className="row">
          {!postsLoading && !postsError && hivePosts.length > 0 ? (
            hivePosts.map((post, index) => (
              <div key={post.permlink} className="col-md-4 mb-3">
                <div className="card h-100 border-0 shadow-sm">
                  {post.thumbnail && (
                    <div className="position-relative">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="position-absolute top-0 end-0 m-2">
                        <span className="badge bg-primary">
                          <i className="fab fa-hive me-1"></i>
                          Hive
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-start mb-2">
                      <div className="flex-shrink-0 me-3">
                        <div className="bg-primary text-white rounded p-2">
                          <i className="fa fa-code"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="card-title mb-1 fw-bold">{post.title}</h6>
                        <small className="text-muted">by @{post.author}</small>
                      </div>
                    </div>
                    
                    <p className="card-text text-muted small mb-3 flex-grow-1">
                      {post.description}
                    </p>
                    
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="mb-3">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="badge bg-light text-dark me-1 mb-1">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Stats Row */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fa fa-heart text-danger me-1"></i>
                        <small className="text-muted">{post.upvotes}</small>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        {post.isPaidOut ? (
                          <span className="badge bg-success">
                            <i className="fa fa-coins me-1"></i>
                            ${formatReward(post.totalPayout)} HBD
                          </span>
                        ) : (
                          <span className="badge bg-warning text-dark">
                            <i className="fa fa-clock me-1"></i>
                            ${formatReward(post.pendingPayout)} pending
                          </span>
                        )}
                      </div>
                      
                      <small className="text-muted">{formatTimeAgo(post.created)}</small>
                    </div>
                    
                    {/* Read More Button */}
                    <a 
                      href={post.url}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-alt me-1"></i>
                      Read on PeakD
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback content when posts fail to load
            <>
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
            </>
          )}
        </div>
        
        {!postsLoading && !postsError && hivePosts.length > 0 && (
          <div className="text-center mt-3">
            <a 
              href="https://peakd.com/@chiren"
              className="btn btn-outline-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-hive me-2"></i>
              View all posts by @chiren
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
