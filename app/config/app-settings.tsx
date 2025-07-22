'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AppSettings {
  appClass: string;
  appHeaderFixed: boolean;
  appHeaderInverse: boolean;
  appSidebarFixed: boolean;
  appSidebarMinified: boolean;
  appSidebarMobileToggled: boolean;
  appSidebarNone: boolean;
  appContentClass: string;
  appContentNone: boolean;
  appContentFullHeight: boolean;
  appBoxedLayout: boolean;
  appFooter: boolean;
  appTopMenu: boolean;
  appTopMenuMobileToggled: boolean;
  appSidebarTwo: boolean;
  appSidebarEndToggled: boolean;
  appSidebarEndMobileToggled: boolean;
  appSidebarWide: boolean;
  appSidebarLight: boolean;
  appSidebarTransparent: boolean;
  appSidebarGrid: boolean;
  appSidebarHover: boolean;
  appSidebarEnd: boolean;
  appSidebarSearch: boolean;
  appHeaderMegaMenu: boolean;
  appHeaderLanguageBar: boolean;
  appGradientEnabled: boolean;
}

interface AppSettingsContextType {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
}

const defaultSettings: AppSettings = {
  appClass: '',
  appHeaderFixed: true,
  appHeaderInverse: false,
  appSidebarFixed: true,
  appSidebarMinified: false,
  appSidebarMobileToggled: false,
  appSidebarNone: false,
  appContentClass: '',
  appContentNone: false,
  appContentFullHeight: false,
  appBoxedLayout: false,
  appFooter: false,
  appTopMenu: false,
  appTopMenuMobileToggled: false,
  appSidebarTwo: false,
  appSidebarEndToggled: false,
  appSidebarEndMobileToggled: false,
  appSidebarWide: false,
  appSidebarLight: false,
  appSidebarTransparent: false,
  appSidebarGrid: false,
  appSidebarHover: false,
  appSidebarEnd: false,
  appSidebarSearch: false,
  appHeaderMegaMenu: false,
  appHeaderLanguageBar: false,
  appGradientEnabled: false,
};

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export function AppSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  useEffect(() => {
    // Load settings from localStorage if available
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('vimmDocsSettings');
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          setSettings(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Error loading saved settings:', error);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('vimmDocsSettings', JSON.stringify(settings));
    }
  }, [settings]);

  return (
    <AppSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error('useAppSettings must be used within an AppSettingsProvider');
  }
  return context;
}