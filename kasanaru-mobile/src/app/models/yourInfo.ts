import { User } from './user';
import { Favorite } from './favorite';
import { LendAndBorrow } from './lendAndBorrow';

export class YourInfo {
    userId: number;
    info: LendAndBorrow;
    favorite: Favorite;
    username: string;
    latlng: google.maps.LatLngLiteral;
    constructor(userId: number, info: LendAndBorrow, favorite: Favorite, username: string, lat: number, lng: number) {
        this.userId = userId;
        this.info = info;
        this.favorite = favorite;
        this.username = username;
        this.latlng = { lat: lat, lng: lng }
    }

}