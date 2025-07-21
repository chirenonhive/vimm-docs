'use client'

import { CopyToClipboard } from './copy-to-clipboard'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
  title?: string
}

export function CodeBlock({ children, language, filename, title }: CodeBlockProps) {
  const displayTitle = title || filename

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {displayTitle && (
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            {filename && (
              <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                {filename}
              </span>
            )}
            {language && (
              <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md font-mono uppercase">
                {language}
              </span>
            )}
          </div>
          <CopyToClipboard text={children} />
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900 text-sm leading-relaxed">
          <code className={language ? `language-${language}` : ''}>
            {children}
          </code>
        </pre>
        {!displayTitle && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyToClipboard text={children} />
          </div>
        )}
      </div>
    </div>
  )
}