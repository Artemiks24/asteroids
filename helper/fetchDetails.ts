import { IDetails } from "./types";


export async function getDetails(param: string): Promise<IDetails> {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${param}?api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return data;
    } catch (error) {
        return Promise.reject(new Error('Failed to fetch data'));
    }
}
