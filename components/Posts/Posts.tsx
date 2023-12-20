import { FC } from 'react';
import styles from './Posts.module.css';
import { getPosts } from '../../helper/FetchPosts';
import Image from 'next/image';
import { Gradient } from '../../consts';
import { Button } from '@mui/material';
import { formatDate } from '../../helper/formatDate';
import { Ipost } from '../../helper/types';
const Posts: FC = async () => {

    const allPosts = await getPosts();
    console.log(allPosts);

    return (
        <div className={styles.postList}>
            {allPosts.map((post: Ipost) => (
                <div key={post.id} style={{ background: Gradient.borderPost }} className={styles.container}>
                    <h5 className={styles.title}>{post.name}</h5>
                    <div className={styles.wrapper}>
                        <div className={styles.description}>
                            <div className={styles.distanceWrapper}>
                                <p>{`${Number(post.close_approach_data[0].miss_distance.kilometers).toFixed(0)} kilometers`}</p>
                                <p>{`${Number(post.close_approach_data[0].miss_distance.lunar).toFixed(0)} lunar distance`}</p>
                            </div>
                            <Image src='http://localhost:3000/asMini.png' alt='aster' width={25} height={25} />
                            <div className={styles.about}>
                                <p>{formatDate(post.close_approach_data[0].close_approach_date)}</p>
                                <p>{`Ø ${post.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} m`}</p>
                            </div>
                        </div>
                        <div className={styles.interactive}>
                            <Button style={{ background: Gradient.add }} variant="contained" >Add</Button>
                            {/* <Button style={{ background: Gradient.basketButton }} type="primary">In the basket</Button> */}
                            <p>{post.is_potentially_hazardous_asteroid && '⚠ danger'}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;

