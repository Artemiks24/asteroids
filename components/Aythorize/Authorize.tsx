import { FC } from 'react';
import { Gradient } from '../../consts';
import Link from 'next/link';
import styles from './Authorize.module.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/features/users/usersSlices';
import { clearFavorites } from '../../redux/features/posts/postsSlice';
const Authorize: FC = () => {

    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(removeUser());
        dispatch(clearFavorites());
        localStorage.removeItem('userData');
        localStorage.removeItem('favorites');
        localStorage.removeItem('firebase:host:asteroids-75868-default-rtdb.firebaseio.com');
    };


    return (
        <div className={styles.wrapper}>
            <Link href='/favorites'><Button style={{ background: Gradient.login }} variant="contained">
                Favorites
            </Button></Link>
            <Link href='/history'><Button style={{ background: Gradient.login }} variant="contained" >
                History
            </Button></Link>
            <Link href='/'><Button onClick={handleSignOut} style={{ background: Gradient.login }} variant="contained" >
                Sign out
            </Button></Link>
        </div>


    );
};

export default Authorize;