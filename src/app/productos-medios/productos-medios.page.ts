import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos-medios',
  templateUrl: './productos-medios.page.html',
  styleUrls: ['./productos-medios.page.scss'],
})
export class ProductosMediosPage {

  seedX0: number | undefined;
  seedX1: number | undefined;
  numToGenerate: number | undefined;
  showFullDecimals: boolean = false;  // Nueva propiedad para controlar la visualización de decimales completos

  results: { iteration: number, seedX0: number, seedX1: number, product: number, middle: number, decimal: number }[] = [];

  constructor(private alertController: AlertController) {}

  generateNumbers() {
    if (this.seedX0 === undefined || this.seedX1 === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      this.showAlert('Por favor, ingresa semillas válidas y una cantidad positiva de números.');
      return;
    }

    this.results = [];
    this.carga(this.seedX0, this.seedX1, this.seedX0.toString().length, 1, this.numToGenerate);
  }

  carga(seedX0: number, seedX1: number, dig: number, numeral: number, stop: number) {
    if (numeral > stop) {
      return;
    }

    const product = seedX0 * seedX1;
    const middle = parseInt(this.calmed(product, dig), 10);
    const decimal = middle / Math.pow(10, dig);

    // Verificar si el número ya ha sido generado
    if (this.results.some(result => result.middle === middle)) {
      this.showAlert('Se ha generado un número repetido, la secuencia se detiene.');
      return;  // Detenemos la generación si se encuentra un número repetido
    }

    this.results.push({
      iteration: numeral,
      seedX0: seedX0,
      seedX1: seedX1,
      product: product,
      middle: middle,
      decimal: decimal
    });

    // Continuar la generación solo si no hay repetición
    this.carga(seedX1, middle, dig, numeral + 1, stop);
  }

  calmed(number: number, sig: number): string {
    let output = [];
    let sNumber = number.toString();
    let nmedio: string[] = [];

    for (let i = 0, len = sNumber.length; i < len; i++) {
      output.push(sNumber.charAt(i));
    }

    let sobra = sNumber.length - sig;
    let div = Math.floor(sobra / 2);

    if (sobra % 2 !== 0) {
      div = Math.floor((sobra + 1) / 2);
      output.unshift('0');
    }

    for (let i = 1, len = output.length; i <= (len - div); i++) {
      if (i > div && nmedio.length < sig) {
        nmedio.push(output[i - 1]);
      }
    }

    return nmedio.join('');
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
