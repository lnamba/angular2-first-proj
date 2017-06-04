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
        end_date: new Date('2017-09-23')
      },
      {
        id: 2,
        tripname: 'New York City',
        start_date: new Date('2017-12-15'),
        end_date: new Date('2017-12-16')
      },
    ]

    myDays = [
      {
        id: 1,
        date: new Date('2017-09-20'),
        trip_id: 1
      },
      {
        id: 2,
        date: new Date('2017-09-21'),
        trip_id: 1
      },
      {
        id: 3,
        date: new Date('2017-09-22'),
        trip_id: 1
      },
      {
        id: 4,
        date: new Date('2017-09-23'),
        trip_id: 1
      },
      {
        id: 5,
        date: new Date('2017-12-15'),
        trip_id: 2
      },
      {
        id: 6,
        date: new Date('2017-12-16'),
        trip_id: 2
      }
    ]
  

}
