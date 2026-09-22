import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

// TIPUS BÀSICS
nom: string = 'Camacho';
nom2: string = 'Monte';
versio: number = 21.0;
actiu: boolean = true;

// ARRAYS TIPATS
colors: string[] = ['vermell', 'verd', 'blau'];
frameworks: string[] = [this.nom, this.nom2];
punts: number[] = [1, 2, 3, 4, 5];

// Typscript infereix (adivina) el tipus automàticament
ciutat = 'Lleida'; //string
codiPostal = 25001; //number


// objecte de tipus Producte

producte: Producte = {
  id: 1,
  nom: 'Pc',
  preu: 599.99,
  disponible: true,
}
}