import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  pet = {
    _id: '',
    name:'',
    type:'',
    description:'',
    skillOne: '',
    skillTwo: '',
    skillThree: '',
  };
  errors = [];
  


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getPetById(params.id)
          .subscribe((data:any) => this.pet = data.pet)
      })
  }

  handleCancel(id) {
    this._router.navigate(['/pets/' + id]);

  }

  handleSubmit(){
    this._httpService.updatePet(this.pet._id, {
      name: this.pet.name,
      type: this.pet.type,
      description: this.pet.description,
      skillOne: this.pet.skillOne,
      skillTwo: this.pet.skillTwo,
      skillThree: this.pet.skillThree
    })
      .subscribe((data: any) => {
        if (data.hasOwnProperty('errors')) {
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/pets/' + this.pet._id])
        }
      })
  }

}
