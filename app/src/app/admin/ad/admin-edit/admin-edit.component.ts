import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  data: any;
  paramId: any = 0;
  Errors = { status: false, msg: '' }
  myForm!: FormGroup;

  constructor() {

  }

  ngOnInit(): void {


  }

  submit() {

  }

  update() {

  }

}
