import { createContext, useContext,useEffect, useState } from "react";

const Context = createContext();

export function DemoProvider({ children }) {
    // Verifica si está en el lado del cliente antes de acceder a localStorage
    const isClient = typeof window !== "undefined";

    // Intenta obtener los datos del usuario desde el localStorage solo en el lado del cliente
    const storedUser = isClient ? localStorage.getItem("usuario") : null;
    const initialUser = storedUser ? JSON.parse(storedUser) : {
      id: null,
      nombres: "USUARIO",
      apellidos: "",
      doc_iden: "",
      numero: "",
      correo: "",
      contraseña: "",
      rol: "",
      foto: "",
    };
  
    const [usuario, setUsuario] = useState(initialUser);
  
    // Actualiza el localStorage solo en el lado del cliente
    useEffect(() => {
      if (isClient) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
      }
    }, [usuario, isClient]);

  return (
    <Context.Provider value={[usuario, setUsuario]}>
        {children}
    </Context.Provider>
  );
}

export function useDemoContext() {
  return useContext(Context);
}