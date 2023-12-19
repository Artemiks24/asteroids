import Footer from '../components/Footer/Footer';
import HeaderWrapper from '../components/Header/HeaderWrapper';

import Posts from '../components/Posts/Posts';
import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
    return (
        <div className={styles.container}>
            <HeaderWrapper />
            <main className={styles.main}>
                <Image priority={true} className={styles.img} src='http://localhost:3000/aster.svg' alt='planet' width={400} height={400} />
                <div className={styles.mainContainer}>
                    <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
                    <h3 className={styles.subtitle}>в километрах | в лунных орбитах</h3>
                    <Posts />
                </div>
            </main>
            <Footer />
        </div>
    );
}