import { Eye, EyeOff, Check, ArrowLeft, Upload } from 'lucide-react';
import { useState } from 'react';

interface RegisterPageProps {
  onBack: () => void;
  onSwitchToLogin: () => void;
}

export function RegisterPage({ onBack, onSwitchToLogin }: RegisterPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Datos básicos
    userType: 'trabajador', // trabajador o cliente
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Trabajador
    workerName: '',
    specialty: '',
    experience: '',
    cv: null as File | null,
    workAvailability: '',
    
    // Cliente
    clientType: 'persona', // persona o empresa
    personName: '',
    companyName: '',
    companyNit: '',
    locationCity: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [cvFileName, setCvFileName] = useState('');

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

  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setFormData({ ...formData, cv: file });
      setCvFileName(file.name);
    } else {
      alert('Por favor selecciona un archivo PDF válido');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      console.log('Register:', formData);
      setLoading(false);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header con botón atrás */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Inicio
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block space-y-8">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Únete a QUIBPOWER
              </h1>
              <p className="text-xl text-gray-600">
                Crea tu cuenta en segundos y comienza a explorar oportunidades
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Registro Rápido</h3>
                  <p className="text-gray-600">Completa tu perfil en menos de 2 minutos</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Verificación Gratuita</h3>
                  <p className="text-gray-600">Sin costos ocultos, totalmente transparente</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Acceso Inmediato</h3>
                  <p className="text-gray-600">Comienza a trabajar de inmediato después del registro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Crear Cuenta</h2>
            <p className="text-gray-600 mb-8">Únete a miles de usuarios en QUIBPOWER</p>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-screen overflow-y-auto">
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
                      👨‍💼 Trabajador
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
                      🏢 Cliente
                    </div>
                  </label>
                </div>
              </div>

              {/* TRABAJADOR FIELDS */}
              {formData.userType === 'trabajador' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      value={formData.workerName}
                      onChange={(e) => setFormData({ ...formData, workerName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Especialidad / Profesión
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                      required
                    >
                      <option value="">Selecciona tu especialidad</option>
                      <option value="electricista">Electricista</option>
                      <option value="plomero">Plomero</option>
                      <option value="pintor">Pintor</option>
                      <option value="desarrollador">Desarrollador Web</option>
                      <option value="fotogrago">Fotógrafo</option>
                      <option value="transportista">Transportista</option>
                      <option value="niera">Niñera</option>
                      <option value="constructor">Constructor</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Años de Experiencia
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                      required
                    >
                      <option value="">Selecciona experiencia</option>
                      <option value="sin_experiencia">Sin experiencia</option>
                      <option value="1-2">1-2 años</option>
                      <option value="3-5">3-5 años</option>
                      <option value="5-10">5-10 años</option>
                      <option value="mas-10">Más de 10 años</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Disponibilidad
                    </label>
                    <select
                      value={formData.workAvailability}
                      onChange={(e) => setFormData({ ...formData, workAvailability: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all"
                      required
                    >
                      <option value="">Selecciona disponibilidad</option>
                      <option value="tiempo_completo">Tiempo Completo</option>
                      <option value="medio_tiempo">Medio Tiempo</option>
                      <option value="flexible">Flexible</option>
                      <option value="disponible_urgencias">Disponible para Urgencias</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      📄 Subir Hoja de Vida (PDF)
                    </label>
                    <label className="w-full px-4 py-3 border-2 border-dashed border-purple-300 rounded-lg hover:border-purple-600 transition-colors cursor-pointer bg-purple-50">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleCVUpload}
                        className="hidden"
                        required
                      />
                      <div className="flex items-center justify-center gap-2">
                        <Upload className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-600 font-semibold">
                          {cvFileName ? `📎 ${cvFileName}` : 'Haz clic para subir tu CV'}
                        </span>
                      </div>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">Solo archivos PDF, máximo 5MB</p>
                  </div>
                </>
              )}

              {/* CLIENTE FIELDS */}
              {formData.userType === 'cliente' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      ¿Qué tipo de cliente eres?
                    </label>
                    <div className="flex gap-3">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="clientType"
                          value="persona"
                          checked={formData.clientType === 'persona'}
                          onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                          className="hidden"
                        />
                        <div className={`p-3 border-2 rounded-lg text-center font-semibold transition-all ${
                          formData.clientType === 'persona'
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-gray-300 text-gray-600'
                        }`}>
                          👤 Persona Natural
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name="clientType"
                          value="empresa"
                          checked={formData.clientType === 'empresa'}
                          onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                          className="hidden"
                        />
                        <div className={`p-3 border-2 rounded-lg text-center font-semibold transition-all ${
                          formData.clientType === 'empresa'
                            ? 'border-purple-600 bg-purple-50 text-purple-600'
                            : 'border-gray-300 text-gray-600'
                        }`}>
                          🏢 Empresa
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Persona Natural */}
                  {formData.clientType === 'persona' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          value={formData.personName}
                          onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
                          placeholder="María González"
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* Empresa */}
                  {formData.clientType === 'empresa' && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          Nombre de la Empresa
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
                          placeholder="Constructora XYZ SAS"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                          NIT de la Empresa
                        </label>
                        <input
                          type="text"
                          value={formData.companyNit}
                          onChange={(e) => setFormData({ ...formData, companyNit: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
                          placeholder="123456789-0"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Ciudad / Ubicación
                    </label>
                    <input
                      type="text"
                      value={formData.locationCity}
                      onChange={(e) => setFormData({ ...formData, locationCity: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all placeholder-gray-400"
                      placeholder="Quibdó, Chocó"
                      required
                    />
                  </div>
                </>
              )}

              {/* COMMON FIELDS */}
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
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
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
      </div>
    </div>
  );
}
