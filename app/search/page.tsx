'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SearchResult } from '../utils/search';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams?.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Search failed');
      }

      setResults(data.results || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const terms = query.toLowerCase().split(/\s+/);
    let highlightedText = text;
    
    terms.forEach(term => {
      if (term.length > 2) { // Only highlight terms longer than 2 characters
        const regex = new RegExp(`(${term})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
      }
    });
    
    return highlightedText;
  };

  return (
    <div className="container-fluid">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Search Results</li>
        </ol>
      </nav>

      {/* Page Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="page-header mb-2">
            Search Documentation
            {query && (
              <small className="text-muted d-block">
                Results for: "{query}"
              </small>
            )}
          </h1>
        </div>
      </div>

      {/* Search Form */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="panel panel-inverse">
            <div className="panel-body">
              <form onSubmit={handleSearch} className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search documentation..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fa fa-search"></i>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="row">
        <div className="col-12">
          {loading && (
            <div className="text-center py-5">
              <i className="fa fa-spinner fa-spin fa-2x mb-3"></i>
              <p className="text-muted">Searching documentation...</p>
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="fa fa-exclamation-triangle me-2"></i>
              {error}
            </div>
          )}

          {!loading && !error && results.length === 0 && query && (
            <div className="panel panel-inverse">
              <div className="panel-body text-center py-5">
                <i className="fa fa-search fa-3x text-muted mb-3"></i>
                <h3>No results found</h3>
                <p className="text-muted mb-4">
                  We couldn't find anything matching "{query}". Try:
                </p>
                <ul className="list-unstyled text-muted">
                  <li>• Checking your spelling</li>
                  <li>• Using different keywords</li>
                  <li>• Searching for more general terms</li>
                </ul>
              </div>
            </div>
          )}

          {!loading && !error && results.length > 0 && (
            <>
              <div className="mb-3">
                <small className="text-muted">
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </small>
              </div>

              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={`${result.href}-${index}`} className="panel panel-inverse">
                    <div className="panel-body">
                      <div className="d-flex align-items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="bg-theme text-white rounded p-2">
                            <i className={result.icon}></i>
                          </div>
                        </div>
                        
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <Link
                              href={result.href}
                              className="text-decoration-none"
                            >
                              <h5 className="mb-0 text-primary">
                                <span dangerouslySetInnerHTML={{
                                  __html: highlightText(result.title, query)
                                }} />
                              </h5>
                            </Link>
                            <small className="badge bg-secondary">
                              {result.section}
                            </small>
                          </div>
                          
                          <p className="text-muted mb-2">
                            <span dangerouslySetInnerHTML={{
                              __html: highlightText(result.excerpt, query)
                            }} />
                          </p>
                          
                          <div className="d-flex align-items-center gap-3">
                            <Link
                              href={result.href}
                              className="btn btn-sm btn-outline-primary"
                            >
                              View Page <i className="fa fa-arrow-right ms-1"></i>
                            </Link>
                            <small className="text-muted">
                              Relevance: {result.score}%
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && !error && !query && (
            <div className="panel panel-inverse">
              <div className="panel-body text-center py-5">
                <i className="fa fa-search fa-3x text-muted mb-3"></i>
                <h3>Search VIMM Documentation</h3>
                <p className="text-muted mb-4">
                  Find guides, tutorials, and reference materials for the VIMM Framework
                </p>
                <div className="row g-3">
                  <div className="col-md-3 col-sm-6">
                    <Link href="/getting-started/quick-start" className="text-decoration-none">
                      <div className="bg-primary bg-opacity-10 rounded p-3 h-100 d-flex flex-column align-items-center">
                        <i className="fa fa-rocket fa-2x text-primary mb-2"></i>
                        <h6 className="mb-1">Quick Start</h6>
                        <small className="text-muted text-center">Get started with VIMM</small>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link href="/server-components/core" className="text-decoration-none">
                      <div className="bg-success bg-opacity-10 rounded p-3 h-100 d-flex flex-column align-items-center">
                        <i className="fa fa-server fa-2x text-success mb-2"></i>
                        <h6 className="mb-1">VIMM Core</h6>
                        <small className="text-muted text-center">Core server setup</small>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link href="/configuration/environment" className="text-decoration-none">
                      <div className="bg-warning bg-opacity-10 rounded p-3 h-100 d-flex flex-column align-items-center">
                        <i className="fa fa-cog fa-2x text-warning mb-2"></i>
                        <h6 className="mb-1">Configuration</h6>
                        <small className="text-muted text-center">Setup and config</small>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Link href="/guides/troubleshooting" className="text-decoration-none">
                      <div className="bg-info bg-opacity-10 rounded p-3 h-100 d-flex flex-column align-items-center">
                        <i className="fa fa-wrench fa-2x text-info mb-2"></i>
                        <h6 className="mb-1">Troubleshooting</h6>
                        <small className="text-muted text-center">Fix common issues</small>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
