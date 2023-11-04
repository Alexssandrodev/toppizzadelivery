import Image from 'next/image';
import pizzaImg from '../../../public/assets/pizza.jpeg';
import Button from '../Button';
import styles from './Card.module.css';
import Link from 'next/link';
import Pizza from '@/utils/pizza';

interface CardProps {
    pizza: Pizza
}

function Card(props: CardProps) {
    return ( 
        <div className={styles.card}>
            <Image
                src={pizzaImg}
                width={800}
                height={800}
                style={{objectFit: "cover", width: "100%", height: "20rem", borderRadius: "1rem"}}
                alt='Pizza'
            />
            <div className={styles.infos}>
                <div className={styles.title}>
                    <h3>{props.pizza.title}</h3>
                    <span>R$ {props.pizza.price}</span>
                </div>
                <p>{props.pizza.description}</p>
                <Link href="/pizza-details" >
                    <Button title='Mais detalhes' />
                </Link>
            </div>
        </div>
     );
}

export default Card;
