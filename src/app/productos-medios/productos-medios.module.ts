import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosMediosPageRoutingModule } from './productos-medios-routing.module';

import { ProductosMediosPage } from './productos-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosMediosPageRoutingModule
  ],
  declarations: [ProductosMediosPage]
})
export class ProductosMediosPageModule {}
