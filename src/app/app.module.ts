import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { TripCardsComponent } from './trip-cards/trip-cards.component';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { TripsService } from './trips.service';
import { ViewDetailComponent } from './view-detail/view-detail.component'

@NgModule({
  declarations: [ //components here
    AppComponent,
    TripCardsComponent,
    ViewDetailComponent,
  ],
  imports: [ //modules
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'trip-cards',
        pathMatch:'full',
      }
    ]),
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})



export class AppModule { }
