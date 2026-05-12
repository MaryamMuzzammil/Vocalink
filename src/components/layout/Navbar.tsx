import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X, LayoutDashboard } from 'lucide-react';
import { Button } from '../ui/Button';
import { 
  SignedIn, 
  SignedOut, 
  UserButton, 
  SignInButton, 
  SignUpButton 
} from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex justify-center px-6 ${
        isScrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div 
        className={`w-full max-w-5xl transition-all duration-500 flex items-center justify-between px-8 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl py-3 rounded-[2rem] border border-slate-100 shadow-2xl shadow-black/5' 
            : 'bg-transparent py-4'
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-black/10 transition-transform group-hover:scale-110">
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Vocalink</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'How it works', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-xs font-semibold uppercase tracking-widest">Log In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="h-10 px-6 rounded-xl text-xs font-semibold uppercase tracking-widest shadow-black/5">Get Started</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link to="/dashboard">
              <Button variant="ghost" className="text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                <LayoutDashboard size={14} />
                Dashboard
              </Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-6 top-24 bg-white/90 backdrop-blur-2xl z-[90] p-8 rounded-[3rem] border border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden shadow-2xl">
          <div className="flex flex-col gap-8 items-center text-center">
            {['Features', 'How it works', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-xl font-bold text-slate-900 uppercase tracking-tight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-4 w-full pt-8 border-t border-slate-50">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" className="w-full h-14 rounded-2xl" onClick={() => setMobileMenuOpen(false)}>Log In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full h-14 rounded-2xl" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link to="/dashboard" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full h-14 rounded-2xl flex items-center justify-center gap-2">
                    <LayoutDashboard size={20} />
                    Go to Dashboard
                  </Button>
                </Link>
                <div className="flex justify-center pt-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
