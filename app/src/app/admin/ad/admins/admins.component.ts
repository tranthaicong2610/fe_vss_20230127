import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'role', 'email', 'status', 'createdAt', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Errors = { status: false, msg: '' }
  constructor(

  ) { }

  ngOnInit(): void {

  }

  applyFilter(event: any) {

  }
  confirmDialog(id: any) {

  }
  onToggle(event: any, id: any) {

  }
}
