import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-congruencial-lineal',
  templateUrl: './congruencial-lineal.page.html',
  styleUrls: ['./congruencial-lineal.page.scss'],
})
export class CongruencialLinealPage {

  seedX0: number | undefined;
  constantA: number | undefined;
  constantC: number | undefined;
  modM: number | undefined;
  numToGenerate: number | undefined;
  results: { iteration: number, Xi: number, truncatedRi: number, roundedRi: number, fullRi: number }[] = [];
  showFullDecimals: boolean = false;  // Propiedad para controlar la visualización de decimales completos

  constructor(private alertController: AlertController) {}

  generateNumbers() {
    if (this.seedX0 === undefined || this.constantA === undefined || this.constantC === undefined || this.modM === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      this.showAlert('Por favor, ingresa todos los parámetros correctamente.');
      return;
    }

    this.results = [];
    let Xi = this.seedX0;

    for (let i = 1; i <= this.numToGenerate; i++) {
      Xi = (this.constantA * Xi + this.constantC) % this.modM;
      const fullRi = Xi / (this.modM - 1);

      // Verificar si el número ya ha sido generado
      if (this.results.some(result => result.Xi === Xi)) {
        this.showAlert('Se ha generado un número repetido, la secuencia se detiene.');
        return;  // Detenemos la generación si se encuentra un número repetido
      }

      // Redondear o truncar ri dependiendo del estado del toggle
      const roundedRi = parseFloat(fullRi.toFixed(4)); // Redondear a 4 decimales
      const truncatedRi = Math.floor(fullRi * 10000) / 10000; // Truncar a 4 decimales

      this.results.push({
        iteration: i,
        Xi: Xi,
        truncatedRi: truncatedRi,
        roundedRi: roundedRi,
        fullRi: fullRi
      });
    }
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
