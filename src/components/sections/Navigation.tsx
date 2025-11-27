'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '홈', href: '#' },
    { label: '도시 찾기', href: '#cities' },
    { label: '커뮤니티', href: '#community' },
    { label: '가이드', href: '#guide' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🏙️</span>
            <span>한국노마드</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm">
              회원가입
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" size="sm" className="w-full">
                로그인
              </Button>
              <Button size="sm" className="w-full">
                회원가입
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
