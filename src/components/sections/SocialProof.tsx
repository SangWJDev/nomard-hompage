import Image from 'next/image';
import { mockPress } from '@/data';

export default function SocialProof() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-wide">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-8">
          📰 언론에 소개된 한국노마드
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {mockPress.map((press) => (
            <a
              key={press.id}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={press.logo}
                alt={press.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
