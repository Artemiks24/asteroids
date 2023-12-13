import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './LoginPage.module.css';
import FormAuth from '../FormAuth/FormAuth';
import Link from 'next/link';

const LoginPage: FC = () => {

    const buttonText = 'Войти';

    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" component="div">
                Войдите
            </Typography>
            <Typography className={styles.subtitle} variant="subtitle1" component="div">
                чтобы получить доступ
            </Typography>
            <FormAuth buttonText={buttonText} />
            <div className={styles.subWrapper}>
                <p>Нет аккаунта?</p>
                <Link className={styles.link} href='/signup'>Зарегестрируйтесь</Link>
            </div>


        </div>
    );
};

export default LoginPage;
