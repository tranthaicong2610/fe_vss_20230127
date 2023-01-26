import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/enviroments/enviroment';
import { User } from '../../../models/user.model';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public orders!: Order[];
  imgPath: string = environment.image_path;
  displayedColumns: string[] = ['id', 'pImg', 'pCategory', 'pName', 'pPrice', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<Order>()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  Errors = { status: false, msg: '' }

  categories = [];

  constructor(
    private orderService: OrderService,
    public router: Router
  ) {

  }
  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    return this.orderService.getOrder().subscribe(data => {
      this.orders = data;
    });
  }

  delete(id: string) {
    console.log('delete');
    console.log('id--', id);
    return this.orderService.deleteEmployee(id).subscribe(data => {
      this.getAll()
    })
  }
  applyFilter(event: any) {

  }
  onToggle(event: any, id: any) {

  }

  confirmDialog(id: any) {

  }
}
