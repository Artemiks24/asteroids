'use client';
import { FC } from 'react';
import Posts from './Posts';
import { StoreProvider } from '../../app/provider';

const PostsWrapper: FC = () => {
    return (
        <StoreProvider>
            <Posts />
        </StoreProvider>

    );
};

export default PostsWrapper;
