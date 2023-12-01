import Layout from "../componentes/Layout_admin.js"
import { useState } from 'react'
import Image from "next/image.js"
const Formulario = () => {
    // acordarme del useState
    const [state, setState] = useState({
        NuevoLibro: {
            titulo:"",
            autor:"",
            editorial:"",
            categoria:"",
            anio:"",
            idioma:"",
            isbn_libro:"",
            imagen:"",
            compra:"",
            reserva:"",
        },
    }
    )
    const [seccionActual, setSeccionActual] = useState("NuevoLibro");



    function mngmtChange(e) {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [seccionActual]: {
                ...prevState[seccionActual],
                [name]: value,
            },
        }));
    };

    function mngmtSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        for (let [key, value] of Object.entries(state[seccionActual])) {
            formData.append(key, value);
        }

        console.log(formData)
        // Una ve que se ha cargado el FormData
        // se envia el formulario normalmente
        // usando fetch ... (T.B.D.)
    }


    const mostrarSeccion = (seccion) => {
        // Cambia la sección actual al hacer clic en los botones
        setSeccionActual(seccion);
    };

    const doEscribir = async () => {
        // Obtener el objeto JSON directamente del estado
        const jsonObject = state.NuevoLibro;
        console.log(jsonObject)

        // Invocar a la API
        try {
            const req = await fetch(
                `/api/libros/agregar`,
                {
                    method: 'POST',
                    body: JSON.stringify({ jsonObject }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const data = await req.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {/* Botones para cambiar la sección */}
            <p>
                <button type="button" onClick={() => mostrarSeccion("NuevoLibro")}>
                    Añadir nuevo recurso
                </button>

            </p>
            <form >
                {/* Campos del formulario para "Datos Personales" */}
                {seccionActual === "NuevoLibro" && (
                    <>
                        <p>Título :
                            <input name="titulo" type="text"
                                placeholder="Ingrese el título"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.titulo}
                                required />
                        </p>
                        <p>Autor o Autores:
                            <input name="autor" type="text"
                                placeholder="Ingresa los autores"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.autor}
                                required />
                        </p>
                        <p>ISBN:
                        <input name="isbn_libro" type="text"
                                placeholder=""
                                onChange={mngmtChange}
                                value={state.NuevoLibro.isbn_libro}
                                required />

                        </p>
                        <p>editorial:
                            <input name="editorial"
                                placeholder="Ingrese la editorial"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.editorial}
                            ></input>

                        </p>
                        <p>categoria:
                            <input name="categoria"
                                placeholder="Ingrese la categoria"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.categoria}
                            ></input>

                        </p>
                        <p>Anio:
                            <input name="anio"
                                placeholder="Ingrese el anio"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.anio}
                            ></input>

                        </p>
                        <p>idioma:
                            <input name="idioma"
                                placeholder="Ingrese el idioma"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.idioma}
                            ></input>

                        </p>
                        <p>compra:
                            <input name="compra"
                                placeholder="Ingrese la compra"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.compra}
                            ></input>

                        </p>
                        <p>reserva:
                            <input name="reserva"
                                placeholder="Ingrese el reserva"
                                onChange={mngmtChange}
                                value={state.NuevoLibro.reserva}
                            ></input>

                        </p>



                    </>)
                }

                <button onClick={doEscribir} >Aceptar</button>

            </form>
        </>
    )
}


const Contacto = () => {
    return (<Layout content={
        <>
        <h1> ...::: Biblioteca :::... </h1>
            <div>

                <Image src="/img.png" width={200} height={300}></Image>
                <Image src="/images.jpg" width={200} height={300}></Image>
                <Formulario />
            </div>
        </>

    }
    ></Layout>
    )
}

export default Contacto
