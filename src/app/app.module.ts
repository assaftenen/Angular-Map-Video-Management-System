import { HttpClientModule } from '@angular/common/http';
// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { MapComponent } from './components/map/map.component';
import { CameraEventsComponent } from './components/camera-events/camera-events.component';
import {AgmCoreModule} from '@agm/core';
import { AboutComponent } from './container/about/about.component';
import { HomeComponent } from './container/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, CameraListComponent, MapComponent, CameraEventsComponent,],
  exports: [ HeaderComponent, HomeComponent, AboutComponent,],
  imports: [BrowserModule, AppRoutingModule, AgmCoreModule.forRoot({
    apiKey:'AIzaSyDabyzkdAvGR28BchPhe0WuFQhuIkqYQZw'
  }), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
