import { Injectable } from '@angular/core';
import { LendAndBorrow } from '../models/lendAndBorrow';
import { YourInfo } from '../models/yourInfo';
import { Favorite } from '../models/favorite';

@Injectable({
    providedIn: 'root'
})
export class Store {
    private message = 'hello';
    private lendAndBorrow = new LendAndBorrow(-1, -1, -1, -1);
    private yourInfo = new YourInfo(-1,new LendAndBorrow(0,0,0,40), new Favorite(0,0,0,0,0,0,0,0,0,0,0,0,0,0),'tarou');

    constructor() {}
    setMessage(text: string): void {
        this.message = text;
    }
    getMessage(): string {
        return this.message;
    }

    setLend(x: number): void {
        this.lendAndBorrow.lend = x;
    }
    setLocation(latitude: number, longitude: number): void {
        this.lendAndBorrow.latitude = latitude;
        this.lendAndBorrow.longitude = longitude;
    }
    setAfterOK(x: number): void {
        this.lendAndBorrow.after_arrival = x;
    }

    getLendAndBorrow(): LendAndBorrow {
        return this.lendAndBorrow;
    }

    setYourInfo(x: YourInfo): void {
        this.yourInfo = x;
    }
    getYourInfo(): YourInfo {
        return this.yourInfo;
    }

}
