import { User } from "./user";

export interface Course {
    _id: string,
    title: string,
    description: string,
    imageUrl: string,  
    startDate: number,
    price: number,
    signedCount: number,
    owner: User,
    __v: number,
}