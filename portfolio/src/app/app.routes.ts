import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [ 
{ path: '', redirectTo: '/nav-bar', pathMatch: 'full' },
{ path: 'nav-bar', component: NavBarComponent }];
