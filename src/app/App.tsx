import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { WorkerCard } from './components/WorkerCard';
import { JobCard } from './components/JobCard';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import {
  Wrench,
  Zap,
  Paintbrush,
  Code,
  Camera,
  Truck,
  Baby,
  Hammer,
  Search,
  SlidersHorizontal
} from 'lucide-react';

const categories = [
  { icon: Wrench, title: 'Plomería', count: 234, color: 'from-blue-500 to-blue-600' },
  { icon: Zap, title: 'Electricidad', count: 189, color: 'from-yellow-500 to-orange-500' },
  { icon: Paintbrush, title: 'Pintura', count: 156, color: 'from-pink-500 to-rose-500' },
  { icon: Code, title: 'Desarrollo Web', count: 421, color: 'from-purple-500 to-indigo-600' },
  { icon: Camera, title: 'Fotografía', count: 98, color: 'from-teal-500 to-cyan-600' },
  { icon: Truck, title: 'Transporte', count: 145, color: 'from-green-500 to-emerald-600' },
  { icon: Baby, title: 'Cuidado Infantil', count: 203, color: 'from-rose-400 to-pink-500' },
  { icon: Hammer, title: 'Construcción', count: 312, color: 'from-gray-600 to-gray-700' }
];

const featuredWorkers = [
  {
    name: 'Carlos Mendoza',
    profession: 'Electricista Certificado',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 15000,
    location: 'Ciudad de Quibdo',
    availability: 'Disponible',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1636218685495-8f6545aadb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHRlY2huaWNpYW4lMjB3b3JrfGVufDF8fHx8MTc3MDIzNzA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    skills: ['Instalaciones', 'Reparaciones', 'Emergencias']
  },
  {
    name: 'Ana García',
    profession: 'Desarrolladora Full Stack',
    rating: 5.0,
    reviews: 89,
    hourlyRate: 35000,
    location: 'barrio tomas perez',
    availability: 'Disponible',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1695891689981-0be360e84d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMjAwNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    skills: ['React', 'Node.js', 'UI/UX']
  },
  {
    name: 'Miguel Torres',
    profession: 'Maestro de Obras',
    rating: 4.8,
    reviews: 156,
    hourlyRate: 30000,
    location: 'Cesar conton',
    availability: 'Ocupado',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1678803262971-329b90abaa51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXIlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcwMjM3MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    skills: ['Construcción', 'Remodelación', 'Supervisión']
  },
  {
    name: 'Laura Martínez',
    profession: 'Niñera Profesional',
    rating: 5.0,
    reviews: 943,
    hourlyRate: 15000,
    location: 'Medrano',
    availability: 'Disponible',
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1600563093202-337471bde37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGNhcmUlMjBuYW5ueSUyMGNoaWxkcmVufGVufDF8fHx8MTc3MDIzNzA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    skills: ['Primeros Auxilios', 'Educación', 'Experiencia']
  }
];

const featuredJobs = [
  {
    title: 'Electricista para Instalación Comercial',
    company: 'Constructora Del Valle',
    type: 'Proyecto',
    budget: '$2,500',
    duration: '5 días',
    applicants: 12,
    description: 'Se necesita electricista certificado para instalación eléctrica en local comercial. Incluye cableado, tablero y luminarias.',
    tags: ['Electricidad', 'Comercial', 'Certificación requerida'],
    urgent: true
  },
  {
    title: 'Desarrollador React para App Web',
    company: 'TechStart Solutions',
    type: 'Freelance',
    budget: '$3,800',
    duration: '3 semanas',
    applicants: 28,
    description: 'Buscamos desarrollador React para crear plataforma de gestión empresarial con integración de APIs.',
    tags: ['React', 'TypeScript', 'API'],
    urgent: false
  },
  {
    title: 'Cuidadora de Niños - Tiempo Parcial',
    company: 'Familia Rodríguez',
    type: 'Medio Tiempo',
    budget: '$600/sem',
    duration: 'Indefinido',
    applicants: 7,
    description: 'Familia busca niñera responsable para cuidado de 2 niños (4 y 7 años) por las tardes. Experiencia y referencias requeridas.',
    tags: ['Niños', 'Tardes', 'Referencias'],
    urgent: false
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'register'>('home');
  const [searchType, setSearchType] = useState<'worker' | 'employer' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (type: 'worker' | 'employer') => {
    setSearchType(type);
    // Scroll to the relevant section
    setTimeout(() => {
      const element = document.getElementById(type === 'worker' ? 'jobs-section' : 'workers-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Si estamos en login o registro, mostrar esas vistas
  if (currentPage === 'login') {
    return (
      <div>
        <Navigation 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <LoginPage 
          onBack={() => setCurrentPage('home')}
          onSwitchToRegister={() => setCurrentPage('register')}
        />
      </div>
    );
  }

  if (currentPage === 'register') {
    return (
      <div>
        <Navigation 
          onLoginClick={() => setCurrentPage('login')}
          onRegisterClick={() => setCurrentPage('register')}
        />
        <RegisterPage 
          onBack={() => setCurrentPage('home')}
          onSwitchToLogin={() => setCurrentPage('login')}
        />
      </div>
    );
  }

  // Vista principal (home)
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        onLoginClick={() => setCurrentPage('login')}
        onRegisterClick={() => setCurrentPage('register')}
      />
      <Hero onSearchTypeChange={handleSearchTypeChange} />
      
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={searchType === 'worker' ? 'Buscar trabajos, proyectos...' : 'Buscar electricistas, desarrolladores, cuidadores...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-indigo-700 transition-all shadow-lg flex items-center gap-2 justify-center">
              <Search className="w-5 h-5" />
              <span>Buscar</span>
            </button>
            <button className="px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2 justify-center">
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtros</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explora por <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Categorías</span>
            </h2>
            <p className="text-lg text-gray-600">Encuentra exactamente lo que necesitas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                count={category.count}
                color={category.color}
                onClick={() => console.log(`Clicked ${category.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workers Section */}
      <section id="workers-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Trabajadores <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Destacados</span>
              </h2>
              <p className="text-lg text-gray-600">Profesionales verificados y con excelentes reseñas</p>
            </div>
            <button className="hidden md:block px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all">
              Ver Todos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorkers.map((worker, index) => (
              <WorkerCard key={index} {...worker} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section id="jobs-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Oportunidades <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Recientes</span>
              </h2>
              <p className="text-lg text-gray-600">Trabajos y proyectos publicados recientemente</p>
            </div>
            <button className="hidden md:block px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all">
              Ver Todos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Únete a miles de profesionales y empleadores que ya confían en nuestra plataforma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Crear Cuenta Gratis
            </button>
            <button className="px-8 py-4 bg-purple-800 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-white/20">
              Conocer Más
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">TalentoMatch</h3>
              <p className="text-sm">Conectando talento con oportunidades desde 2026</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Para Trabajadores</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Buscar Empleo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Crear Perfil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Para Empleadores</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Publicar Trabajo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buscar Talento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 TalentoMatch. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
