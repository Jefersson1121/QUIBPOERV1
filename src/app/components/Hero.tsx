import { Search, Briefcase, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onSearchTypeChange: (type: 'worker' | 'employer') => void;
}

export function Hero({ onSearchTypeChange }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium">🚀 Plataforma de Empleo Confiable</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Conecta <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Talento</span>
            <br />con <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Oportunidades</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto">
            La plataforma que une a trabajadores talentosos con empleadores que necesitan servicios de calidad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => onSearchTypeChange('worker')}
              className="group relative px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              <div className="flex items-center gap-3 justify-center">
                <Briefcase className="w-6 h-6" />
                <span>Presto servicio</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
            
            <button
              onClick={() => onSearchTypeChange('employer')}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
            >
              <div className="flex items-center gap-3 justify-center">
                <Users className="w-6 h-6" />
                <span>Necesito Contratar</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-300">+10K</div>
              <div className="text-purple-100 mt-2">Trabajadores Activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-pink-300">+5K</div>
              <div className="text-purple-100 mt-2">Empleadores Registrados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-green-300">98%</div>
              <div className="text-purple-100 mt-2">Tasa de Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
