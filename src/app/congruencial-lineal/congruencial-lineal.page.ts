import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private alertController: AlertController, private cdr: ChangeDetectorRef ) {}

  updateMaxLifePeriod() {
    if ((this.numToGenerate ?? 0) > (this.modM ?? 0)) {
      this.showAlert(`El periodo de vida máximo es ${this.modM}. Has ingresado un valor mayor.`);
      return;
    }
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  generateNumbers() {
    if (this.seedX0 === undefined || this.constantA === undefined || this.constantC === undefined || this.modM === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      this.showAlert('Por favor, ingresa todos los parámetros correctamente.');
      return;
    }
  
    // Verificar si c es relativamente primo a m
    if (this.gcd(this.constantC, this.modM) !== 1) {
      this.showAlert('La constante aditiva c debe ser relativamente primo al módulo m.');
      return;
    }
  
    // Verificar si la cantidad de números a generar no excede el periodo máximo
    if (this.numToGenerate > this.modM) {
      this.showAlert(`El número máximo de números a generar es ${this.modM}. Has ingresado un valor mayor.`);
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
        return;
      }
  
      const roundedRi = parseFloat(fullRi.toFixed(4));
      const truncatedRi = Math.floor(fullRi * 10000) / 10000;
  
      this.results.push({
        iteration: i,
        Xi: Xi,
        truncatedRi: truncatedRi,
        roundedRi: roundedRi,
        fullRi: fullRi
      });
    }
  }
  
  // Función para calcular el máximo común divisor (MCD)
  gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return this.gcd(b, a % b);
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
