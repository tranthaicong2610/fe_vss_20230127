import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {

  data: any;
  paramId: any = 0;
  Errors = { status: false, msg: '' }
  myForm!: FormGroup;

  images = []; //--for render show
  multipleImages = []; //--for send to server

  categories = ['Quần', 'Áo Khoác'];

  //--for edit data
  imagePath: string = environment.image_path;
  ImageDefault: any;
  ImagesAll = [];

  mySubscription: any;

  constructor(
    private f: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.myForm = this.f.group({
      id: null,
      code: null,
      name: null,
      type: null,
      price: null,
      quantity: null,
      description: null,
      image: null,
    });

    this.paramId = this.route.snapshot.params['id'];
    if (this.paramId != undefined) {
      this.productService.getProductById(this.paramId).subscribe((data) => {
        this.myForm.setValue({
          id: data.id,
          name: data.name,
          code: data.code,
          type: this.categories[data.type],
          price: data.price,
          quantity: data.quantity,
          description: data.description,
          image: data.image,
        });
      });
    }
  }
  submit() {
    let newProduct = {
      name: this.myForm.get('name')?.value,
      code: this.myForm.get('code')?.value,
      type: this.categories.findIndex(x => x === this.myForm.get('type')?.value),
      price: this.myForm.get('price')?.value,
      quantity: this.myForm.get('quantity')?.value,
      description: this.myForm.get('description')?.value,
      image: "https://vn-live-03.slatic.net/p/8fa42247be597384bc27cde954466e66.jpg",
    };
    this.productService.save(newProduct).subscribe(res => {
      this.router.navigate(["/admin/products"])
    })
  }
  update(id: any) {
    let productUpdate = {
      id: id,
      name: this.myForm.get('name')?.value,
      code: this.myForm.get('code')?.value,
      type: this.categories.findIndex(x => x === this.myForm.get('type')?.value),
      price: this.myForm.get('price')?.value,
      quantity: this.myForm.get('quantity')?.value,
      description: this.myForm.get('description')?.value,
      image: "https://vn-live-03.slatic.net/p/8fa42247be597384bc27cde954466e66.jpg",
    };
    this.productService.update(productUpdate).subscribe(res => {
      this.router.navigate(["/admin/products"])
    })
  }

  changeImageDefault(img: any) { }

  selectMultiple(event: any) { }
}
