import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Store {
    private message = 'hello';

    constructor() {}
    setMessage(text: string) {
        this.message = text;
    }
    getMessage() {
        return this.message;
    }
}
