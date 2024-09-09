import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-congruencial-multiplicativo',
  templateUrl: './congruencial-multiplicativo.page.html',
  styleUrls: ['./congruencial-multiplicativo.page.scss'],
})
export class CongruencialMultiplicativoPage {

  seed: number | undefined; // x0
  k: number | undefined;
  g: number | undefined;
  numToGenerate: number | undefined;
  results: { fullRi: number, roundedRi: number }[] = []; // Almacena ambos valores
  formulaOption: string = 'option1'; // Por defecto selecciona la primera opción (a = 3 + 8k)
  showFullDecimals: boolean = false; // Controla la visualización de decimales

  constructor(private alertController: AlertController) {}

  async generateNumbers() {
    // Verifica que los valores estén definidos y sean válidos
    if (this.seed === undefined || this.k === undefined || this.g === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      await this.showAlert('Por favor, ingresa todos los valores válidos.');
      return;
    }

    // Asegúrate de que la semilla sea impar
    if (this.seed % 2 === 0) {
      await this.showAlert('La semilla (X0) debe ser un número impar.');
      return;
    }

    // Calcula 'a' basado en la opción seleccionada
    let a;
    if (this.formulaOption === 'option1') {
      a = 3 + 8 * this.k; // Usamos la fórmula a = 3 + 8k
    } else {
      a = 5 + 8 * this.k; // Usamos la fórmula a = 5 + 8k
    }

    // Calcula 'm' correctamente
    const m = Math.pow(2, this.g); // m = 2^g

    // Reinicia los resultados
    this.results = [];
    let Xi = this.seed;

    for (let i = 0; i < this.numToGenerate; i++) {
      // Calcula Xi+1 = (a * Xi) mod m
      Xi = (a * Xi) % m;

      // Calcula ri = Xi / (m - 1)
      const fullRi = Xi / (m - 1);

      // Redondea el número a 4 decimales
      const roundedRi = parseFloat(fullRi.toFixed(4));

      // Verifica si se repite un número antes de agregarlo a los resultados
      if (this.results.some(result => result.fullRi === fullRi)) {
        await this.showAlert('Número repetido detectado. Se ha detenido la generación.');
        break; // Detenemos el ciclo si hay repetición
      }

      // Almacena el resultado completo y redondeado
      this.results.push({ fullRi, roundedRi });
    }
  }

  // Función para mostrar alertas
  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
