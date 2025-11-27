'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock search functionality
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="search"
        placeholder="도시 이름, 지역, 태그로 검색... (예: 제주, 해변, 저렴함)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 h-14 text-base"
      />
    </form>
  );
}
