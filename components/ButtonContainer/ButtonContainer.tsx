'use client';
import React, { FC } from 'react';
import { StoreProvider } from '../../app/provider';
import VisibleButton from './VisibleButton';
import type { VisibleButtonProps } from '../../helper/types';


const ButtonContainer: FC<VisibleButtonProps> = ({ id }) => {


    return (
        <>
            <StoreProvider>
                <VisibleButton id={id} />
            </StoreProvider>

        </>

    );
};

export default ButtonContainer;