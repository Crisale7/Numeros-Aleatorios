import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadradosMediosPageRoutingModule } from './cuadrados-medios-routing.module';

import { CuadradosMediosPage } from './cuadrados-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadradosMediosPageRoutingModule
  ],
  declarations: [CuadradosMediosPage]
})
export class CuadradosMediosPageModule {}
