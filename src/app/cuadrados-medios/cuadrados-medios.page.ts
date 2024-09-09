import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuadrados-medios',
  templateUrl: './cuadrados-medios.page.html',
  styleUrls: ['./cuadrados-medios.page.scss'],
})
export class CuadradosMediosPage {

  seed: number | undefined;
  numToGenerate: number | undefined;
  results: { iteration: number, seed: number, squared: number, middle: number, decimal: number }[] = [];
  showAllDecimals: boolean = false;  // Agregado para el toggle

  constructor(private alertController: AlertController) {}

  generateNumbers() {
    if (this.seed === undefined || this.numToGenerate === undefined || this.numToGenerate <= 0) {
      this.showAlert('Por favor, ingresa una semilla válida y una cantidad positiva de números.');
      return;
    }

    this.results = [];
    this.carga(this.seed, this.seed.toString().length, 1, this.numToGenerate);
  }

  carga(seed: number, dig: number, numeral: number, stop: number) {
    if (numeral > stop) {
      return;
    }
  
    let cuadrado = Math.pow(seed, 2);
    let middle = parseInt(this.calmed(cuadrado, dig), 10);
    let decimal = middle / Math.pow(10, dig);
  
    if (this.results.some(result => result.middle === middle)) {
      this.showAlert('Se ha generado un número repetido, la secuencia se detiene.');
      return;
    }

    this.results.push({
      iteration: numeral,
      seed: seed,
      squared: cuadrado,
      middle: middle,
      decimal: decimal
    });
  
    this.carga(middle, dig, numeral + 1, stop);
  }
  
  calmed(number: number, sig: number): string {
    let output = [];
    let sNumber = number.toString();
    let nmedio: string[] = [];

    for (let i = 0, len = sNumber.length; i < len; i++) {
      output.push(sNumber.charAt(i));
    }

    let sobra = sNumber.length - sig;
    let n = sobra % 2 !== 0;
    let div = Math.floor(sobra / 2);

    if (n) {
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
