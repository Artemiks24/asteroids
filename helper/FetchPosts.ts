import { getCurrentDate } from "./date";
const date = getCurrentDate();
import { Ipost } from "./types";

export async function getPosts(): Promise<Ipost[] | Error> {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`);
        const data = await response.json();
        return data.near_earth_objects[date] || []; 
    } catch (error) {
        return error as Error;
    }
}
