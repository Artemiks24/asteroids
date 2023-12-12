import { FC } from 'react';
import styles from './Header.module.css';
import Authorize from '../Authorize/Authorize';
import Logo from '../Logo/Logo';


const Head: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                <Authorize />
            </div>
        </header>
    );
};

export default Head;
