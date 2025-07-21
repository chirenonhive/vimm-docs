'use client'

import { useState } from 'react'
import { Share2, Twitter, Facebook, Linkedin, Link, Check } from 'lucide-react'

interface SocialShareProps {
  title: string
  url?: string
  description?: string
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedDescription = encodeURIComponent(description || '')

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL: ', err)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-vimm-orange transition-colors"
        title="Share this page"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-2">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Twitter className="w-4 h-4 mr-3 text-blue-500" />
                Twitter
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                Facebook
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                LinkedIn
              </a>
              <button
                onClick={copyToClipboard}
                className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 mr-3 text-green-600" />
                ) : (
                  <Link className="w-4 h-4 mr-3 text-gray-500" />
                )}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}