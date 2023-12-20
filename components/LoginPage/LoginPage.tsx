'use client';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './LoginPage.module.css';
import FormAuth from '../FormAuth/FormAuth';
import Link from 'next/link';
import { StoreProvider } from '../../app/provider';

const LoginPage: FC = () => {

    const buttonText = 'Sign in';

    return (
        <StoreProvider>
            <div className={styles.wrapper}>
                <Typography variant="h4" component="div">
                    Sign in
                </Typography>
                <Typography className={styles.subtitle} variant="subtitle1" component="div">
                    to access
                </Typography>
                <FormAuth buttonText={buttonText} />
                <div className={styles.subWrapper}>
                    <p>No account?</p>
                    <Link className={styles.link} href='/signup'>Sign up</Link>
                </div>
            </div>
        </StoreProvider>

    );
};

export default LoginPage;
