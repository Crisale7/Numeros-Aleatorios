import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongruencialMultiplicativoPage } from './congruencial-multiplicativo.page';

const routes: Routes = [
  {
    path: '',
    component: CongruencialMultiplicativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongruencialMultiplicativoPageRoutingModule {}
