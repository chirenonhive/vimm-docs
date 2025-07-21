'use client'

import { ReactNode } from 'react'
import { AlertTriangle, Info, CheckCircle, XCircle, Lightbulb } from 'lucide-react'

interface CalloutProps {
  type: 'info' | 'warning' | 'error' | 'success' | 'tip'
  title?: string
  children: ReactNode
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100',
    iconClassName: 'text-blue-500'
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-100',
    iconClassName: 'text-yellow-500'
  },
  error: {
    icon: XCircle,
    className: 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100',
    iconClassName: 'text-red-500'
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100',
    iconClassName: 'text-green-500'
  },
  tip: {
    icon: Lightbulb,
    className: 'border-vimm-orange bg-orange-50 dark:bg-orange-900/20 text-orange-900 dark:text-orange-100',
    iconClassName: 'text-vimm-orange'
  }
}

export function Callout({ type, title, children }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div className={`border-l-4 p-4 my-6 rounded-r-lg ${config.className}`}>
      <div className="flex items-start">
        <Icon className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${config.iconClassName}`} />
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">
              {title}
            </h4>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}