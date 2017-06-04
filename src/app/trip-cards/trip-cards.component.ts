import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TripsService } from '../trips.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-trip-cards',
  templateUrl: './trip-cards.component.html',
  styleUrls: ['./trip-cards.component.css']
})
export class TripCardsComponent implements OnInit {
  // trips: Observable<any[]>;
  trips: {}
  
  constructor(private _tripsService: TripsService) { }

  ngOnInit() {
    // this.trips = this._tripsService.getTrips()
    //   .catch((err) => {
    //     console.log(err)
    //   })

    //  this.trips = this._tripsService.getTrips()
    // .catch((err) => { 
    //     console.log(err);  // don't do this, show user a message
    //     return Observable.of(true)
    // }); 

    this.trips = this._tripsService.myTrips;
  }

}
