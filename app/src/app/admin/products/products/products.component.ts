import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Product } from '../../../models/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'code',
    'type',
    'price',
    'quantity',
  ];

  imgPath: string = environment.image_path;
  dataSource!: [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  Errors = { status: false, msg: '' };

  categories = [
    "Quần", "Áo Khoác"
  ];

  constructor(private httpApi: ProductService) { }
  ngOnInit(): void {
    this.httpApi.getAll().subscribe((data) => {
      console.log(typeof data);

      this.dataSource = data;
    });
  }

  applyFilter(event: any) { }
  onToggle(event: any, id: any) { }

  confirmDialog(id: any) { }
}
