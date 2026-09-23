import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import{ Producte as ProducteClass } from './producte'; // Importem la classe Producte amb un alias per evitar conflictes amb la interficie Producte
import { Joc } from './interfaces/joc'; // Importar la interficie Joc


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
/*
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

producte2: Producte = { 
  id: 2,
  nom: 'Portàtil',
  preu: 899.99,
  disponible: false,
}

productes: Producte[] = [this.producte, this.producte2];


p1 = new ProducteClass('Tablet', 299.99);
p2 = new ProducteClass('Smartphone', 499.99);
/*
constructor() {
  console.log(this.p1.toString());
  console.log(`Preu amb IVA: ${this.p1.getPreuAmbIVA()}`);
  console.log(`Producte 1: ${this.producte.nom}, Preu: ${this.producte.preu}`);
  console.log(`Descompte del producte ${this.p2.nom}: ${this.descompte(this.p2)}`);
}
*/
/*
//1. AFEGIU UN METODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
descripcio(producte: ProducteClass): string {
  return `Nom: ${producte.nom}, Preu: ${producte.preu}`;
}

//2. Metode descompte que retorni el preu amb un descompte del 10%
descompte(producte: ProducteClass): number {
  return producte.preu * 0.9; // Retorna el preu
}

//3. creeu un nou producte i mostreu el descompte per consola
p3 = new ProducteClass('Auriculars', 79.99);
constructor() {
console.log(`Descompte de: ${this.p3.nom}- ${this.descompte(this.p3)}`);
console.log(`Descripció de: ${this.p3.nom}- ${this.descripcio(this.p3)}`);
}
descompteP3 = this.descompte(this.p3);

//4. cerqueu la manera de mostrar el descompte amb un popup
 mostrarDescomptePopup(p3: ProducteClass): void {
    const descompte = this.descompte(p3);
    alert(`Descompte del producte ${p3.nom}: ${descompte}€`);
  }
provar(): void {
    const descompteP3 = this.descompte(this.p3);
    console.log(descompteP3);
    this.mostrarDescomptePopup(this.p3);
  }
*/
  // PART B - DADES MOCK I FUNCIONS

  // 1. Array de jocs de tipus Joc
jocs: Joc[] = [
  { id: 1, nom: 'Monopoly', preu: 29.99, disponible: true, descripcio: 'Joc de taula clàssic' },
  { id: 2, nom: 'Catan', preu: 39.99, disponible: false, descripcio: 'Joc de taula estratègic' },
  { id: 3, nom: 'Scrabble', preu: 19.99, disponible: true },
  { id: 4, nom: 'Risk', preu: 49.99, disponible: true, descripcio: 'Joc de taula de guerra i estratègia' },
  { id: 5, nom: 'Cluedo', preu: 24.99, disponible: false, descripcio: 'Joc de taula de misteri i investigació' }
];

//2. Funció per obtenir els jocs disponibles
obtenirJocsDisponibles(): Joc[] {
  return this.jocs.filter(joc => joc.disponible);
}

//3. Funció findbyId que retorni un joc segons el seu id
findById(id: number): Joc | undefined {
  return this.jocs.find(joc => joc.id === id);  
}
//4. Funció formatarElement(joc) que retorni informació
formatarElement(joc: Joc): string {
  return `Nom: ${joc.nom}, Preu: ${joc.preu}, Disponible: ${joc.disponible ? 'Sí' : 'No'}, Descripció: ${joc.descripcio || 'No disponible'}`; 
}

// PART C - CLASSE
// 1. Crear una classe amb 2 propietats tipades i un mètode que retorni un missatge amb aquestes propietats







}