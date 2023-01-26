import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'role', 'email', 'status', 'createdAt', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Errors = { status: false, msg: '' }
  constructor(
    // private userService:UserService,
    // public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  onToggle(event: any, id: any) {

  }

  applyFilter(event: any) {

  }
  confirmDialog(id: any) {

  }

}
