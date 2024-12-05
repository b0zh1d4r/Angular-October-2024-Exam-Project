import { User } from "./user";

export interface Course {
    title: string,
    description: string,
    imageUrl: string,  
    startDate: number,
    price: number,
    signedCount: number,
    owner: User,
    __v: number
}