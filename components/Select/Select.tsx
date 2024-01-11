'use client';
import { FC, useState, useEffect } from 'react';
import styles from './Select.module.css';
import Post from '../Post/Post';
import { Ipost } from '../../helper/types';
import { getPosts } from '../../helper/FetchPosts';
import { getDatabase, ref, push, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase';


const SelectComponent: FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [clientPosts, setClientPosts] = useState<Ipost[]>([]);
    const [serverPosts, setServerPosts] = useState<Ipost[]>([]);
    const [options, setOptions] = useState<string[]>([]);


    const auth = getAuth(app);
    const apiLink = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${selectedOption}&end_date=${selectedOption}&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`;


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const user = auth.currentUser;
        const userDataString = localStorage.getItem('userData');
        if (userDataString !== null) {
            if (user) {
                const userId = user.uid;
                const database = getDatabase();
                const apiRef = ref(database, `apipost/${userId}`);
                const newApiRef = push(apiRef);
                set(newApiRef,
                    apiLink,
                );
            }

        }
        setSelectedOption(selectedValue);
    };

    useEffect(() => {
        if (selectedOption) {
            fetch(apiLink)
                .then((response) => response.json())
                .then((data) => {
                    const selectedPosts = data.near_earth_objects[selectedOption] || [];
                    setClientPosts(selectedPosts);
                })
                .catch((error) => {
                    console.error('Ошибка при запросе к API:', error);
                });
        }

    }, [selectedOption, apiLink]);


    useEffect(() => {
        const currentDate = new Date();
        const dateOptions = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + index + 1);
            return date.toISOString().slice(0, 10);
        });
        setOptions(dateOptions);
    }, []);


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
                {options.map((date) => (
                    <option key={date} value={date}>
                        {date}
                    </option>
                ))}
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