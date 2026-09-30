import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {
  nom: String = 'Àlex';
  cognom: String = 'Camacho';
  edat: Number = 19
  cicle: String = 'Desenvolupament d\'aplicacions Web';
}



