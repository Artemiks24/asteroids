import { FC } from 'react';
import styles from './Header.module.css';
import UnAuthorize from '../UnAuthorize/UnAuthorize';
import Logo from '../Logo/Logo';
import Authorize from '../Aythorize/Authorize';


const Head: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                <Authorize />
                <UnAuthorize />
            </div>
        </header>
    );
};

export default Head;
