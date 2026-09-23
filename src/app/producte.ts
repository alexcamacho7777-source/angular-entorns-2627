//Primera classe
export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    //Mètodes de la classe

    toString(): string {
        return `Nom: ${this.nom}, Preu: ${this.preu}`;
    }
    
    getPreuAmbIVA(): number {
        return this.preu * 1.21; //Afegim un 21% d'IVA
    }   
}