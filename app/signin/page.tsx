import React, { FC } from 'react';

import LoginPage from '../../components/LoginPage/LoginPage';
import Logo from '../../components/Logo/Logo';


const SignIn: FC = () => {
    return (
        <>
            <Logo />
            <LoginPage />
        </>
    );
};

export default SignIn;