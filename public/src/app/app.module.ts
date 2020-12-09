import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    CreatePetComponent,
    EditPetComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
