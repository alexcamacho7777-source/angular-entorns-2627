import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tarjeta} from './components/tarjeta/tarjeta';
import { Perfil } from './components/perfil/perfil';
import { Producte } from './interfaces/producte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-entorns-2627');
  
  //ciutats: string[] = ['Barcelona', 'Lleida', 'Girona', 'Tarragona'];


  productes: Producte[] = [
    {nom: 'Teclat', preu: 89.99, id: 1, estoc: 15},
    {nom: 'Monitor', preu: 350.99, id: 2, estoc: 5},
    {nom: 'Ratolí', preu: 5.99, id: 3, estoc: 25}
  ];

}
