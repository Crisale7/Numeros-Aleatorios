import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadradosMediosPage } from './cuadrados-medios.page';

const routes: Routes = [
  {
    path: '',
    component: CuadradosMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadradosMediosPageRoutingModule {}
