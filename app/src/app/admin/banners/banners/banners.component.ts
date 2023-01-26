import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Banner } from 'src/app/models/banner.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
  imgPath: string = environment.image_path;

  displayedColumns: string[] = ['id', 'bImage', 'bStatus', 'bName', 'bTitle', 'createdAt', 'actions'];
  dataSource!: MatTableDataSource<Banner>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Errors = { status: false, msg: '' }
  constructor() {

  }

  ngOnInit(): void {


  }

  applyFilter(event: any) {

  }

  onToggle(event: any, id: any) {

  }
  confirmDialog(id: any) {

  }


}
