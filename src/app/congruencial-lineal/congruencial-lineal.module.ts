import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongruencialLinealPageRoutingModule } from './congruencial-lineal-routing.module';

import { CongruencialLinealPage } from './congruencial-lineal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongruencialLinealPageRoutingModule
  ],
  declarations: [CongruencialLinealPage]
})
export class CongruencialLinealPageModule {}
