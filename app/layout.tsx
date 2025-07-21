import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navigation } from './components/navigation'
import { Sidebar } from './components/sidebar'
import { Footer } from './components/footer'
import { Breadcrumb } from './components/breadcrumb'
import { TableOfContents } from './components/table-of-contents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIMM Framework Documentation',
  description: 'Complete guide to deploying and configuring the VIMM streaming framework',
  keywords: 'VIMM, streaming, deployment, documentation, Hive, blockchain',
  openGraph: {
    title: 'VIMM Framework Documentation',
    description: 'Complete guide to deploying and configuring the VIMM streaming framework',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VIMM Framework Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIMM Framework Documentation',
    description: 'Complete guide to deploying and configuring the VIMM streaming framework',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex-1 flex min-w-0">
                <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
                  <Breadcrumb />
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {children}
                  </div>
                </main>
                {/* Table of Contents Sidebar */}
                <aside className="hidden xl:block w-64 flex-shrink-0 p-6">
                  <TableOfContents />
                </aside>
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}