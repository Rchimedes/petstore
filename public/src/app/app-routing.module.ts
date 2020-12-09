import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetInfoComponent } from './pet-info/pet-info.component';


const routes: Routes = [

  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/pets' 
  },
  {
    path: 'pets',
    component: AllPetsComponent

  },
  {
    path: 'pets/new',
    component: CreatePetComponent
  },
  {
    path: 'pets/:id/edit',
    component: EditPetComponent
  },
  {
    path: 'pets/:id',
    component: PetInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
