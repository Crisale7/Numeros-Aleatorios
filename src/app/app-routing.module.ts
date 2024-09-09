import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cuadrados-medios',
    loadChildren: () => import('./cuadrados-medios/cuadrados-medios.module').then( m => m.CuadradosMediosPageModule)
  },
  {
    path: 'productos-medios',
    loadChildren: () => import('./productos-medios/productos-medios.module').then( m => m.ProductosMediosPageModule)
  },
  {
    path: 'congruencial-multiplicativo',
    loadChildren: () => import('./congruencial-multiplicativo/congruencial-multiplicativo.module').then( m => m.CongruencialMultiplicativoPageModule)
  },
  {
    path: 'congruencial-lineal',
    loadChildren: () => import('./congruencial-lineal/congruencial-lineal.module').then( m => m.CongruencialLinealPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
