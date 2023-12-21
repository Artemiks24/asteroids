import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import type { RootState } from '../../redux/store';


const Favorites: FC = () => {

    const Auth = useSelector((state: RootState) => state.posts.isAuth);
    const router = useRouter();

    useEffect(() => {
        if (!Auth) {
            router.push('/signup');
        }
    }, [Auth, router]);


    return (
        <>
            {Auth ? <div>Favorites</div> : null}
        </>
    );
};

export default Favorites;