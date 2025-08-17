import { ReactNode } from 'react';

export interface SearchResult {
  title: string;
  href: string;
  excerpt: string;
  section: string;
  icon: string;
  score: number;
}

// Define searchable content structure
export interface SearchableContent {
  title: string;
  href: string;
  section: string;
  icon: string;
  content: string;
  keywords: string[];
}

// Define all searchable content in the documentation
export const searchableContent: SearchableContent[] = [
  // Getting Started
  {
    title: 'Overview',
    href: '/',
    section: 'Getting Started',
    icon: 'fa fa-home',
    content: 'VIMM Framework Documentation Complete guide to deploying and configuring the VIMM streaming framework Welcome to VIMM Framework Build your own decentralized streaming platform with Hive blockchain integration. Get started with our comprehensive guides and deployment instructions. decentralized streaming blockchain hive video platform',
    keywords: ['vimm', 'framework', 'documentation', 'overview', 'home', 'decentralized', 'streaming', 'blockchain', 'hive', 'video', 'platform']
  },
  {
    title: 'Quick Start',
    href: '/getting-started/quick-start',
    section: 'Getting Started',
    icon: 'fa fa-rocket',
    content: 'Quick Start Guide Get up and running with VIMM Framework in minutes. This guide will walk you through the basic setup and configuration to get your streaming platform operational. Prerequisites requirements setup installation docker containers deployment',
    keywords: ['quick', 'start', 'guide', 'setup', 'installation', 'prerequisites', 'requirements', 'docker', 'containers', 'deployment']
  },
  
  // Core Components
  {
    title: 'VIMM Core',
    href: '/server-components/core',
    section: 'Core Components',
    icon: 'fa fa-server',
    content: 'VIMM Core streaming server backbone RTMP ingestion media processing blockchain integration API platform operations central component orchestrates streamers viewers Hive blockchain decentralized censorship-resistant streaming experiences RTMP server OBS XSplit broadcasting software media processing transcoding adaptive bitrate streaming FFmpeg viewing experiences',
    keywords: ['vimm', 'core', 'streaming', 'server', 'rtmp', 'ingestion', 'media', 'processing', 'blockchain', 'integration', 'api', 'transcoding', 'ffmpeg', 'obs', 'xsplit']
  },
  {
    title: 'VIMM Frontend',
    href: '/server-components/frontend',
    section: 'Core Components', 
    icon: 'fa fa-desktop',
    content: 'VIMM Frontend user interface web application viewers streamers dashboard responsive design modern UI components video player chat integration theme support customization branding',
    keywords: ['vimm', 'frontend', 'user', 'interface', 'web', 'application', 'dashboard', 'responsive', 'design', 'ui', 'components', 'video', 'player', 'chat', 'theme', 'customization', 'branding']
  },
  {
    title: 'VIMM Chat',
    href: '/server-components/chat',
    section: 'Core Components',
    icon: 'fa fa-comments',
    content: 'VIMM Chat real-time messaging system websocket connection moderation tools spam protection user management roles permissions emotes badges subscriber benefits interactive features',
    keywords: ['vimm', 'chat', 'messaging', 'real-time', 'websocket', 'moderation', 'spam', 'protection', 'user', 'management', 'roles', 'permissions', 'emotes', 'badges', 'subscriber', 'interactive']
  },

  // Configuration
  {
    title: 'Environment Variables',
    href: '/configuration/environment',
    section: 'Configuration',
    icon: 'fa fa-code',
    content: 'Environment Variables configuration settings database connection blockchain API keys security tokens RTMP settings media processing parameters custom domains SSL certificates',
    keywords: ['environment', 'variables', 'configuration', 'settings', 'database', 'connection', 'blockchain', 'api', 'keys', 'security', 'tokens', 'rtmp', 'ssl', 'certificates']
  },
  {
    title: 'SSL/TLS Setup',
    href: '/configuration/ssl',
    section: 'Configuration',
    icon: 'fa fa-lock',
    content: 'SSL TLS Setup security certificates HTTPS encryption secure connections Let\'s Encrypt Certbot nginx apache web server configuration domain validation',
    keywords: ['ssl', 'tls', 'security', 'certificates', 'https', 'encryption', 'lets', 'encrypt', 'certbot', 'nginx', 'apache', 'web', 'server', 'domain', 'validation']
  },
  {
    title: 'Database Setup',
    href: '/configuration/database',
    section: 'Configuration',
    icon: 'fa fa-database',
    content: 'Database Setup MySQL PostgreSQL MongoDB connection configuration schemas migrations user data stream metadata blockchain transactions indexing performance optimization',
    keywords: ['database', 'mysql', 'postgresql', 'mongodb', 'connection', 'configuration', 'schemas', 'migrations', 'user', 'data', 'stream', 'metadata', 'blockchain', 'transactions', 'indexing', 'performance']
  },

  // Guides & Help  
  {
    title: 'Troubleshooting',
    href: '/guides/troubleshooting',
    section: 'Guides & Help',
    icon: 'fa fa-wrench',
    content: 'Troubleshooting common issues problems solutions error messages connection problems stream quality buffering performance issues debugging logs monitoring system health',
    keywords: ['troubleshooting', 'issues', 'problems', 'solutions', 'error', 'messages', 'connection', 'stream', 'quality', 'buffering', 'performance', 'debugging', 'logs', 'monitoring', 'health']
  },
  {
    title: 'Performance',
    href: '/guides/performance',
    section: 'Guides & Help',
    icon: 'fa fa-tachometer-alt',
    content: 'Performance optimization server resources CPU memory bandwidth scaling load balancing CDN content delivery network caching strategies monitoring metrics analytics',
    keywords: ['performance', 'optimization', 'server', 'resources', 'cpu', 'memory', 'bandwidth', 'scaling', 'load', 'balancing', 'cdn', 'content', 'delivery', 'caching', 'monitoring', 'metrics', 'analytics']
  },
  {
    title: 'Security',
    href: '/guides/security',
    section: 'Guides & Help',
    icon: 'fa fa-shield-alt',
    content: 'Security best practices authentication authorization user permissions firewall protection DDoS mitigation rate limiting input validation data encryption privacy compliance',
    keywords: ['security', 'authentication', 'authorization', 'permissions', 'firewall', 'protection', 'ddos', 'mitigation', 'rate', 'limiting', 'validation', 'encryption', 'privacy', 'compliance']
  }
];

// Search function that performs fuzzy matching
export function searchDocumentation(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);
  const results: SearchResult[] = [];

  searchableContent.forEach(content => {
    let score = 0;
    const lowerTitle = content.title.toLowerCase();
    const lowerContent = content.content.toLowerCase();
    const lowerSection = content.section.toLowerCase();
    
    // Exact title match gets highest score
    if (lowerTitle === query.toLowerCase()) {
      score += 100;
    }
    
    // Title contains search terms
    searchTerms.forEach(term => {
      if (lowerTitle.includes(term)) {
        score += 20;
      }
      if (lowerSection.includes(term)) {
        score += 10;
      }
      // Keywords match
      if (content.keywords.some(keyword => keyword.includes(term))) {
        score += 15;
      }
      // Content match
      if (lowerContent.includes(term)) {
        score += 5;
      }
    });

    // Multiple term bonus
    const matchingTerms = searchTerms.filter(term => 
      lowerTitle.includes(term) || 
      lowerContent.includes(term) || 
      content.keywords.some(keyword => keyword.includes(term))
    );
    
    if (matchingTerms.length > 1) {
      score += matchingTerms.length * 5;
    }

    // Only include results with meaningful scores
    if (score > 0) {
      // Generate excerpt from content
      const excerpt = generateExcerpt(content.content, searchTerms);
      
      results.push({
        title: content.title,
        href: content.href,
        excerpt,
        section: content.section,
        icon: content.icon,
        score
      });
    }
  });

  // Sort by score (highest first) and return top results
  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}

// Helper function to generate search result excerpts
function generateExcerpt(content: string, searchTerms: string[]): string {
  const words = content.split(/\s+/);
  let bestPosition = 0;
  let maxMatches = 0;

  // Find the position with the most search term matches
  for (let i = 0; i < words.length - 20; i++) {
    const snippet = words.slice(i, i + 20).join(' ').toLowerCase();
    const matches = searchTerms.filter(term => snippet.includes(term)).length;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestPosition = i;
    }
  }

  // Extract excerpt around the best position
  const startPos = Math.max(0, bestPosition - 10);
  const endPos = Math.min(words.length, bestPosition + 30);
  let excerpt = words.slice(startPos, endPos).join(' ');

  // Add ellipsis if needed
  if (startPos > 0) excerpt = '...' + excerpt;
  if (endPos < words.length) excerpt = excerpt + '...';

  // Limit excerpt length
  if (excerpt.length > 200) {
    excerpt = excerpt.substring(0, 197) + '...';
  }

  return excerpt || content.substring(0, 200) + '...';
}
