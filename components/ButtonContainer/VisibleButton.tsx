/* eslint-disable no-prototype-builtins */
import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Gradient } from '../../consts';
import { toggleFavorites } from '../../redux/features/posts/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import type { VisibleButtonProps } from '../../helper/types';
import Loader from '../Loader/Loader';


const VisibleButton: FC<VisibleButtonProps> = ({ o }) => {
    const favoritePosts = useSelector((state: RootState) => state.posts.favoritePosts);
    const hasKey = favoritePosts.hasOwnProperty(o.id);
    const dispatch = useDispatch();
    const Auth = useSelector((state: RootState) => state.users.isAuth);

    const handleButtonClick = () => {
        dispatch(toggleFavorites(o));
    };

    return (
        <>
            {!Auth ? (
                <div style={{ width: 64, height: 36 }}></div>
            ) : (hasKey ? (
                <Button onClick={handleButtonClick} style={{ background: Gradient.basketButton }} variant="contained">
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