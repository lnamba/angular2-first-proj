import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { TripCardsComponent } from './trip-cards/trip-cards.component';
import { MdCardModule, MdButtonModule, MdGridListModule } from '@angular/material';
import { TripsService } from './trips.service';
import { ViewDetailComponent } from './view-detail/view-detail.component'
import { FormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [ //components here
    AppComponent,
    TripCardsComponent,
    ViewDetailComponent,
    PlacesComponent,
  ],
  imports: [ //modules
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'trips',
        pathMatch:'full',
      },
      {
        path: 'trips',
        component: TripCardsComponent
      },
      {
        path: ':id/days',
        component: ViewDetailComponent
      },
      {
        path: ':id/places',
        component: PlacesComponent
      }
    ]),
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})



export class AppModule { }
