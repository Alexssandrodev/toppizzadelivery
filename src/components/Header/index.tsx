import Image from "next/image";
import logo from '@../../../public/assets/logo.svg';
import styles from './Header.module.css';
import Link from "next/link";
import Button from "../Button";

function Header() {
    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='/'><Image src={logo} width={60} height={60} priority alt="Logotipo top pizza" /></Link>
                <div className={styles.menu}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cardapio">Cardápio</a></li>
                        <li><a href="/lojas">Nossas lojas</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><Button title="Fazer pedido" /></li>
                    </ul>
                </div>
            </div>
        </header>
     );
}

export default Header;
