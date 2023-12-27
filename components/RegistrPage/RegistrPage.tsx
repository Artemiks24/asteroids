import React, { FC } from 'react';
import styles from './RegistrPage.module.css';
import { Typography } from '@mui/material';
import FormAuth from '../FormAuth/FormAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/features/users/usersSlices';
import { useRouter } from 'next/navigation';
import { ISignin } from '../../helper/types';


const RegistrPage: FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleRegister = ({ email, password }: ISignin) => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then(token => {
                    const userData = {
                        email: user.email,
                        id: user.uid,
                        token: token
                    };
                    localStorage.setItem('userData', JSON.stringify(userData));
                    dispatch(setUser(userData));
                    router.push('/');
                });
            })
            .catch(() => router.push('/modal'));
    };

    return (
        <div className={styles.wrapper}>
            <Typography variant="h5" component="div">
                Welcome
            </Typography>
            <FormAuth buttonText='Sign up' onSubmit={handleRegister} />
        </div>
    );
};

export default RegistrPage;