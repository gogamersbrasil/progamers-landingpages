'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, User, LogOut, Info, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
     className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-gaming-darker/90 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Image src="/logo.png" alt="Logo" width={150} height={150} />
              </div>

              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  <span className="flex items-center">
                    <Home size={16} className="mr-1" />
                    Home
                  </span>
                </Link>
                <Link
                  href="/about-us"
                  className={`nav-link ${
                    isActive("/about-us") ? "active" : ""
                  }`}
                >
                  <span className="flex items-center">
                    <Info size={16} className="mr-1" />
                    Sobre
                  </span>
                </Link>
                <Link
                  href="/producers"
                  className={`nav-link ${
                    isActive("/producers") ? "active" : ""
                  }`}
                >
                  <span className="flex items-center">
                    <Briefcase size={16} className="mr-1" />
                    Para Produtores
                  </span>
                </Link>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Link target="blank" href="https://app.progamers.com.br/auth" className="gaming-link flex items-center">
                  <User size={16} className="mr-1" />
                  Login
                </Link>
                <Link target="blank" href="https://app.progamers.com.br/register" className="gaming-button">
                  Sign Up
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-gaming-red focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gaming-darker/95 backdrop-blur-md">
              <div className="px-4 pt-2 pb-4 space-y-3">
                <Link
                  href="/"
                  className="block py-2 text-white hover:text-gaming-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Home size={16} className="mr-2" />
                    Home
                  </span>
                </Link>
                <Link
                  href="/about-us"
                  className="block py-2 text-white hover:text-gaming-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Info size={16} className="mr-2" />
                    Sobre
                  </span>
                </Link>
                <Link
                  href="/producers"
                  className="block py-2 text-white hover:text-gaming-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    Para Produtores
                  </span>
                </Link>
                <div className="pt-2 border-t border-gray-700">
                  <Link
                    href="/login"
                    className="block py-2 text-white hover:text-gaming-red"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <User size={16} className="mr-2" />
                      Login
                    </span>
                  </Link>
                  <Link
                    href="/signup"
                    className="block py-2 text-white hover:text-gaming-red"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      <LogOut size={16} className="mr-2" />
                      Sign Up
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
    </header>
  );
}
