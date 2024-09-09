import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]); // Navega a la ruta seleccionada
  }

}
