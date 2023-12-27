import { FC, useEffect, useState } from 'react';
import styles from './Header.module.css';
import UnAuthorize from '../UnAuthorize/UnAuthorize';
import Logo from '../Logo/Logo';
import Authorize from '../Aythorize/Authorize';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setUser } from '../../redux/features/users/usersSlices';
import Loader from '../Loader/Loader';


const Head: FC = () => {
    const Auth = useSelector((state: RootState) => state.users.isAuth);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            try {
                const parsedData = JSON.parse(userData);
                dispatch(setUser(parsedData));
            } catch (error) {
                console.error('Error parsing user data from local storage:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [dispatch]);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                {loading ? (
                    <div style={{ paddingRight: 30 }}><Loader position='static' /></div>
                ) : (
                    Auth ? <Authorize /> : <UnAuthorize />
                )}
            </div>
        </header>
    );

};

export default Head;
