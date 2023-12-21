'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../redux/provider';
import Favorites from './Favorites';



const FavoritesWrapper: FC = () => {

    return (
        <StoreProvider>
            <Favorites />
        </StoreProvider>

    );
};

export default FavoritesWrapper;