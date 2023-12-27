'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../redux/provider';
import LoginPage from '../../components/LoginPage/LoginPage';
import Logo from '../../components/Logo/Logo';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <StoreProvider>
                <LoginPage />
            </StoreProvider>
        </>
    );
};

export default SignIn;