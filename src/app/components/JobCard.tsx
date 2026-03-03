import { Building2, DollarSign, Clock, Users } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  type: string;
  budget: string;
  duration: string;
  applicants: number;
  description: string;
  tags: string[];
  urgent?: boolean;
}

export function JobCard({
  title,
  company,
  type,
  budget,
  duration,
  applicants,
  description,
  tags,
  urgent = false
}: JobCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
      {urgent && (
        <div className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
          🔥 Urgente
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-900 mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="w-4 h-4" />
            <span className="font-medium">{company}</span>
          </div>
        </div>
        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
          {type}
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 py-3 border-t border-b border-gray-100 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="w-4 h-4 text-green-600" />
          <div>
            <div className="text-xs text-gray-500">Presupuesto</div>
            <div className="font-semibold text-gray-900">{budget}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-blue-600" />
          <div>
            <div className="text-xs text-gray-500">Duración</div>
            <div className="font-semibold text-gray-900">{duration}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-purple-600" />
          <div>
            <div className="text-xs text-gray-500">Postulantes</div>
            <div className="font-semibold text-gray-900">{applicants}</div>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg">
        Aplicar Ahora
      </button>
    </div>
  );
}
