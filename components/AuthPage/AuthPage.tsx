'use client';

import React, { FC } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import styles from './AuthPage.module.css';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

const AuthPage: FC = () => {
    interface ISignin {
        login: string,
        password: string
    }

    const { handleSubmit, control } = useForm<ISignin>();

    const onsubmit: SubmitHandler<ISignin> = (data) => console.log(data);

    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" component="div">
                войдите
            </Typography>
            <Typography variant="subtitle1" component="div">
                чтобы получить доступ
            </Typography>
            <form className={styles.form} onSubmit={handleSubmit(onsubmit)}>
                <Controller
                    control={control}
                    name='login'
                    rules={{ required: true }}
                    render={({ field }) => {
                        return (
                            <TextField
                                size='small'
                                className={styles.input}
                                label="Логин"
                                color="success"
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                            />
                        );
                    }}
                />
                <Controller
                    control={control}
                    name='password'
                    rules={{ required: true }}
                    render={({ field }) => {
                        return (
                            <TextField
                                size='small'
                                className={styles.input}
                                label="Пароль"
                                color="success"
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                            />
                        );
                    }}
                />
                <Button className={styles.button} type='submit' color="success" variant="contained" >
                    Войти
                </Button>
            </form>
        </div>
    );
};

export default AuthPage;
