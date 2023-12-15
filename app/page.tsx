'use client';
import Footer from '../components/Footer/Footer';
import Head from '../components/Header/Header';
import Posts from '../components/Posts/Posts';
import styles from './page.module.css';
import Image from 'next/image';
import { StoreProvider } from './provider';



export default function Home() {
    return (
        <StoreProvider>
            <div className={styles.container}>
                <Head />
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
        </StoreProvider>
    );
}