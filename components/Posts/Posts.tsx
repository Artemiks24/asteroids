import { FC } from 'react';
import styles from './Posts.module.css';
import { getPosts } from '../../helper/FetchPosts';
import { Ipost } from '../../helper/types';
import Post from '../Post/Post';

const Posts: FC = async () => {

    const allPosts = await getPosts();


    return (
        <div className={styles.postList}>
            {allPosts.map((post: Ipost) => (
                <Post key={post.id} name={post.name} kilometers={post.close_approach_data[0].miss_distance.kilometers}
                    lunar={post.close_approach_data[0].miss_distance.lunar}
                    date={post.close_approach_data[0].close_approach_date}
                    diameter={post.estimated_diameter.meters.estimated_diameter_max}
                    danger={post.is_potentially_hazardous_asteroid}
                    id={post.neo_reference_id}
                />
            ))}
        </div>
    );
};

export default Posts;




