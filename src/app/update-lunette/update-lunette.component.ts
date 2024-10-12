import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lunette } from '../model/lunette.model'; 
import { LunetteService } from '../services/lunette.service';
import { Style } from '../model/style.model';

@Component({
  selector: 'app-update-lunette', 
  templateUrl: './update-lunette.component.html',
  styles: []
})
export class UpdateLunetteComponent implements OnInit { 
  currentLunette = new Lunette();
  styles! : Style[];
  updatedStyId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lunetteService: LunetteService) { } 

 ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);
this.styles = this.lunetteService.listeStyles();
this.currentLunette = this.lunetteService.consulterLunette(this.activatedRoute.snapshot.params['id']);
this.updatedStyId=this.currentLunette.style.idSty;
                }

  updateLunette() {
    this.currentLunette.style=this.lunetteService.consulterStyle(this.updatedStyId);
    this.lunetteService.updateLunette(this.currentLunette);

    this.router.navigate(['lunettes']);
  }
}
