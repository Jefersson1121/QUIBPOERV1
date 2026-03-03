import { UserPlus, Search, MessageSquare, CheckCircle } from 'lucide-react';

const workerSteps = [
  {
    icon: UserPlus,
    title: 'Crea tu Perfil',
    description: 'Registra tus habilidades, experiencia y disponibilidad en minutos'
  },
  {
    icon: Search,
    title: 'Explora Oportunidades',
    description: 'Encuentra trabajos que se ajusten a tu perfil y expectativas'
  },
  {
    icon: MessageSquare,
    title: 'Conecta con Empleadores',
    description: 'Comunícate directamente y negocia las mejores condiciones'
  },
  {
    icon: CheckCircle,
    title: 'Trabaja y Recibe Pagos',
    description: 'Completa el trabajo y recibe tu pago de forma segura'
  }
];

const employerSteps = [
  {
    icon: UserPlus,
    title: 'Regístrate Gratis',
    description: 'Crea tu cuenta de empleador sin costo alguno'
  },
  {
    icon: Search,
    title: 'Publica tu Necesidad',
    description: 'Describe el servicio que necesitas con todos los detalles'
  },
  {
    icon: MessageSquare,
    title: 'Revisa Candidatos',
    description: 'Evalúa perfiles verificados y selecciona el mejor'
  },
  {
    icon: CheckCircle,
    title: 'Contrata con Confianza',
    description: 'Inicia el proyecto con garantías de calidad y pago seguro'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">Proceso Simple</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Funciona?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Para Trabajadores */}
          <div>
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-6 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-2">Para Trabajadores</h3>
              <p className="text-purple-100">Encuentra oportunidades que impulsen tu carrera</p>
            </div>
            
            <div className="space-y-6">
              {workerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-purple-600" />
                        <h4 className="font-bold text-lg text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Para Empleadores */}
          <div>
            <div className="bg-gradient-to-br from-orange-500 to-pink-600 text-white p-6 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-2">Para Empleadores</h3>
              <p className="text-orange-100">Encuentra el talento que tu negocio necesita</p>
            </div>
            
            <div className="space-y-6">
              {employerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-orange-600" />
                        <h4 className="font-bold text-lg text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
