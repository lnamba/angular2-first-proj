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
  

}
