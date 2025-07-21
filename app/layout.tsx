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
          <div className="documentation-layout">
            {/* Fixed Header */}
            <header className="documentation-header">
              <Navigation />
            </header>
            
            {/* Fixed Sidebar */}
            <aside className="documentation-sidebar">
              <Sidebar />
            </aside>
            
            {/* Main Content Area */}
            <main className="documentation-main">
              <div className="main-content-wrapper">
                <div className="main-content-container">
                  <Breadcrumb />
                  <div className="prose-content">
                    {children}
                    <EditOnGitHub className="mt-12" />
                    <PageNavigation className="mt-8" />
                  </div>
                </div>
              </div>
            </main>
            
            {/* Table of Contents - Right sidebar */}
            <aside className="documentation-toc">
              <div className="toc-content">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}