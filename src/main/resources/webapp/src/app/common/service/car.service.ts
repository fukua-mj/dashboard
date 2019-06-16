import { Car } from './../model/car';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get('././assets/demo/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res['data'])
                    .then(data => { return data; });
    }
}
