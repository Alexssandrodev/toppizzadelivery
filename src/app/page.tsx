import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/Card'
import { pizzas } from '@/model/pizzas'
import Motoboy from '@/components/Motoboy';

export default function Home() {

  const pizzasList = pizzas;

  return (
    <main className={styles.container}>
      <div className={styles.cards}>
        {pizzasList.length === 0 ?
        <p>Loading...</p> : pizzasList.map((pizza) => (
          <Card pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </main>
  )
}
