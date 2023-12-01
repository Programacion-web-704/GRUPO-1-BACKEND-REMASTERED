import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from '../componentes/Layout';
import Head from "next/head";
import { useDemoContext, useUserProvider } from "../context/demo";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipo_usuario: "",
    sexo: "",
    correo: "",
    contrasena: "",
  });

  const router = useRouter();
  const [usuario, setUsuario] = useDemoContext();

  const registrarEstado = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const doGuardarJSON = async (e) => {
    e.preventDefault();

    const jsonObject = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      tipo_usuario: formData.tipo_usuario,
      sexo: formData.sexo,
      correo: formData.correo,
      contrasena: formData.contrasena,
    };

    const params = JSON.stringify(jsonObject);

      try{
        const response = await fetch('/api/users/registrar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: params,
        })}
        catch (error) {
          console.error('Error en la llamada fetch:', error);
          setError('Hubo un error en la llamada fetch.');
        }}
  return (
    <Layout>
      <Head>
        <title>Registro</title>
      </Head>
      <h1>Registro</h1>
      <form >
        <label>
          Nombres:
          <input
            type="text"
            name="nombre"
            value={formData.nombres}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <label>
          Apellidos:
          <input
            type="text"
            name="apellido"
            value={formData.apellidos}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <label>
          Tipo de Usuario:
          <input
            type="text"
            name="tipo_usuario"
            value={formData.tipo_usuario}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <label>
          sexo:
          <input
            type="text"
            name="sexo"
            value={formData.sexo}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={registrarEstado}
            required
          />
        </label>
        <br />
        <button onClick={doGuardarJSON}>Registrarse</button>
      </form>
    </Layout>
  );
};

export default Registro;
