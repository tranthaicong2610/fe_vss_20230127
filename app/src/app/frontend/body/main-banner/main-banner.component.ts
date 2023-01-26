import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {
  categiryFeatured:any=[];
  imgPath: string = environment.image_path;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
}
