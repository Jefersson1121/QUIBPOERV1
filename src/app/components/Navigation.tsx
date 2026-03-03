import { Search, Menu, Bell, User, Briefcase, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export function Navigation({ onLoginClick, onRegisterClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              QUIBPOWER
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Buscar Trabajo</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contratar</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Cómo Funciona</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={onLoginClick}
              className="px-4 py-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors"
            >
              Iniciar Sesión
            </button>
            <button 
              onClick={onRegisterClick}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Registrarse
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">Inicio</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">Buscar Trabajo</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">Contratar</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">Cómo Funciona</a>
            <div className="pt-2 border-t border-gray-200 space-y-2">
              <button 
                onClick={onLoginClick}
                className="block w-full text-left px-4 py-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg"
              >
                Iniciar Sesión
              </button>
              <button 
                onClick={onRegisterClick}
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg"
              >
                Registrarse
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
