
import { useState, useEffect } from 'react';
import { Menu, X, Store, Wrench, Workflow, MessageSquare, Info, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects', homeHref: '/#projects', icon: Store },
    { name: 'Tools', href: '#tools', homeHref: '/#tools', icon: Wrench },
    { name: 'Pricing', href: '#pricing', homeHref: '/#pricing', icon: DollarSign },
    { name: 'About', href: '#about', homeHref: '/#about', icon: Info },
    { name: 'Contact', href: '#contact', homeHref: '/#contact', icon: MessageSquare },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background/90 shadow-sm border-b border-border/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <img 
              src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
              alt="Apply Logo" 
              className="h-10 md:h-12 transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:brightness-110" 
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => 
              item.isRoute ? (
                <Link
                  key={item.name} 
                  to={item.href} 
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/10 hover:text-accent group"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </span>
                </Link>
              ) : isHomePage ? (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/10 hover:text-accent group"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </span>
                </a>
              ) : (
                <Link
                  key={item.name} 
                  to={item.homeHref || item.href} 
                  className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent/10 hover:text-accent group"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </span>
                </Link>
              )
            )}
            <a 
              href="https://www.apply.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 gradient-purple-green text-white font-medium rounded-lg hover:gradient-purple-green-hover transition-all duration-200 hover:shadow-lg"
            >
              Visit Platform
            </a>
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-accent/10" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '72px', zIndex: 40 }}
          onClick={toggleMenu}
        />
        
        {/* Mobile Menu Panel */}
        <nav 
          className={`fixed right-0 top-[72px] h-[calc(100vh-72px)] w-80 bg-background border-l border-border/50 backdrop-blur-xl transform transition-transform duration-300 ease-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 50 }}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return item.isRoute ? (
                <Link
                  key={item.name} 
                  to={item.href} 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 group"
                  onClick={toggleMenu}
                  style={{
                    animation: isOpen ? `slideInRight ${300 + index * 50}ms ease-out forwards` : 'none',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              ) : isHomePage ? (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 group"
                  onClick={toggleMenu}
                  style={{
                    animation: isOpen ? `slideInRight ${300 + index * 50}ms ease-out forwards` : 'none',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-base font-medium">{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name} 
                  to={item.homeHref || item.href} 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 group"
                  onClick={toggleMenu}
                  style={{
                    animation: isOpen ? `slideInRight ${300 + index * 50}ms ease-out forwards` : 'none',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="text-base font-medium">{item.name}</span>
                </Link>
              );
            })}
            
            <div className="pt-6 mt-6 border-t border-border/50">
              <a 
                href="https://www.apply.codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 gradient-purple-green text-white font-medium rounded-lg hover:gradient-purple-green-hover transition-all duration-200"
                onClick={toggleMenu}
              >
                Visit Platform
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
