'use client';

import { useState, useEffect } from 'react';

interface HivePost {
  permlink: string;
  title: string;
  body: string;
  created: string;
  author: string;
  json_metadata: string;
}

interface ParsedPost {
  permlink: string;
  title: string;
  description: string;
  created: string;
  author: string;
  url: string;
}

export function useHivePosts(author: string, searchTerm: string, limit: number = 5) {
  const [posts, setPosts] = useState<ParsedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch posts from Hive API
        const response = await fetch('https://api.hive.blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'condenser_api.get_discussions_by_author_before_date',
            params: [author, '', new Date().toISOString().split('T')[0], limit * 3], // Fetch more to filter
            id: 1,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error.message);
        }

        // Filter posts that contain the search term in title and parse them
        const filteredPosts = data.result
          .filter((post: HivePost) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .slice(0, limit)
          .map((post: HivePost) => {
            let description = '';
            try {
              const metadata = JSON.parse(post.json_metadata || '{}');
              description = metadata.description || '';
            } catch {
              // Fallback to first 100 characters of body
              description = post.body.replace(/[#*`\[\]()]/g, '').substring(0, 100);
            }

            // If description is still empty or too short, use body preview
            if (!description || description.length < 20) {
              description = post.body
                .replace(/[#*`\[\]()]/g, '')
                .replace(/\n/g, ' ')
                .substring(0, 100)
                .trim() + '...';
            }

            return {
              permlink: post.permlink,
              title: post.title,
              description: description.length > 100 ? description.substring(0, 100) + '...' : description,
              created: post.created,
              author: post.author,
              url: `https://peakd.com/@${post.author}/${post.permlink}`,
            };
          });

        setPosts(filteredPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        console.error('Error fetching Hive posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [author, searchTerm, limit]);

  return { posts, loading, error };
}
