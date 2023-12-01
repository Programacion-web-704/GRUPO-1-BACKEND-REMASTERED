import '../estilos/todo.css'
import '../estilos/header.css'
import '../estilos/nav.css'
import '../estilos/cuerpo.css'
import '../estilos/div.css'
import '../estilos/footer.css'
import '../estilos/button.css'


import { AppProps } from 'next/app'
import { DemoProvider } from '../context/demo'
//import { UserProvider } from './context/plantillaContext.js';




export default function MyApp({ Component, pageProps }) {
    return (
        <DemoProvider>
            <Component {...pageProps} />
        </DemoProvider>
    )
}
