import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, filter, Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { Login } from './store/login.actions';
import { selectLoginFailService, selectLoginService, selectLoginSuccessService } from './store/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  message = '';

  loading$!: Observable<any>;
  success$!: Observable<any>;
  error$!: Observable<any>;
  destroy$: Subject<void> = new Subject();

  constructor(
    private http: UserService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>
  ) { }
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoginService).pipe(takeUntil(this.destroy$));
    this.success$ = this.store.select(selectLoginSuccessService).pipe(takeUntil(this.destroy$));
    this.error$ = this.store.select(selectLoginFailService).pipe(takeUntil(this.destroy$));
    this.initForm();

  }

  onLoginSucess() {
    this.success$.pipe(
      filter(success => success),
      delay(500),
    ).subscribe(
      res => {
        localStorage.setItem("csrf", res.token);
        if (res.user.role == 0) {
          this.router.navigate([`admin/dashboard`])
        } else {
          this.router.navigate([`home`])
        }
      },
      err => {
        this.message = err.error.message;
      }
    );
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],
    });
  }

  login() {
    let payload = { username: this.Username.value, password: this.Password.value };
    console.log('login');
    this.store.dispatch(Login({ payload }));
  }




  // login() {
  //   let payload = { username: this.Username.value, password: this.Password.value };
  //   this.http.login(payload).subscribe(
  //     res => {
  //       localStorage.setItem("csrf", res.token);
  //       if (res.user.role == 0) {
  //         this.router.navigate([`admin/dashboard`])
  //       } else {
  //         this.router.navigate([`home`])
  //       }
  //     },
  //     err => {
  //       this.message = err.error.message;
  //     }
  //   );
  // }

  get Username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}

