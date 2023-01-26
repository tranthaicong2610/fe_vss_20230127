import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  data: any;
  paramId: any = 0;
  Errors = { status: false, msg: '' }
  myForm!: FormGroup;
  submitted = false;
  url = "assets/img/product-1.jpg";

  images = []; //--for render show
  multipleImages = []; //--for send to server

  categories = [];

  //--for edit data
  imagePath: string = environment.image_path;
  ImageDefault: any;
  ImagesAll = [];
  id!: string;
  mySubscription: any;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private orderService: OrderService,
    private actRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }


  addOrder() {
    this.orderService
      .createOrder(this.myForm.value)
      .subscribe((data: {}) => {
        console.log(data);
        this.router.navigate(['/admin/orders']);
      });
  }
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.paramId = !this.id
    console.log(this.paramId);
    this.myForm = this.fb.group({
      id: [''],
      pName: ['', Validators.required],
      // pCategory: ['', Validators.required],
      pQty: [1, [Validators.required, Validators.min(1)]],
      pPrice: ['', Validators.required],
      // pSize: ['', Validators.required],
      // pColor: ['', Validators.required],
      pImg: [''],
    });
    if (!this.paramId) {
      this.orderService.getOne(this.id)
        .pipe(first())
        .subscribe(x => {
          console.log(x);
          return this.myForm.patchValue(x)
        }

        );
    }
  }
  get f() { return this.myForm.controls; }


  submit() {
    this.addOrder();
  }

  update() {
    this.orderService.updateOrder(this.id, this.myForm.value)
      .subscribe(data => {
        this.router.navigate(['/admin/orders']);
      });
  }


  changeImageDefault(img: any) {

  }
  Urls: string[] = [];
  selectMultiple(e: any) {
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any) => {
          this.Urls.push(events.target.result)
        }
      }

    }
  }
}

