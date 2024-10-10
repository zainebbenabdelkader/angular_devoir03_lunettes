import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lunette } from '../model/lunette.model'; 
import { LunetteService } from '../services/lunette.service';

@Component({
  selector: 'app-update-lunette', 
  templateUrl: './update-lunette.component.html',
  styles: []
})
export class UpdateLunetteComponent implements OnInit { 

  currentLunette = new Lunette(); 
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private lunetteService: LunetteService) { } 

  ngOnInit(): void {
    // Fetch the lunette by ID from the service
    const id = this.activatedRoute.snapshot.params['id'];
    this.currentLunette = this.lunetteService.consulterLunette(+id);
  }

  updateLunette() {
    // Update lunette in the service
    this.lunetteService.updateLunette(this.currentLunette);

    // Navigate back to the lunette list
    this.router.navigate(['lunettes']);
  }
}
