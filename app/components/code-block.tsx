'use client'

import { CopyButton } from './copy-button'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-700 text-gray-200 px-4 py-2 text-sm font-mono rounded-t-lg border-b border-gray-600">
          {filename}
        </div>
      )}
      <pre className={`${filename ? 'rounded-t-none' : ''} relative`}>
        <code className={language ? `language-${language}` : ''}>
          {children}
        </code>
        <CopyButton text={children} />
      </pre>
    </div>
  )
}