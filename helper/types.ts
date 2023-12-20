export interface Ipost {
    id: string;
    name: string;
    estimated_diameter: Estimateddiameter;
    close_approach_data: Closeapproachdatum[];
    is_potentially_hazardous_asteroid: boolean;
}
interface Estimateddiameter {
    meters: Meters;
}interface Meters {
    estimated_diameter_max: number;
}
interface Closeapproachdatum {
    close_approach_date: string;
    miss_distance: Missdistance;
}
interface Missdistance {
    lunar: string;
    kilometers: string;
}