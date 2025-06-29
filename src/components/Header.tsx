
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      
      // Show logo after transition completes (50vh scroll)
      const threshold = window.innerHeight * 0.5;
      setLogoVisible(scrollY >= threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background/90 shadow-sm border-b border-border/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <img 
              src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos/Apply2025logo.png" 
              alt="Apply Logo" 
              className={`h-10 md:h-12 transform transition-all duration-500 hover:scale-110 hover:rotate-2 hover:brightness-110 ${
                logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`} 
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Projects', 'Tools', 'Process', 'About', 'Contact'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium relative px-1 py-2 transition-all
                  after:absolute after:w-0 after:h-0.5 after:bg-accent after:bottom-0 after:left-0 
                  after:transition-all after:duration-300 hover:after:w-full hover:text-accent`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {item}
              </a>)}
            <a 
              href="https://www.apply.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Visit our Platform
            </a>
          </nav>

          <button className={`md:hidden p-1 rounded-md transition-colors ${scrolled ? 'text-foreground hover:bg-muted' : 'text-foreground hover:bg-background/20'}`} onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && <nav className="md:hidden py-4 space-y-6 animate-fade-in">
            {['Projects', 'Tools', 'Process', 'About', 'Contact'].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-medium hover:text-accent transition-colors py-2" onClick={toggleMenu} style={{
          animationDelay: `${index * 50}ms`
        }}>
                {item}
              </a>)}
            <Link to="/animation-demo" className="block text-lg font-medium hover:text-accent transition-colors py-2" onClick={toggleMenu}>
              Animations
            </Link>
            <a 
              href="https://www.apply.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 mt-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-all duration-300"
              onClick={toggleMenu}
            >
              Visit our Platform
            </a>
          </nav>}
      </div>
    </header>
  );
};

export default Header;
