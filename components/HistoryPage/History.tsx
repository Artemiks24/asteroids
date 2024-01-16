import React, { FC, useEffect, useState } from 'react';
import styles from './History.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from "../../redux/store";
import { useRouter } from 'next/navigation';
import { app } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get } from "firebase/database";
import { setLoading } from '../../redux/features/posts/postsSlice';
import { setUser } from '../../redux/features/users/usersSlices';
import Loader from '../Loader/Loader';

const History: FC = () => {

    const auth = getAuth(app);
    const dispatch = useDispatch();
    const [links, setLinks] = useState<string[]>([]);
    const loading = useSelector((state: RootState) => state.posts.loading);
    const router = useRouter();
    const Auth = useSelector((state: RootState) => state.users.isAuth);
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedData = JSON.parse(userData);
            dispatch(setUser(parsedData));
        }
        else {
            router.push('/signup');
        }
    }, [dispatch, router]);

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;

            if (!user) {
                return new Promise((resolve,) => {
                    const unsubscribe = auth.onAuthStateChanged((user) => {
                        if (user) {
                            unsubscribe();
                            resolve(user);
                        }
                    });
                });
            }

            return user;
        };


        fetchData().then((user) => {
            const database = getDatabase();
            const userId = user.uid;
            const userLinksRef = ref(database, `apipost/${userId}`);
            get(userLinksRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const fetchedData: string[] = [];
                        snapshot.forEach((childSnapshot) => {
                            fetchedData.push(childSnapshot.val());
                        });
                        setLinks(fetchedData);
                    }
                    dispatch(setLoading(false));
                })
                .catch((error) => {
                    dispatch(setLoading(false));
                    console.error('Error fetching data:', error);
                });
        });
    }, [auth.currentUser, auth, dispatch]);


    if (loading) {
        return <Loader />;
    }

    return (
        <> {Auth ? (<div className={styles.wrapper}>
            <h2 className={styles.title}>История ссылок</h2>
            <ul className={styles.list}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link} target="_blank">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>) : null}

        </>
    );
};

export default History;