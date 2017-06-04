import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TripsService {

  constructor(private _http: Http) { }

  getTrips() {
    // return this._http.get('/')
    //   .map(response => response.json())
    //   .toPromise()
    //   .catch((err: any) => {
    //     console.log(err);
    //     return Promise.reject(err)
    //   })

      return this._http.get('/trips')
        .map(response => response.json())
        .catch(this._handleError);

  }
    _handleError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }

    myTrips = [
      {
        id: 1,
        tripname: 'Canada',
        start_date: new Date('2017-09-20'),
        end_date: new Date('2017-09-30')
      },
      {
        id: 2,
        tripname: 'New York City',
        start_date: new Date('2017-12-15'),
        end_date: new Date('2017-12-20')
      },
      {
        id: 3,
        tripname: 'Palm Springs',
        start_date: new Date('2018-01-10'),
        end_date: new Date('2018-01-13')
      }
    ]
  

}
