import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLunetteComponent } from './add-lunette/add-lunettes.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';


const routes: Routes = [
  {path: "lunettes", component : LunettesComponent},
  {path: "add-lunette", component : AddLunetteComponent},
  {path: "updateLunette/:id", component: UpdateLunetteComponent},
  {path: "", redirectTo: "/lunettes", pathMatch: "full" },
  {path: '**', redirectTo: '/lunettes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
