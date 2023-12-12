import React, { FC } from 'react';

import AuthPage from '../../components/AuthPage/AuthPage';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <AuthPage />
            <Footer />
        </>
    );
};

export default SignIn;