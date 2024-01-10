'use client';
import { FC, useState, useEffect } from 'react';
import styles from './Select.module.css';
import Post from '../Post/Post';
import { Ipost } from '../../helper/types';
import { getPosts } from '../../helper/FetchPosts';

const SelectComponent: FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [clientPosts, setClientPosts] = useState<Ipost[]>([]);
    const [serverPosts, setServerPosts] = useState<Ipost[]>([]);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        setSelectedOption(selectedValue);
    };

    useEffect(() => {
        if (selectedOption) {
            fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${selectedOption}&end_date=${selectedOption}&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`)
                .then((response) => response.json())
                .then((data) => {
                    const selectedPosts = data.near_earth_objects[selectedOption] || [];
                    setClientPosts(selectedPosts);
                })
                .catch((error) => {
                    console.error('Ошибка при запросе к API:', error);
                });
        }
    }, [selectedOption]);

    useEffect(() => {
        async function fetchServerPosts() {
            const posts = await getPosts();
            setServerPosts(posts);
        }

        fetchServerPosts();
    }, []);

    return (
        <div>
            <select className={styles.select} value={selectedOption} onChange={handleSelectChange}>
                <option value="">Выберите дату</option>
                <option value="2024-01-02">2024-01-02</option>
                <option value="2024-01-01">2024-01-01</option>
                <option value="2024-01-04">2024-01-04</option>
                <option value="2024-01-03">2024-01-03</option>
            </select>
            <div className={styles.postList}>
                {selectedOption ? (
                    clientPosts.map((post: Ipost) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            kilometers={post.close_approach_data[0].miss_distance.kilometers}
                            lunar={post.close_approach_data[0].miss_distance.lunar}
                            date={post.close_approach_data[0].close_approach_date}
                            diameter={post.estimated_diameter.meters.estimated_diameter_max}
                            danger={post.is_potentially_hazardous_asteroid}
                            id={post.neo_reference_id}
                        />
                    ))
                ) : (
                    serverPosts.map((post: Ipost) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            kilometers={post.close_approach_data[0].miss_distance.kilometers}
                            lunar={post.close_approach_data[0].miss_distance.lunar}
                            date={post.close_approach_data[0].close_approach_date}
                            diameter={post.estimated_diameter.meters.estimated_diameter_max}
                            danger={post.is_potentially_hazardous_asteroid}
                            id={post.neo_reference_id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SelectComponent;