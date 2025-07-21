import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navigation } from './components/navigation'
import { Sidebar } from './components/sidebar'
import { TableOfContents } from './components/table-of-contents'
import { Breadcrumb } from './components/breadcrumb'
import { PageNavigation } from './components/page-navigation'
import { EditOnGitHub } from './components/edit-on-github'

export const metadata: Metadata = {
  title: 'VIMM Framework Documentation',
  description: 'Complete guide to deploying and configuring the VIMM streaming framework',
  keywords: 'VIMM, streaming, deployment, documentation, Hive, blockchain',
  authors: [{ name: 'VIMM Team' }],
  openGraph: {
    title: 'VIMM Framework Documentation',
    description: 'Complete guide to deploying and configuring the VIMM streaming framework',
    type: 'website',
    url: 'https://docs.vimm.tv',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIMM Framework Documentation',
    description: 'Complete guide to deploying and configuring the VIMM streaming framework',
  },
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
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 min-w-0">
                <div className="max-w-none mx-auto">
                  <div className="flex">
                    {/* Main content area */}
                    <div className="flex-1 min-w-0 px-6 py-8 lg:px-8">
                      <Breadcrumb />
                      <div className="max-w-4xl">
                        {children}
                        <EditOnGitHub className="mt-12" />
                        <PageNavigation className="mt-8" />
                      </div>
                    </div>
                    
                    {/* Table of Contents - Right sidebar */}
                    <div className="hidden xl:block w-64 flex-shrink-0">
                      <div className="px-6 py-8">
                        <TableOfContents />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}