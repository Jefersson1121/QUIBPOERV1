import { Star, MapPin, Clock, Badge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkerCardProps {
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  availability: string;
  verified: boolean;
  imageUrl: string;
  skills: string[];
}

export function WorkerCard({
  name,
  profession,
  rating,
  reviews,
  hourlyRate,
  location,
  availability,
  verified,
  imageUrl,
  skills
}: WorkerCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Badge className="w-3 h-3" />
            Verificado
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-bold text-xl text-gray-900">{name}</h3>
          <p className="text-purple-600 font-medium">{profession}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold text-gray-900">{rating}</span>
            <span className="text-gray-500">({reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Clock className="w-4 h-4" />
            <span>{availability}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">${hourlyRate.toLocaleString('es-CO')}</div>
            <div className="text-xs text-gray-500">por hora</div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
          Ver Perfil
        </button>
      </div>
    </div>
  );
}
