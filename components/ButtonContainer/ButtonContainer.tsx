'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../redux/provider';
import VisibleButton from './VisibleButton';
import type { VisibleButtonProps } from '../../helper/types';


const ButtonContainer: FC<VisibleButtonProps> = ({ o }) => {

    return (
        <>
            <StoreProvider>
                <VisibleButton o={o} />
            </StoreProvider>
        </>
    );
};

export default ButtonContainer;