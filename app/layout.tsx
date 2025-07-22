'use client';

import type { Metadata } from 'next'
// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';
// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';
// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
// Highlight.js
import 'highlight.js/styles/github-dark.css';
// Custom styles
import './globals.css'
import { useEffect } from 'react'
import { AppSettingsProvider, useAppSettings } from './config/app-settings'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/header'
import Sidebar from './components/sidebar'

function Layout({ children }: { children: React.ReactNode }) {
  const { settings } = useAppSettings();

  useEffect(() => {
    // Load Bootstrap JS
    const loadBootstrap = async () => {
      if (typeof window !== 'undefined') {
        try {
          const bootstrap = await import('bootstrap');
          (window as any).bootstrap = bootstrap;
        } catch (error) {
          console.error('Error loading Bootstrap:', error);
        }
      }
    };
    loadBootstrap();
  }, []);

  const appClass = [
    'app',
    settings.appClass,
    settings.appBoxedLayout ? 'app-boxed-layout' : '',
    settings.appContentFullHeight ? 'app-content-full-height' : '',
    settings.appHeaderFixed ? 'app-header-fixed' : '',
    settings.appSidebarFixed ? 'app-sidebar-fixed' : '',
    settings.appSidebarMinified ? 'app-sidebar-minified' : '',
    settings.appSidebarMobileToggled ? 'app-sidebar-mobile-toggled' : '',
    settings.appFooter ? 'app-footer-fixed' : '',
    settings.appTopMenu ? 'app-with-top-menu' : '',
    settings.appGradientEnabled ? 'app-gradient-enabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={appClass}>
      <Header />
      <Sidebar />
      <div className={'app-content ' + settings.appContentClass}>
        {children}
      </div>
      {settings.appSidebarMobileToggled && (
        <div className="app-sidebar-mobile-backdrop">
          <button
            className="stretched-link"
            onClick={() => {
              // This will be handled by the header component
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>VIMM Framework Documentation</title>
        <meta name="description" content="Complete guide to deploying and configuring the VIMM streaming framework" />
        <meta name="keywords" content="VIMM, streaming, deployment, documentation, Hive, blockchain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          <AppSettingsProvider>
            <Layout>{children}</Layout>
          </AppSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}