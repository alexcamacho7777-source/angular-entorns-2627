import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {
  nom: String = 'Àlex';
  cognom: String = 'Camacho';
  edat: number = 19
  cicle: String = 'Desenvolupament d\'aplicacions Web';

// PART C, GETTERS
get nomComplet(): string {
  return `${this.nom} ${this.cognom}`;
}

get inicials(): string {
  return `${this.nom.charAt(0)}${this.cognom.charAt(0)}`;
}

get generacio(): string {
  if (this.edat >= 10 && this.edat <= 24) return 'Generació Z';
  if (this.edat >= 25 && this.edat <= 40) return 'Millennials';
  return 'Altre';
}
  
}