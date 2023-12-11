import Basket from '../components/Basket/Basket';
import Posts from '../components/Posts/Posts';
import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
    return (
        <main className={styles.main}>
            <Image className={styles.img} src='http://localhost:3000/aster.svg' alt='planet' width={400} height={400} />
            <div className={styles.mainContainer}>
                <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
                <h3 className={styles.subtitle}>в километрах | в лунных орбитах</h3>
                <Posts />
                <Basket />
            </div>
        </main>
    );
}