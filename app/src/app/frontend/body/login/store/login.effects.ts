import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import * as loginActions from './login.actions';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    loginService$ = createEffect(() => {
        console.log('effect');

        return this.actions$.pipe(
            ofType(loginActions.Login),
            mergeMap(({ payload }) =>
                this.userService.login({ ...payload }).pipe(
                    map((res) => {
                        console.log('api');
                        return loginActions.loginSuccess({ success: res.data })
                    }),
                    catchError((error) => of(loginActions.loginFail({ error: error.error.message })))
                )
            )
        )
    }

    );
}