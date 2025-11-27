'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Mock API call
    setTimeout(() => {
      setMessage('✅ 뉴스레터 구독이 완료되었습니다!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={isSubmitting || !email}>
          {isSubmitting ? '구독 중...' : '구독하기'}
        </Button>
      </div>

      {message && (
        <p className="text-sm text-center text-success">
          {message}
        </p>
      )}

      <p className="text-xs text-muted-foreground text-center">
        매주 디지털 노마드 생활에 도움이 되는 팁과 정보를 받아보세요.
      </p>
    </form>
  );
}
