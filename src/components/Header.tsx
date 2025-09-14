import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Research', href: '/research' },
  { name: 'Campus Life', href: '/campus-life' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://play-lh.googleusercontent.com/VBdv3DaG8HhQKhj0Os9IVsk32kywKh2MWfEDHe5SjRGFcwtCv0emXkL4pXS-hJVY6g" alt="Vidya University Logo" className="h-8 w-8 rounded-full" />
              <span className="text-2xl font-bold text-foreground">Vidya University</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium text-muted-foreground hover:text-primary transition-colors',
                      isActive && 'text-primary'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link to="/admissions" className="hidden sm:inline-block px-6 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-transform hover:scale-105">
                Apply Now
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-border">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-base font-medium text-muted-foreground hover:text-primary transition-colors',
                        isActive && 'text-primary'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link to="/admissions" onClick={() => setIsMenuOpen(false)} className="w-full mt-2 px-6 py-3 text-center text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-transform hover:scale-105">
                  Apply Now
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
