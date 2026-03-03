import { X, Eye, EyeOff, Check } from 'lucide-react';
import { useState } from 'react';

interface RegisterProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export function Register({ onClose, onSwitchToLogin }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'trabajador', // trabajador o cliente
  });
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return Math.min(strength, 4);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setFormData({ ...formData, password: pwd });
    setPasswordStrength(calculatePasswordStrength(pwd));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    // Simular proceso de registro
    setTimeout(() => {
      console.log('Register:', formData);
      setLoading(false);
      // Aquí iría la lógica real de registro
    }, 1000);
  };

  const getPasswordStrengthColor = () => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    return colors[passwordStrength - 1] || 'bg-gray-300';
  };

  const getPasswordStrengthText = () => {
    const texts = ['Muy débil', 'Débil', 'Moderada', 'Fuerte'];
    return texts[passwordStrength - 1] || 'Ingresa una contraseña';
  };

  return (
    <div className="fixed inset-0 bg-blue bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative my-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6 rounded-t-2xl">
          <h2 className="text-3xl font-bold text-white">Crear Cuenta</h2>
          <p className="text-purple-100 mt-2">Únete a QUIBPOWER hoy</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-4">
          {/* User Type Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              ¿Qué eres?
            </label>
            <div className="flex gap-3">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="trabajador"
                  checked={formData.userType === 'trabajador'}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  className="hidden"
                />
                <div className={`p-3 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.userType === 'trabajador'
                    ? 'border-purple-600 bg-purple-50 text-purple-600'
                    : 'border-gray-300 text-gray-600'
                }`}>
                  Trabajador
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="userType"
                  value="cliente"
                  checked={formData.userType === 'cliente'}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  className="hidden"
                />
                <div className={`p-3 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.userType === 'cliente'
                    ? 'border-purple-600 bg-purple-50 text-purple-600'
                    : 'border-gray-300 text-gray-600'
                }`}>
                  Cliente
                </div>
              </label>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
              placeholder="Juan Pérez"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
              placeholder="tu.email@ejemplo.com"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
              placeholder="+57 3001234567"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400 pr-12"
                placeholder="Crea una contraseña segura"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.password && (
              <div className="mt-2">
                <div className="flex gap-1 h-2 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full ${
                        i < passwordStrength ? getPasswordStrengthColor() : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className={`text-xs font-semibold ${
                  passwordStrength === 4 ? 'text-green-600' : 'text-gray-600'
                }`}>
                  Fortaleza: {getPasswordStrengthText()}
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400 pr-12"
                placeholder="Repite tu contraseña"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.confirmPassword && (
              <div className="mt-2">
                <p className={`text-sm font-semibold flex items-center gap-2 ${
                  formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <Check className="w-4 h-4" />
                      Las contraseñas coinciden
                    </>
                  ) : (
                    'Las contraseñas no coinciden'
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-purple-600 border-gray-300 rounded mt-0.5"
              required
            />
            <span className="text-sm text-gray-600">
              Acepto los{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
                términos y condiciones
              </a>{' '}
              y la{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold">
                política de privacidad
              </a>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || formData.password !== formData.confirmPassword}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </button>
        </form>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">¿Ya tienes cuenta?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-purple-600 font-bold hover:text-purple-700 transition-colors"
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
