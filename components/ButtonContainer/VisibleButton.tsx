/* eslint-disable no-prototype-builtins */
import React, { FC, useEffect } from 'react';
import { Button } from '@mui/material';
import { Gradient } from '../../consts';
import { addFavorites, deleteFavorites } from '../../redux/features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import type { IpostProps, VisibleButtonProps } from '../../helper/types';
import { getDatabase, ref, set, push, remove, get } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase';


const VisibleButton: FC<VisibleButtonProps> = ({ o }) => {
    const favoritePosts = useSelector((state: RootState) => state.posts.favoritePosts);
    const hasKey = favoritePosts.hasOwnProperty(o.id);
    const dispatch = useDispatch();
    const Auth = useSelector((state: RootState) => state.users.isAuth);
    const auth = getAuth(app);
    auth.onAuthStateChanged(() => { });

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;

            if (!user) {
                return new Promise((resolve, reject) => {
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
            const userPostsRef = ref(database, `userPosts/${userId}`);
            get(userPostsRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const fetchedData = [];
                        snapshot.forEach((childSnapshot) => {
                            fetchedData.push(childSnapshot.val());
                        });
                        fetchedData.forEach((post) => {
                            dispatch(addFavorites(post));
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        });
    }, [auth.currentUser, auth, dispatch]);



    const handleButtonClick = () => {
        const user = auth.currentUser;

        if (user) {
            const database = getDatabase();
            const userId = user.uid;
            const userPostsRef = ref(database, `userPosts/${userId}`);
            const newPostRef = push(userPostsRef);
            set(newPostRef, {
                danger: o.danger,
                date: o.date,
                id: o.id,
                name: o.name,
                lunar: o.lunar,
                diameter: o.diameter,
                kilometers: o.kilometers
            })
                .then(() => {
                    dispatch(addFavorites(o)); // Обновление Redux Store после успешного добавления в базу данных
                })
                .catch((error) => {
                    console.error('Ошибка добавления поста в базу данных:', error);
                });
        }
        const favoritesFromStorage = localStorage.getItem('favorites');
        let favoritesArray = [];

        if (favoritesFromStorage) {
            favoritesArray = JSON.parse(favoritesFromStorage);
        }
        favoritesArray.push(o);
        localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        dispatch(addFavorites(o));
    };

    const handleRemoveButtonClick = () => {
        const user = auth.currentUser;

        if (user) {
            const database = getDatabase();
            const userId = user.uid;
            const userPostsRef = ref(database, `userPosts/${userId}`);
            get(userPostsRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach((childSnapshot) => {
                            const postId = childSnapshot.val().id;
                            if (postId === o.id) {
                                const postIdToRemove = childSnapshot.key;
                                const userPostRefToRemove = ref(database, `userPosts/${userId}/${postIdToRemove}`);
                                remove(userPostRefToRemove)
                                    .then(() => {
                                        console.log('Пост успешно удален из базы данных');
                                        dispatch(deleteFavorites(o)); // Обновление Redux Store после успешного удаления из базы данных
                                    })
                                    .catch((error) => {
                                        console.error('Ошибка удаления поста из базы данных:', error);
                                    });
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.error('Ошибка получения данных:', error);
                });
        }
        const favoritesFromStorage = localStorage.getItem('favorites');
        let favoritesArray = [];

        if (favoritesFromStorage) {
            favoritesArray = JSON.parse(favoritesFromStorage);
        }
        favoritesArray = favoritesArray.filter((item: IpostProps) => item.id !== o.id);
        localStorage.setItem('favorites', JSON.stringify(favoritesArray));
        dispatch(deleteFavorites(o));
    };

    return (
        <>
            {!Auth ? (
                <div style={{ width: 64, height: 36 }}></div>
            ) : (hasKey ? (
                <Button onClick={handleRemoveButtonClick} style={{ background: Gradient.basketButton }} variant="contained">
                    In the basket
                </Button>
            ) : (
                <Button onClick={handleButtonClick} style={{ background: Gradient.add }} variant="contained">
                    Add
                </Button>
            )
            )
            }
        </>
    );
};

export default VisibleButton;