import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.wrapper}>
            <p>© All rights and planet are reserved</p>
            <p>2023</p>
        </footer>
    );
};

export default Footer;
