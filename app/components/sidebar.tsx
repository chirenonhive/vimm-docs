'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useAppSettings } from '../config/app-settings';
import { slideUp, slideDown } from '../utils/slide';

const navigation = [
  {
    title: 'Getting Started',
    icon: 'fa fa-play-circle',
    items: [
      { title: 'Overview', href: '/', icon: 'fa fa-home' },
      { title: 'Quick Start', href: '/getting-started/quick-start', icon: 'fa fa-rocket' },
    ]
  },
  {
    title: 'Core Components',
    icon: 'fa fa-cube',
    items: [
      { title: 'VIMM Core', href: '/server-components/core', icon: 'fa fa-server' },
      { title: 'VIMM Frontend', href: '/server-components/frontend', icon: 'fa fa-desktop' },
      { title: 'VIMM Chat', href: '/server-components/chat', icon: 'fa fa-comments' },
    ]
  },
  /* {
    title: 'Deployment',
    icon: 'fa fa-upload',
    items: [
      { title: 'Single Server', href: '/deployment/single-server', icon: 'fa fa-server' },
      { title: 'Multi Server', href: '/deployment/multi-server', icon: 'fa fa-network-wired' },
      { title: 'Docker', href: '/deployment/docker', icon: 'fab fa-docker' },
      { title: 'Production Setup', href: '/deployment/production', icon: 'fa fa-cogs' },
    ]
  }, */
  {
    title: 'Configuration',
    icon: 'fa fa-cog',
    items: [
      { title: 'Environment Variables', href: '/configuration/environment', icon: 'fa fa-code' },
      { title: 'SSL/TLS Setup', href: '/configuration/ssl', icon: 'fa fa-lock' },
      { title: 'Database Setup', href: '/configuration/database', icon: 'fa fa-database' },
    ]
  },
  {
    title: 'Guides & Help',
    icon: 'fa fa-book',
    items: [
      { title: 'Troubleshooting', href: '/guides/troubleshooting', icon: 'fa fa-wrench' },
      { title: 'Performance', href: '/guides/performance', icon: 'fa fa-tachometer-alt' },
      { title: 'Security', href: '/guides/security', icon: 'fa fa-shield-alt' },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { settings, updateSettings } = useAppSettings();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'Getting Started': true,
    'Core Components': false,
    //'Deployment': false,
    'Configuration': false,
    'Guides & Help': false,
  });

  useEffect(() => {
    // Initialize sidebar behavior
    let isMounted = true;

    const handleSidebarMenuToggle = (menus: HTMLElement[]) => {
      menus.forEach((menu) => {
        const isInit = menu.getAttribute('data-init');
        if (!isInit) {
          menu.addEventListener('click', function (e) {
            e.preventDefault();

            const target = menu.nextElementSibling as HTMLElement | null;

            menus.forEach((m) => {
              const otherTarget = m.nextElementSibling as HTMLElement | null;
              if (otherTarget && otherTarget !== target) {
                slideUp(otherTarget);
                otherTarget.closest('.menu-item')?.classList.remove('expand');
              }
            });

            if (target) {
              const targetItemElm = target.closest('.menu-item') as HTMLElement;

              if (
                targetItemElm.classList.contains('expand') ||
                (targetItemElm.classList.contains('active') && !target.style.display)
              ) {
                targetItemElm.classList.remove('expand');
                slideUp(target);
              } else {
                targetItemElm.classList.add('expand');
                slideDown(target);
              }
            }
          });

          menu.setAttribute('data-init', 'true');
        }
      });
    };

    const menuBaseSelector = '.app-sidebar .menu > .menu-item.has-sub';
    const menuLinkSelector = menuBaseSelector + ' > .menu-link';
    
    setTimeout(() => {
      if (isMounted) {
        const menus: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>(menuLinkSelector));
        handleSidebarMenuToggle(menus);
      }
    }, 100);

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const closeMobileSidebar = () => {
    if (settings.appSidebarMobileToggled) {
      updateSettings({ appSidebarMobileToggled: false });
    }
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    closeMobileSidebar();
  };

  return (
    <>
      <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
        <PerfectScrollbar className="app-sidebar-content" options={{ suppressScrollX: true }}>
          {/* Profile Section */}
          <div className="menu">
            <div className="menu-profile">
              <div className="menu-profile-image">
                <div className="d-flex align-items-center justify-content-center bg-theme text-white rounded-circle" style={{ width: '60px', height: '60px', fontSize: '24px', fontWeight: 'bold' }}>
                  V
                </div>
              </div>
              <div className="menu-profile-info">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <div className="fw-bold">VIMM Framework</div>
                    <small className="text-white-50">Documentation Hub</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="menu-header">Navigation</div>

            {navigation.map((section) => {
              const isActive = section.items.some(item => pathname === item.href);
              const isOpen = openSections[section.title];

              return (
                <div key={section.title} className={`menu-item has-sub ${isActive ? 'active' : ''}`}>
                  <a 
                    href="#" 
                    className="menu-link"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSection(section.title);
                    }}
                  >
                    <div className="menu-icon">
                      <i className={section.icon}></i>
                    </div>
                    <div className="menu-text">{section.title}</div>
                  </a>
                  <div className={`menu-submenu ${isOpen ? 'd-block' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
                    {section.items.map((item) => (
                      <div key={item.href} className={`menu-item ${pathname === item.href ? 'active' : ''}`}>
                        <a 
                          href="#"
                          className="menu-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.href);
                          }}
                        >
                          <div className="menu-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="menu-text">{item.title}</div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Minify Button */}
            <div className="menu-item d-flex">
              <a 
                href="#" 
                className="app-sidebar-minify-btn ms-auto d-flex align-items-center text-decoration-none"
                onClick={(e) => {
                  e.preventDefault();
                  updateSettings({ appSidebarMinified: !settings.appSidebarMinified });
                }}
              >
                <i className="fa fa-angle-double-left"></i>
              </a>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <div className="app-sidebar-bg" data-bs-theme="dark"></div>
      {settings.appSidebarMobileToggled && (
        <div className="app-sidebar-mobile-backdrop">
          <button 
            className="stretched-link border-0 bg-transparent w-100 h-100"
            onClick={() => updateSettings({ appSidebarMobileToggled: false })}
          />
        </div>
      )}
    </>
  );
}