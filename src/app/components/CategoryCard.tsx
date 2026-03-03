import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  color: string;
  onClick: () => void;
}

export function CategoryCard({ icon: Icon, title, count, color, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative p-6 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-white/80">{count} disponibles</p>
      </div>
    </button>
  );
}
