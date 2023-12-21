export interface IpostProps {
    key: string,
    name: string,
    kilometers: string,
    lunar: string,
    date: string,
    diameter: number,
    danger: boolean,
    id: string,
}
export type PostsResult = Ipost[];
export interface Ipost {
    id: string;
    name: string;
    estimated_diameter: Estimateddiameter;
    close_approach_data: Closeapproachdatum[];
    is_potentially_hazardous_asteroid: boolean;
    neo_reference_id: string;
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

export type VisibleButtonProps = {
    id: string;
};

export type PostsState = {
    isAuth: boolean;
    favoritePosts: Record<string, boolean>;
};

export interface ISignin {
    email: string;
    password: string;
}

export type FormAuthProps = {
    buttonText: string;
};