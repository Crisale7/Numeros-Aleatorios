import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongruencialLinealPage } from './congruencial-lineal.page';

const routes: Routes = [
  {
    path: '',
    component: CongruencialLinealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongruencialLinealPageRoutingModule {}
