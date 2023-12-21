import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import type { RootState } from '../../redux/store';


const History: FC = () => {

    const Auth = useSelector((state: RootState) => state.posts.isAuth);
    const router = useRouter();

    useEffect(() => {
        if (!Auth) {
            router.push('/signup');
        }
    }, [Auth, router]);


    return (
        <>
            {Auth ? <div>history</div> : null}
        </>
    );
};

export default History;