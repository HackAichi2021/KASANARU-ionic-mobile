export class LendAndBorrow {
    latitude: number;
    longitude: number;
    lend: number;
    after_arrival: number;
    constructor(latitude: number, longitude: number, lend: number, after_arrival: number){
        this.latitude = latitude;
        this.longitude = longitude;
        this.lend = lend;
        this.after_arrival = after_arrival;
    }
}
