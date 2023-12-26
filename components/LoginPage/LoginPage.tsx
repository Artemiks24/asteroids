import React, { FC } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Typography } from '@mui/material';
import styles from './LoginPage.module.css';
import FormAuth from '../FormAuth/FormAuth';
import Link from 'next/link';
import { app } from '../../firebase';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/users/usersSlices';
import { handleToggleAuth } from '../../helper/ToggleAuth';
import { ISignin } from '../../helper/types';

const LoginPage: FC = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = ({ email, password }: ISignin) => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then(token => {
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: token
                    }));
                    handleToggleAuth();
                    router.push('/');
                });
            })
            .catch(() => alert('Invalid User'));
    };
    return (
        <div className={styles.wrapper}>
            <Typography variant="h4" component="div">
                Sign in
            </Typography>
            <Typography className={styles.subtitle} variant="subtitle1" component="div">
                to access
            </Typography>
            <FormAuth buttonText='Sign in' onSubmit={handleLogin} />
            <div className={styles.subWrapper}>
                <p>No account?</p>
                <Link className={styles.link} href='/signup'>Sign up</Link>
            </div>
        </div>
    );
};

export default LoginPage;
