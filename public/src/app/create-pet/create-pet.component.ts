import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  newPet = {
    name: '',
    type: '',
    description: '',
    skillOne: '',
    skillTwo: '',
    skillThree: ''
  }
  errors = []
  constructor(
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  handleSubmit(){
  
    this._httpService.createPet(this.newPet)
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/'])
        }
      })
  }
  handleCancel() {
    this._router.navigate(['/pets']);

  }

}
