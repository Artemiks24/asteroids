'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../redux/provider';
import RegistrPage from '../../components/RegistrPage/RegistrPage';
import Logo from '../../components/Logo/Logo';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <StoreProvider>
                <RegistrPage />
            </StoreProvider>

        </>
    );
};

export default SignIn;