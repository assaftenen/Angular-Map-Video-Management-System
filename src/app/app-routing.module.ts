import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { MapComponent } from './components/map/map.component';
import { CameraEventsComponent } from './components/camera-events/camera-events.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
