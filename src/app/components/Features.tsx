import { Shield, Zap, Award, HeadphonesIcon, CreditCard, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Pagos Seguros',
    description: 'Sistema de pago garantizado que protege tanto a trabajadores como empleadores',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Zap,
    title: 'Conexión Rápida',
    description: 'Encuentra el talento perfecto o el trabajo ideal en minutos',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Award,
    title: 'Verificación de Perfiles',
    description: 'Todos los perfiles son verificados para garantizar confianza y calidad',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte 24/7',
    description: 'Equipo de atención disponible para ayudarte en cualquier momento',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: CreditCard,
    title: 'Múltiples Métodos de Pago',
    description: 'Acepta y recibe pagos de forma flexible y conveniente',
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Profesional',
    description: 'Accede a oportunidades que impulsan tu carrera y experiencia',
    color: 'from-teal-500 to-cyan-600'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">¿Por qué elegirnos?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Características que nos hacen <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Únicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una plataforma diseñada pensando en la seguridad, rapidez y confianza para ambas partes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
