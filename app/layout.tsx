import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navigation } from './components/navigation'
import { Sidebar } from './components/sidebar'
import { ScrollToTop } from './components/scroll-to-top'
import { ProgressBar } from './components/progress-bar'
import { TableOfContents } from './components/table-of-contents'

export const metadata: Metadata = {
  title: 'VIMM Framework Documentation',
  description: 'Complete guide to deploying and configuring the VIMM streaming framework',
  keywords: 'VIMM, streaming, deployment, documentation, Hive, blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <ThemeProvider>
          <div className="min-h-screen">
            <Navigation />
            <ProgressBar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 min-h-screen lg:ml-0">
                <div className="max-w-none relative">
                  {children}
                  <TableOfContents />
                </div>
              </main>
            </div>
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}