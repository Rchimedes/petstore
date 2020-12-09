import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {
  pet = []

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

  deletePet(id) {
    this._httpService.deletePet(id)
      .subscribe(() => {
        this._router.navigate(['/pets'])
      })
  }
  

}
