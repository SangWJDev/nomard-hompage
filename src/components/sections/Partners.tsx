import Image from 'next/image';
import { mockPartners } from '@/data';

export default function Partners() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🤝 파트너
          </h2>
          <p className="text-lg text-muted-foreground">
            한국노마드와 함께하는 파트너사
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {mockPartners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 rounded-lg border bg-white hover:shadow-lg transition-all group"
            >
              <div className="grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
