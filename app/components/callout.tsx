import { ReactNode } from 'react'
import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb } from 'lucide-react'

interface CalloutProps {
  children: ReactNode
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip'
  title?: string
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: XCircle,
    tip: Lightbulb,
  }

  const styles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
    tip: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-100',
  }

  const iconColors = {
    info: 'text-blue-500',
    warning: 'text-yellow-500',
    success: 'text-green-500',
    error: 'text-red-500',
    tip: 'text-purple-500',
  }

  const defaultTitles = {
    info: 'Info',
    warning: 'Warning',
    success: 'Success',
    error: 'Error',
    tip: 'Tip',
  }

  const Icon = icons[type]

  return (
    <div className={`p-4 rounded-lg border ${styles[type]} my-6`}>
      <div className="flex items-start">
        <Icon className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${iconColors[type]}`} />
        <div className="flex-1">
          {title && (
            <div className="font-semibold mb-2">{title}</div>
          )}
          {!title && (
            <div className="font-semibold mb-2">{defaultTitles[type]}</div>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

// Convenience components for specific types
export function InfoCallout({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="info" title={title}>{children}</Callout>
}

export function WarningCallout({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="warning" title={title}>{children}</Callout>
}

export function SuccessCallout({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="success" title={title}>{children}</Callout>
}

export function ErrorCallout({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="error" title={title}>{children}</Callout>
}

export function TipCallout({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="tip" title={title}>{children}</Callout>
}