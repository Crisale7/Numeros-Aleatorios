import { ChangeDetectorRef, Component } from '@angular/core';
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
  maxLifePeriod: number = 0; // Variable para el periodo de vida máximo
  results: { fullRi: number, roundedRi: number }[] = [];
  formulaOption: string = 'option1'; // Por defecto selecciona la primera opción (a = 3 + 8k)
  showFullDecimals: boolean = false; // Controla la visualización de decimales

  constructor(private alertController: AlertController, private cdr: ChangeDetectorRef) {}

     // Actualiza el periodo de vida máximo basado en el valor de g
  updateMaxLifePeriod() {
    if (this.g !== undefined && this.g > 0 && Number.isInteger(this.g)) {
      this.maxLifePeriod = Math.pow(2, this.g - 2);
    } else {
      this.maxLifePeriod = 0;
    }
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  async generateNumbers() {

    this.updateMaxLifePeriod();
    // Validar si seed, k, g y numToGenerate son válidos
    if (this.seed === undefined || this.k === undefined || this.g === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      await this.showAlert('Por favor, ingresa todos los valores válidos.');
      return;
    }

    // Validar si la semilla (X0) es impar
    if (this.seed % 2 === 0) {
      await this.showAlert('La semilla (X0) debe ser un número impar.');
      return;
    }

     // Verifica que g sea un número entero positivo
  if (this.g <= 0 || !Number.isInteger(this.g)) {
    await this.showAlert('g debe ser un número entero positivo.');
    return;
  }


  // Verifica que k sea un número positivo
  if (this.k <= 0) {
    await this.showAlert('k debe ser un número positivo.');
    return;
  }

  // Calcula el periodo de vida máximo
  const maxLifePeriod = Math.pow(2, this.g-2);

  // Verifica si se intenta generar más números que el periodo de vida máximo
  if (this.numToGenerate > maxLifePeriod) {
    await this.showAlert(`El periodo de vida maximo es: ${maxLifePeriod}.`);
    return;
  }

    // Calcular 'a' basado en la opción seleccionada
    let a;
    if (this.formulaOption === 'option1') {
      a = 3 + 8 * this.k; // Usamos la fórmula a = 3 + 8k
    } else {
      a = 5 + 8 * this.k; // Usamos la fórmula a = 5 + 8k
    }

    // Calcular 'm' correctamente: m = 2^g
    const m = Math.pow(2, this.g);

    // Reiniciar los resultados
    this.results = [];
    let Xi = this.seed;

    for (let i = 0; i < this.numToGenerate; i++) {
      // Calcular Xi+1 = (a * Xi) mod m
      Xi = (a * Xi) % m;

      // Calcular ri = Xi / (m - 1)
      const fullRi = Xi / (m - 1);

      // Redondear a 4 decimales
      const roundedRi = parseFloat(fullRi.toFixed(4));

      // Verificar si se repite un número antes de agregarlo
      if (this.results.some(result => result.fullRi === fullRi)) {
        await this.showAlert('Número repetido detectado. Se ha detenido la generación.');
        break; // Detener el ciclo si hay repetición
      }

      // Agregar el resultado
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

