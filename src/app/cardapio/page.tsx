import { savorys } from '@/model/savorys';
import styles from './Cardapio.module.css';
import Savory from '@/utils/savory';
import { sweets } from '@/model/sweets';

function Cardapio() {

    const savorysList: Savory[] = savorys;
    const sweetsList: Savory[] = sweets;

    return ( 
        <div className={styles.container}>
            <div className={styles.cardapio}>
                <h3>Cardápio</h3>

                <h2>Pizzas salgadas</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope='col'>Pizza</th>
                            <th scope='col'>Ingredientes</th>
                            <th scope='col'>Tamanhos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savorysList.length === 0 ? <p>Loading...</p>
                        : savorysList.map((savory, index) => (
                        <tr key={savory.id} className={index % 2 === 0 ? styles.bg : ''}>
                            <td>{savory.title}</td>
                            <td>{savory.ingredients}</td>
                            <td className={styles.sizes}>{savory.sizes}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Pizzas doces</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th scope='col'>Pizza</th>
                            <th scope='col'>Ingredientes</th>
                            <th scope='col'>Tamanhos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sweetsList.length === 0 ? <p>Loading...</p>
                            : sweetsList.map((sweet, index) => (
                            <tr key={sweet.id} className={index % 2 === 0 ? styles.bg : ''}>
                                <td>{sweet.title}</td>
                                <td>{sweet.ingredients}</td>
                                <td className={styles.sizes}>{sweet.sizes}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Cardapio;
