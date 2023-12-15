'use client';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './LoginPage.module.css';
import FormAuth from '../FormAuth/FormAuth';
import Link from 'next/link';
import { StoreProvider } from '../../app/provider';

const LoginPage: FC = () => {

    const buttonText = 'Войти';

    return (
        <StoreProvider>
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
        </StoreProvider>

    );
};

export default LoginPage;
