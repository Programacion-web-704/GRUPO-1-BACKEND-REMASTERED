import Link from 'next/link'
import Head from 'next/head'

export default props => (
    <>
        <header>
        </header>
        <nav>

            <ul>
                <li><a href="/admin">Inicio</a></li>
                <li><a href="/perfil_admin">Perfil</a></li>
                <li><a href="/biblioteca_admin">Bibliotecas</a></li>
                <li><a href="/login">Log Out</a></li>
            </ul>
        </nav>



        <main>
            {props.content}
        </main>
        <footer>
            <p>Ingenieria de Sistemas &copy; 2023-2 - Programacion Web 704-Grupo 1</p>
        </footer>

    </>
)
