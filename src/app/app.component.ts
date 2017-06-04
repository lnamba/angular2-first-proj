import { Component } from '@angular/core';
import { TripCardsComponent } from 'app/trip-cards/trip-cards.component';
import { Http } from '@angular/http'
import { TripsService } from './trips.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TripsService]
})
export class AppComponent {
  title = 'app';
}
