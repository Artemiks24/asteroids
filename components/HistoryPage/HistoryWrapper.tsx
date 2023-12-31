'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../redux/provider';
import History from './History';

const HistoryWrapper: FC = () => {

    return (
        <StoreProvider>
            <History />
        </StoreProvider>

    );
};

export default HistoryWrapper;