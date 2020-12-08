import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { MapComponent } from './components/map/map.component';
import { CameraEventsComponent } from './components/camera-events/camera-events.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, CameraListComponent, MapComponent, CameraEventsComponent],
  imports: [BrowserModule, AppRoutingModule, AgmCoreModule.forRoot({
    apiKey:'AIzaSyDabyzkdAvGR28BchPhe0WuFQhuIkqYQZw'
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
