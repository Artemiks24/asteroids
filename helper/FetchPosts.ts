import { getCurrentDate } from "./date";
import { PostsResult } from "./types";
const date = getCurrentDate();


export async function getPosts(): Promise<PostsResult> {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return data.near_earth_objects[date] || [];
    } catch (error) {
        return error as Error;
    }
}
