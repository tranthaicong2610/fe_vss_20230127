import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  menu = { main: false, child: false }
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
  ngOnInit(): void {

  }

  logOut() {
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
