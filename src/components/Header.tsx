
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-background/90 shadow-sm border-b border-border/40' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <img 
              src="/lovable-uploads/d57e18cf-ef2b-43ec-84cc-a8bcb2c88158.png" 
              alt="Apply Logo" 
              className="h-10" 
            />
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['Projects', 'Tools', 'Process', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium relative px-1 py-2 transition-all
                  after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-0 after:left-0 
                  after:transition-all after:duration-300 hover:after:w-full hover:text-accent`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className={`md:hidden p-1 rounded-md transition-colors ${
              scrolled ? 'text-foreground hover:bg-muted' : 'text-foreground hover:bg-background/20'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 space-y-6 animate-fade-in">
            {['Projects', 'Tools', 'Process', 'About', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium hover:text-accent transition-colors py-2"
                onClick={toggleMenu}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
