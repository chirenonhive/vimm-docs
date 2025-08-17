'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SearchResult } from '../utils/search';

interface SearchDropdownProps {
  query: string;
  onSelectResult?: () => void;
}

export default function SearchDropdown({ query, onSelectResult }: SearchDropdownProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Don't search if query is too short
    if (!query || query.trim().length < 2) {
      setResults([]);
      setIsVisible(false);
      setLoading(false);
      return;
    }

    // Debounce search requests
    timeoutRef.current = setTimeout(() => {
      performSearch(query.trim());
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Search failed');
      }

      setResults(data.results?.slice(0, 5) || []); // Show only top 5 results
      setIsVisible(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setResults([]);
      setIsVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = () => {
    setIsVisible(false);
    onSelectResult?.();
  };

  if (!isVisible || (!loading && !error && results.length === 0)) {
    return null;
  }

  return (
    <div 
      className="search-dropdown position-absolute"
      style={{ 
        top: '100%', 
        left: 0, 
        right: 0, 
        zIndex: 1050,
        maxHeight: '400px',
        overflowY: 'auto'
      }}
    >
      {loading && (
        <div className="p-3 text-center">
          <i className="fa fa-spinner fa-spin me-2"></i>
          <small className="text-muted">Searching...</small>
        </div>
      )}

      {error && (
        <div className="p-3 text-center text-danger">
          <i className="fa fa-exclamation-triangle me-2"></i>
          <small>{error}</small>
        </div>
      )}

      {!loading && !error && results.length > 0 && (
        <>
          {results.map((result, index) => (
            <Link
              key={`${result.href}-${index}`}
              href={result.href}
              className="search-dropdown-item d-block p-3 text-decoration-none border-bottom"
              onClick={handleResultClick}
            >
              <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                  <i className={`${result.icon} text-primary`}></i>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-medium mb-1">
                    {result.title}
                  </div>
                  <small className="text-muted">
                    {result.section}
                  </small>
                </div>
                <div className="flex-shrink-0">
                  <i className="fa fa-arrow-right text-muted"></i>
                </div>
              </div>
            </Link>
          ))}
          <div className="p-2 text-center border-top">
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              className="btn btn-sm btn-outline-primary"
              onClick={handleResultClick}
            >
              View all results
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
