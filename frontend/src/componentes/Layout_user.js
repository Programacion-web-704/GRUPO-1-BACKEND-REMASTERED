import Link from 'next/link'
import Head from 'next/head'

export default props1 => (
    <>
        <header>
        </header>
        <nav>
            <ul>
                <li><a href="/user">Inicio</a></li>
                <li><a href="/perfil_user">Perfil</a></li>
                <li><a href="/perfil_prestamo">Prestamos</a></li>
                <li><a href="/login">Log Out</a></li>
            </ul>
        </nav>



        <main>
            {props1.content}
        </main>
        <footer>
            <p>Ingenieria de Sistemas &copy; 2023-2 - Programacion Web 704-Grupo 1</p>
        </footer>

    </>
)
