import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KnowMoreComponent} from './know-more/know-more.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'know-more',
    component: KnowMoreComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
