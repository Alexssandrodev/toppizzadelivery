import Image from 'next/image';
import motoboyImg from '../../../public/assets/motoboy.svg';
import Button from '../Button';
import styles from './Motoboy.module.css';

function Motoboy() {
    return ( 
        <div className={styles.container}>
            <div className={styles.motoboy}>
                <Image src={motoboyImg} alt='Motoboy' />
                <div className={styles.infos}>
                    <p>Faça seu pedido e receba sua pizza em casa!</p>
                    <Button title='Fazer pedido' />
                </div>
            </div>
        </div>
     );
}

export default Motoboy;
