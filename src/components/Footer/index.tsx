import Link from 'next/link';
import logo from '../../../public/assets/logo.svg';
import Image from 'next/image';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <Link href='/'><Image src={logo} width={60} height={60} priority alt="Logotipo top pizza" /></Link>
                    <div className={styles.menu}>
                        <h3>Menu</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/cardapio">Cardápio</a></li>
                            <li><a href="/lojas">Nossas lojas</a></li>
                            <li><a href="/sobre">Sobre</a></li>
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </div>

                    <div className={styles.infos}>
                        <h3>Endereço</h3>
                        <p>Av. Prudente de Morais 4806 , Loja 01 - Lagoa Nova - Natal/RN
                            84 20109495 / 998956073 / 987205552 (Whatsapp)
                        </p>
                        <p>© 2023 Top Pizza Delivery - Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
