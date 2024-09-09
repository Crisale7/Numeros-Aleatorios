import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosMediosPage } from './productos-medios.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosMediosPageRoutingModule {}
