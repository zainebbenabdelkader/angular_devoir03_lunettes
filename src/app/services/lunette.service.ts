import { Injectable } from '@angular/core';
import { Lunette } from '../model/lunette.model'; // Assuming you have a Lunette model

@Injectable({
  providedIn: 'root'
})
export class LunetteService {

  lunettes: Lunette[]; // An array of lunettes

  constructor() { 
    this.lunettes = [
      { idLunette: 1, nomLunette: "Ray-Ban Aviator", prixLunette: 150.50, dateCreation: new Date("01/14/2011") },
      { idLunette: 2, nomLunette: "Oakley Holbrook", prixLunette: 120, dateCreation: new Date("12/17/2010") },
      { idLunette: 3, nomLunette: "Persol PO0714", prixLunette: 200.75, dateCreation: new Date("02/20/2020") }
    ];
  }

  listeLunettes(): Lunette[] {
    return this.lunettes;
  }

  ajouterLunette(lunette: Lunette) {
    this.lunettes.push(lunette);
  }

  supprimerLunette(lunette: Lunette) {
    const index = this.lunettes.indexOf(lunette, 0);
    if (index > -1) {
      this.lunettes.splice(index, 1);
    }
  }

  consulterLunette(id: number): Lunette {
    return this.lunettes.find(l => l.idLunette == id)!;
  
  }

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

  updateLunette(l: Lunette) {
    this.supprimerLunette(l);
    this.ajouterLunette(l);
    this.trierLunettes();
  }
}
