import { Component, OnInit } from '@angular/core';
import { Lunette } from '../model/lunette.model'; // Assuming you have a Lunette model
import { LunetteService } from '../services/lunette.service'; // Assuming you have a Lunette service

@Component({
  selector: 'app-add-lunette',
  templateUrl: './add-lunettes.component.html'
})
export class AddLunetteComponent implements OnInit {

  newLunette = new Lunette();
  
  constructor(private lunetteService: LunetteService) { }

  ngOnInit(): void {
    // Optionally load existing lunettes from the service if needed
    
  }

  addLunette() {
    // Ajouter la nouvelle lunette au service
    this.lunetteService.ajouterLunette(this.newLunette);
    this.newLunette = new Lunette();
}

}
