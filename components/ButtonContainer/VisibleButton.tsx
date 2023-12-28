/* eslint-disable no-prototype-builtins */
import React, { FC, useEffect } from 'react';
import { Button } from '@mui/material';
import { Gradient } from '../../consts';
import { addFavorites, deleteFavorites } from '../../redux/features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import type { IpostProps, VisibleButtonProps } from '../../helper/types';




const VisibleButton: FC<VisibleButtonProps> = ({ o }) => {
    const favoritePosts = useSelector((state: RootState) => state.posts.favoritePosts);
    const hasKey = favoritePosts.hasOwnProperty(o.id);
    const dispatch = useDispatch();
    const Auth = useSelector((state: RootState) => state.users.isAuth);

    useEffect(() => {
        const favoritesFromStorage = localStorage.getItem('favorites');

        if (favoritesFromStorage) {
            const favoritesArray = JSON.parse(favoritesFromStorage);
            favoritesArray.forEach((item: IpostProps) => {
                dispatch(addFavorites(item));
            });
        }
    }, [dispatch]);



    const handleButtonClick = () => {
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