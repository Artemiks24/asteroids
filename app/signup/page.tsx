import React, { FC } from 'react';

import RegistrPage from '../../components/RegistrPage/RegistrPage';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <RegistrPage />
            <Footer />
        </>
    );
};

export default SignIn;