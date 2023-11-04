import styles from './Sobre.module.css';
import topLoja from '../../../public/assets/toploja.png';
import Image from 'next/image';

function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.sobre}>
                <div className={styles.image}>
                    <Image src={topLoja} alt='Loja top pizza delivery' />
                </div>
                <div className={styles.history}>
                    <p>
                        A TOP nasceu da vontade de 2 amigos em montar um negócio próprio, seria a realização de um sonho que eles
                        conversavam desde a época de faculdade. A escolha de uma pizzaria delivery surgiu depois da visita de um dos
                        proprietários a Natal que percebeu a carência desse segmento de pizzaria na cidade, que somado a sua paixão por
                        pizzas deu início a montagem do negócio.
                    </p>
                    <p>
                        A TOP PIZZA DELIVERY  já nasceu com vontade de se destacar no mercado de pizzarias
                        delivery em Natal-RN. Unimos um produto de qualidade, usando ingredientes pré selecionados
                        com uma promoção nunca vista na cidade. Trabalhamos com diferenciais que fazem da nossa
                        pizzaria uma das melhores de Natal, somos a pioneira a oferecer bordas recheadas grátis,
                        utilizamos forno á lenha, são 25 sabores na promoção de Segunda á Sexta-feira, e o cliente
                        pode acompanhar toda montagem da sua pizza, no caso de um pedido via balcão.
                    </p>
                    <p>
                        Delimitamos uma área de atendimento dentro da Zona Sul de Natal para garantir rapidez e agilidade
                        na entrega ( veja área delivery), garantindo a pizza chega quentinha e saborosa no local indicado.
                    </p>
                    <p>
                        Conheça a TOP PIZZA DELIVERY , compartilhe desse momento maravilhoso que é saborear uma de nossas pizzas. 
                    </p>
            </div>
            </div>
        </div>
    );
}

export default Sobre;
