'use client';
import React, { FC } from 'react';
import styles from './RegistrPage.module.css';
import { Typography } from '@mui/material';
import FormAuth from '../FormAuth/FormAuth';
import { StoreProvider } from '../../app/provider';


const RegistrPage: FC = () => {

    const buttonText = 'Зарегестрироваться';

    return (
        <StoreProvider>
            <div className={styles.wrapper}>
                <Typography variant="h5" component="div">
                    Добро пожаловать
                </Typography>
                <FormAuth buttonText={buttonText} />
            </div>
        </StoreProvider>

    );
};

export default RegistrPage;