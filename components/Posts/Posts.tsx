import { FC } from 'react';
import Post from '../Post/Post';
import styles from './Posts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../../redux/features/posts/postsSlice';
const Posts: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={styles.postList}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Posts;

