import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lunette } from '../model/lunette.model'; // Assuming you have a Lunette model
import { LunetteService } from '../services/lunette.service'; // Assuming you have a Lunette service
import { Style } from '../model/style.model';

@Component({
  selector: 'app-add-lunette',
  templateUrl: './add-lunettes.component.html'
})
export class AddLunetteComponent implements OnInit {

  newLunette = new Lunette();
  styles! : Style[];
  newIdSty! : number;
  newStyle! : Style;
  constructor(private lunetteService: LunetteService,private router: Router) { }

  ngOnInit(): void {
    this.styles = this.lunetteService.listeStyles();
    
  }

  addLunette() {
    console.log(this.newIdSty);
    this.newStyle = this.lunetteService.consulterStyle(this.newIdSty);
    this.newLunette.style = this.newStyle;    
    this.lunetteService.ajouterLunette(this.newLunette);
    this.router.navigate(['Lunette']);
}

}
