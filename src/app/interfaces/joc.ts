// PART A - INTERFICIE

export interface Joc {
  id: number; // Identificador únic del joc
  nom: string; // Nom del joc
  preu: number; // Preu del joc
  disponible: boolean; // Indica si el joc està disponible per a la venda
  descripcio?: string; // Descripció opcional del joc
}
