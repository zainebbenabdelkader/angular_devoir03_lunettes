import { Component, OnInit } from '@angular/core';
 // Import Router
import { Lunette } from '../model/lunette.model';
import { LunetteService } from '../services/lunette.service';

@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html'
})
export class LunettesComponent implements OnInit {

    lunettes?: Lunette[];

    // Inject LunetteService and Router into the constructor
    constructor(private lunetteService: LunetteService) { 
        this.lunettes = lunetteService.listeLunettes();
    }

    ngOnInit(): void {   
          this.lunettes = this.lunetteService.listeLunettes();

    }

    // Method to navigate to the add lunette form
    
    
    // Method to delete a lunette
    supprimerLunette(l: Lunette) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf) {
            this.lunetteService.supprimerLunette(l);
            // Refresh the list after deletion
        }
    }

}
