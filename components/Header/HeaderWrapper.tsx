'use client';
import { FC } from 'react';
import Head from './Header';
import { StoreProvider } from '../../redux/provider';

const HeaderWrapper: FC = () => {
    return (
        <StoreProvider>
            <Head />
        </StoreProvider>

    );
};

export default HeaderWrapper;