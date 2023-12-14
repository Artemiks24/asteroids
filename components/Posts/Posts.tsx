import { FC } from 'react';

import Post from '../Post/Post';

import styles from './Posts.module.css';

const Posts: FC = () => {
    return (
        <div className={styles.postList}>
            <Post />
            <Post />
            <Post />
            <Post />
            {/* <Post />
            <Post /> */}
        </div>
    );
};

export default Posts;

