import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navigation } from './components/navigation'
import { Sidebar } from './components/sidebar'

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
      <body className={`font-sans bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <Navigation />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 min-h-screen">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}