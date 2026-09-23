import { Joc } from './joc';

export class llistaJocs {

  nom: string;
  jocs: Joc[];

  constructor(nom: string, jocs: Joc[]) {
    this.nom = nom;
    this.jocs = jocs;
  }

  afegirJoc(joc: Joc): void {
    this.jocs.push(joc);
  }

  eliminarJoc(id: number): void {
    this.jocs = this.jocs.filter(j => j.id !== id);
  }

  get totalJocs(): number {
    return this.jocs.length;
  }
}