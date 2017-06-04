import { Component, OnInit } from '@angular/core';
import { TripsService } from '../trips.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  days: {}
  tileStyles = {
    'tile-styles':true
  }
  constructor(private _tripsService: TripsService) { }

  ngOnInit() {

    this.days = this._tripsService.myDays

  }

  
}
