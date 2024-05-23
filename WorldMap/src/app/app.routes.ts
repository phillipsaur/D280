import { Routes } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';
import { MapPageComponent } from './map-page/map-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeHomeComponent },
    { path: 'map', component: MapPageComponent }
];