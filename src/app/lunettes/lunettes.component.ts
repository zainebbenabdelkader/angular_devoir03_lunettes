import { Component, OnInit } from '@angular/core';
import { Lunette } from '../model/lunette.model';
import { LunetteService } from '../services/lunette.service';

@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html'
})
export class LunettesComponent implements OnInit {

    lunettes?: Lunette[];

    constructor(private lunetteService: LunetteService) {this.lunettes = lunetteService.listeLunettes(); }

    ngOnInit(): void { }

    supprimerLunette(l: Lunette) {
        let conf = confirm("Etes-vous sûr ?");
        if (conf) {
            this.lunetteService.supprimerLunette(l);
            // Refresh the list after deletion
        }
    }

}
