import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PpfComponent } from './pages/ppf/ppf.component';
import { WrappingComponent } from './pages/wrapping/wrapping.component';
import { DetailingComponent } from './pages/detailing/detailing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/ppf', component: PpfComponent },
  { path: 'services/wrapping', component: WrappingComponent },
  { path: 'services/detailing', component: DetailingComponent },
  { path: '**', redirectTo: '' }
];
