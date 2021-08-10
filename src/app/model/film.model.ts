import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class Film{
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    language_id: number;
    original_language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: string; 
    special_features: string;
    last_update: Timestamp<Time>;
}