// pages/index.js
import Layout from '../componentes/Layout';
import Login from '../pages/Login'; // Importa la página de inicio de sesión
const Home = () => {
  return (
    <Layout>
      <h1>Bienvenido al servicio de Biblioteca </h1>
      <Login/>
    </Layout>
  );
};

export default Home;
