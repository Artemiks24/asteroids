'use client';

import React, { FC } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import styles from './AuthPage.module.css';


const AuthPage: FC = () => {

    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" component="div">
                войдите
            </Typography>
            <Typography variant="subtitle1" component="div">
                чтобы получить доступ
            </Typography>
            <form className={styles.form} onSubmit={() => null}>
                <TextField size='small' className={styles.input} label="Логин" color="success" />
                <TextField size='small' className={styles.input} label="Пароль" color="success" />
                <Button className={styles.button} type='submit' color="success" variant="contained" >
                    Войти
                </Button>
            </form>

        </div>
    );
};

export default AuthPage;
