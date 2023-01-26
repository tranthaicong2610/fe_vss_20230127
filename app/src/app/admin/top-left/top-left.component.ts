import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-left',
  templateUrl: './top-left.component.html',
  styleUrls: ['./top-left.component.scss']
})
export class TopLeftComponent implements OnInit {
  constructor(private router: Router,) {

  }
  mainOver() {
    this.menu.main = true;
  }
  mainOut() {
    this.menu.main = false;
  }
  childOver() {
    this.menu.main = false;
    this.menu.child = true;
  }
  childOut() {
    this.menu.child = false;
  }
  menu = { main: false, child: false }
  ngOnInit(): void {

  }

  adminLogout() {
    localStorage.removeItem("csrf");
    this.router.navigate([`home`]);
  }

  islogin() {
    if (localStorage.getItem("csrf")) {
      return true;
    }
    return false;
  }
}
