import React, { useState } from 'react';

const CambiarContraseña: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    alert('Tu nueva contraseña se ha guardado con éxito');
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 focus:outline-none"
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>

      <div className="max-w-xl w-full p-8 bg-gray-800 text-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Cambio de Contraseña</h2>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Contraseña Actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white"
          />
          <div className="flex space-x-4">
            <input
              type="password"
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white"
            />
            <input
              type="password"
              placeholder="Confirmar nueva Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white"
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-4">Requerimientos de Contraseña:</p>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            <li>Mínimo 8 caracteres, más largo mejor</li>
            <li>Al menos una mayúscula y una minúscula</li>
            <li>Al menos un símbolo, número o espacio en blanco</li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handlePasswordChange}
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none"
          >
            Guardar Cambios
          </button>
          <button
            onClick={() => {
              setCurrentPassword('');
              setNewPassword('');
              setConfirmPassword('');
            }}
            className="border border-gray-400 px-4 py-2 rounded-lg text-white hover:bg-gray-700 focus:outline-none"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CambiarContraseña;
