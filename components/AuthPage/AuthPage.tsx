'use client';

import React, { FC } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import styles from './AuthPage.module.css';
import { useForm } from 'react-hook-form';
import { PasswordValidate, EmailValidate } from './validate';


const AuthPage: FC = () => {
    interface ISignin {
        email: string,
        password: string
    }

    const { register,
        formState: { errors },
        handleSubmit,
    } = useForm<ISignin>();


    const onSubmit = async (event: ISignin) => {
        const data = {
            email: event.email,
            password: event.password,
        };
        console.log(data);
    };

    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" component="div">
                Войдите
            </Typography>
            <Typography className={styles.subtitle} variant="subtitle1" component="div">
                чтобы получить доступ
            </Typography>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="email"
                    size="small"
                    label="Email"
                    type="email"
                    color='success'
                    {...register('email', EmailValidate)}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    color='success'
                    size='small'
                    {...register('password', PasswordValidate)}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <Button className={styles.button} type='submit' color="success" variant="contained" >
                    Войти
                </Button>
            </form>
        </div>
    );
};

export default AuthPage;
