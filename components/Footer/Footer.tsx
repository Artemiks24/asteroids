import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.wrapper}>
            <p>© Все права и планета защищены</p>
            <p>2023</p>
        </footer>
    );
};

export default Footer;
