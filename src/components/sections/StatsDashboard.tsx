import { mockStats } from '@/data';
import StatCard from '@/components/shared/StatCard';

export default function StatsDashboard() {
  return (
    <section className="section bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📊 데이터로 보는 한국 노마드 라이프
          </h2>
          <p className="text-lg text-muted-foreground">
            실시간으로 성장하는 한국 디지털 노마드 커뮤니티
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {mockStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
