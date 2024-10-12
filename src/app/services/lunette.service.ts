import { Injectable } from '@angular/core';
import { Lunette } from '../model/lunette.model';
import { Style } from '../model/style.model'; // Assuming you have a Style model

@Injectable({
  providedIn: 'root'
})
export class LunetteService {

  lunettes: Lunette[]; // An array of lunettes
  styles: Style[];     // An array of styles (categories for lunettes)

  constructor() { 
    // Initialize styles (you can add more if needed)
    this.styles = [
      {idSty: 1, nomSty: "Aviator"},
      {idSty: 2, nomSty: "Wayfarer"},
    ];

    // Initialize lunettes
    this.lunettes = [
      { idLunette: 1, nomLunette: "Ray-Ban Aviator", prixLunette: 150.50, dateCreation: new Date("01/14/2011"),
        style: {idSty: 1, nomSty: "Aviator"} },
      { idLunette: 2, nomLunette: "Oakley Holbrook", prixLunette: 120, dateCreation: new Date("12/17/2010"),
        style: {idSty: 2, nomSty: "Wayfarer"} },
      { idLunette: 3, nomLunette: "Persol PO0714", prixLunette: 200.75, dateCreation: new Date("02/20/2020"),
        style: {idSty: 1, nomSty: "Aviator"} }
    ];
  }

  // Return list of lunettes
  listeLunettes(): Lunette[] {
    return this.lunettes;
  }

  // Add a new lunette
  ajouterLunette(lunette: Lunette) {
    this.lunettes.push(lunette);
  }

  // Delete a lunette
  supprimerLunette(lunette: Lunette) {
    const index = this.lunettes.indexOf(lunette, 0);
    if (index > -1) {
      this.lunettes.splice(index, 1);
    }
  }

  // Consult a lunette by its ID
  consulterLunette(id: number): Lunette {
    return this.lunettes.find(l => l.idLunette == id)!;
  }

  // Sort lunettes by ID
  trierLunettes() {
    this.lunettes = this.lunettes.sort((n1, n2) => {
      if (n1.idLunette! > n2.idLunette!) {
        return 1;
      }
      if (n1.idLunette! < n2.idLunette!) {
        return -1;
      }
      return 0;
    });
  }

  // Update an existing lunette
  updateLunette(l: Lunette) {
    const index = this.lunettes.findIndex(lun => lun.idLunette === l.idLunette);
    if (index !== -1) {
      this.lunettes[index] = l;
      this.trierLunettes();
    }
  }

  // Return list of styles
  listeStyles(): Style[] {
    return this.styles;
  }

  // Consult a style by its ID
  consulterStyle(id: number): Style {
    return this.styles.find(style => style.idSty == id)!;
  }
}
