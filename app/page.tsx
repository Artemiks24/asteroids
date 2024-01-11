import { FC } from 'react';
import Footer from '../components/Footer/Footer';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import styles from './page.module.css';
import Image from 'next/image';
import SelectComponent from '../components/Select/Select';

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <HeaderWrapper />
            <main className={styles.main}>
                <Image priority={true} className={styles.img} src='http://localhost:3000/aster.svg' alt='planet' width={400} height={400} />
                <div className={styles.mainContainer}>
                    <h1 className={styles.title}>Nearest asteroid approaches</h1>
                    <h3 className={styles.subtitle}>in kilometers | in lunar orbits</h3>
                    <div className={styles.mainWrapper}>
                        <SelectComponent />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;