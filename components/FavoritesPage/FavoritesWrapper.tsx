'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../app/provider';
import Favorites from './Favorites';



const FavoritesWrapper: FC = () => {

    return (
        <StoreProvider>
            <Favorites />
        </StoreProvider>

    );
};

export default FavoritesWrapper;