import React, { FC } from 'react';

import LoginPage from '../../components/LoginPage/LoginPage';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <LoginPage />
            <Footer />
        </>
    );
};

export default SignIn;