import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../componentes/Layout_user";

const AdminPrincipal = () => {
  const router = useRouter();
  const usuarioNombre = localStorage.getItem("usuarioNombre");

  return (
    <Layout
      content={
        <>
          <Head>
            <title>Página Principal Alumno</title>
          </Head>
          <div className="dos-columnnas">
            <div className="columnna">
            <h1 className="titulo">Bienvenido, {usuarioNombre}</h1>
              <p className="divisor"></p>

              <div className="cuadro_principal">
                <h2 className="cuadro_texto_titulo cuadro_principal_titulo">
                  Últimas reservas
                </h2>
                <div className="cuadro_principal_contenido_doblebarra">
                  <div className="cuadro_secundario cuadro_secundario_contenidocontenedorprincipal cuadro_secundario_header centrar">
                    <div className="centrar">

                    </div>
                  </div>
                  <div className="cuadro_secundario cuadro_secundario_contenidocontenedorprincipal cuadro_secundario_header centrar">
                    <div className="centrar">
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="cuadro_principal">
                <h2 className="cuadro_texto_titulo cuadro_principal_titulo">
                  Próximos a Vencer
                </h2>
                <div className="cuadro_principal_contenido_doblebarra">
                  <div className="cuadro_secundario cuadro_secundario_contenidocontenedorprincipal cuadro_secundario_header centrar">
                    <div className="centrar">
                     
                    </div>
                  </div>
                  <div className="cuadro_secundario cuadro_secundario_contenidocontenedorprincipal cuadro_secundario_header centrar">
                    <div className="centrar">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    ></Layout>
  );
};

export default AdminPrincipal;
