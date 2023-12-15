'use client';
import { FC } from 'react';
import styles from './Header.module.css';
import UnAuthorize from '../UnAuthorize/UnAuthorize';
import Logo from '../Logo/Logo';
import Authorize from '../Aythorize/Authorize';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';





const Head: FC = () => {
    const Auth = useSelector((state: RootState) => state.posts.isAuth);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                {Auth ? <Authorize /> : <UnAuthorize />}
            </div>
        </header>
    );
};

export default Head;
