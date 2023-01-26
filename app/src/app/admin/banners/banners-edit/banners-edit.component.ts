import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-banners-edit',
  templateUrl: './banners-edit.component.html',
  styleUrls: ['./banners-edit.component.scss']
})
export class BannersEditComponent implements OnInit {
  data: any;
  paramId: any = 0;
  Errors = { status: false, msg: '' }
  myForm!: FormGroup;

  images = []; //--for render show
  multipleImages = []; //--for send to server

  //--for edit data
  imagePath: string = environment.image_path;
  ImageDefault: any;
  ImagesAll = [];

  mySubscription: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {

  }
  ngOnInit(): void {

  }

  selectMultiple(event: any) {

  }
  submit() {

  }

  update() {

  }
}
