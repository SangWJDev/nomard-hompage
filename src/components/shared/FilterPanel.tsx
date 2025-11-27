'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CITY_TAGS } from '@/lib/constants';

export default function FilterPanel() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">나는 이런 곳에서 살고 싶어요!</h3>
        {selectedTags.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            초기화
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {CITY_TAGS.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? 'default' : 'outline'}
            className="cursor-pointer hover-lift px-4 py-2 text-sm"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <div className="text-sm text-muted-foreground">
          선택된 태그: {selectedTags.join(', ')}
        </div>
      )}
    </div>
  );
}
