import { User } from './user';
import { Favorite } from './favorite';
import { LendAndBorrow } from './lendAndBorrow';

export class YourInfo {
    userId: number;
    info: LendAndBorrow;
    favorite: Favorite;
    username: string;
    email: string;
    constructor(userId: number, info: LendAndBorrow, favorite: Favorite, username: string, email: string) {
        this.userId = userId;
        this.info = info;
        this.favorite = favorite;
        this.username = username;
        this.email = email;
    }

}