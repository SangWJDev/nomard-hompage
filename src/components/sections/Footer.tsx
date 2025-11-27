import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-wide py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏙️</span>
              <span className="text-white font-bold text-lg">한국노마드</span>
            </div>
            <p className="text-sm mb-4">
              대한민국에서 일하며 살기 좋은 도시를 찾는 가장 쉬운 방법
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  도시 찾기
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  이벤트
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  노마드 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  팀 소개
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  채용
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  블로그
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">지원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  고객센터
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  제휴 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2024 한국노마드. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
