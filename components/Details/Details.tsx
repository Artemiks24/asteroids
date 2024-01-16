import { FC } from 'react';
import styles from './Details.module.css';
import { getDetails } from '../../helper/fetchDetails';
import { Gradient } from '../../consts';
import { DetailsProps } from '../../helper/types';


const Details: FC<DetailsProps> = async ({ id }) => {

    const details = await getDetails(id);


    return (
        <>
            <div style={{ background: Gradient.borderPost }} className={styles.container}>
                <h5 className={styles.title}>{details.name}</h5>
                <div className={styles.wrapper}>
                    <div>nasa_jpl_url : {details.nasa_jpl_url}</div>
                    <div>absolute_magnitude_h: {details.absolute_magnitude_h}</div>
                    <div>estimated_diameter (kilometers): {details.estimated_diameter.kilometers.estimated_diameter_min}</div>
                    <div>is_potentially_hazardous_asteroid: {details.is_potentially_hazardous_asteroid}</div>
                    <div>last_observation_date: {details.orbital_data.last_observation_date}</div>
                    <div>data_arc_in_days: {details.orbital_data.data_arc_in_days}</div>
                    <div>equinox: {details.orbital_data.equinox}</div>
                    <div>orbital_period: {details.orbital_data.orbital_period}</div>
                </div>
            </div>
        </>
    );
};

export default Details;