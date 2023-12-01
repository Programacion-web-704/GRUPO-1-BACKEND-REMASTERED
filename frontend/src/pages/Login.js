// Login.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [credentials, setCredentials] = useState({
    correo: '',
    contrasena: '',
  });

  const router = useRouter();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const userData = await response.json();

        console.log('Usuario encontrado:', userData);

        switch (userData.rol) {
          case 'administrador':
            router.push('/AdminPrincipal');
            break;
          case 'alumno':
            router.push('/AlumnoPrincipal');
            break;
          default:
            // Manejar otros roles si es necesario
            break;
        }
      } else if (response.status === 401) {
        setError('Correo no registrado');
      } else {
        setError('Error en la llamada fetch');
      }
    } catch (error) {
      console.error('Error en la llamada fetch:', error);
      setError('Hubo un error en la llamada fetch.');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form>
        <label>
          Correo Electrónico:
          <input
            type="text"
            name="correo"
            value={credentials.correo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={credentials.contrasena}
            onChange={handleChange}
            required
          />
        </label>
        <button onClick={handleSubmit}>Ingresar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
