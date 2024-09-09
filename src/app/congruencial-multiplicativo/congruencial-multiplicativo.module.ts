import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongruencialMultiplicativoPageRoutingModule } from './congruencial-multiplicativo-routing.module';

import { CongruencialMultiplicativoPage } from './congruencial-multiplicativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongruencialMultiplicativoPageRoutingModule
  ],
  declarations: [CongruencialMultiplicativoPage]
})
export class CongruencialMultiplicativoPageModule {}
