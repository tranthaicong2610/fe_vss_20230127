import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/enviroments/enviroment';
import { Category } from 'src/app/models/category.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  imgPath: string = environment.image_path;

  displayedColumns: string[] = ['id', 'cImage', 'cFeatured', 'cStatus', 'cName', 'createdAt', 'actions'];
  dataSource!: MatTableDataSource<Category>;
  Errors = { status: false, msg: '' }
  constructor(
    //private categoryService:CategoryService,
    //public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {

  }
  applyFilter(event: Event) {

  }

  onToggle(event: any, id: any) {

  }
  confirmDialog(html: string) {

  }

}
