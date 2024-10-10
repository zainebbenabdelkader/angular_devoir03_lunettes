import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLunetteComponent } from './add-lunette/add-lunettes.component';
import { LunettesComponent } from './lunettes/lunettes.component';
import { UpdateLunetteComponent } from './update-lunette/update-lunette.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LunettesComponent,
    AddLunetteComponent,
    UpdateLunetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
