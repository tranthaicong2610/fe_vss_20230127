import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categiries:any;
  imgPath: string = environment.image_path;

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(){
    
  }
}
