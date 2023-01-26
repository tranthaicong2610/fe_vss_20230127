import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {
  data: any;
  paramId: any = 0;
  Errors = { status: false, msg: '' }
  myForm!: FormGroup;
  images = []; //--for render show
  multipleImages = []

  imagePath: string = environment.image_path;
  ImageDefault: any;
  ImagesAll = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
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
