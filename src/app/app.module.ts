import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { TripCardsComponent } from './trip-cards/trip-cards.component';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { TripsService } from './trips.service'

@NgModule({
  declarations: [ //components here
    AppComponent,
    TripCardsComponent,
  ],
  imports: [ //modules
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
  ],
  providers: [TripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
