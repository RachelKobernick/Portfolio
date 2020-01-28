import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PressKitComponent } from './press-kit/press-kit.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FullCalendarModule } from "@fullcalendar/angular";


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PressKitComponent,
    EventsComponent,
    ContactComponent,
    MediaComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
