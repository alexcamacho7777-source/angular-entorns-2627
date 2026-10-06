import { Component, Input } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.html',
  styleUrls: ['./tarjeta.css']
})

export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu: number = 1299;
  estoc: number = 0;



    /* INTERPOLACIO DADES 
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de l'HTML, angular avalua l'expressió i mnostra el resutat com a text

{{nomPropietat}} -> mostra el valor de la propietat
{{2 + 3}} -> mostra el resultat de l'expressió
{{texto.toUpperCase()}} -> mostra el resultat de la funció
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} -> operador ternari, mostra un text segons la condició 

amb {{nom}} --> el valor pot canviar i l'HTML s'actualitza automàticament, hardcoded es sempre estatic

*/
  producte: Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299,
    estoc: 0,
  }
  
  
  /* Un GETTER es un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix.
  get nomDelGetter(): tipusDeRetorn {
  return valorCalculat;
}

AL TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}} -> mostra el valor calculat pel getter
*/ 

// GETTER1: preum amb IVA

  get preuAmbIVA(): number {
    return this.preu * 1.21;
  }

// GETTER2: estat de disponibilitat en text

  get estatDisponibilitat(): string {
    return this.estoc > 0 ? 'Disponible' : 'No disponible';
  }


}