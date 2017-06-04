import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [ //components here
    AppComponent,
    TripCardsComponent,
    ViewDetailComponent,
  ],
  imports: [ //modules
    BrowserModule,
    NgbModule.forRoot(),
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
      }
    ]),
    HttpModule,
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
