import { createReducer, on } from '@ngrx/store';
import * as loginActions from './login.actions';

export const loginKey = 'login';

export interface UserLoginState {
    loading: boolean;
    success: boolean;
    fail: boolean;
    userName: string;
}
const initLoginState: UserLoginState = {
    loading: false,
    success: false,
    fail: false,
    userName: ''
};


export const loginReducer = createReducer(
    initLoginState,
    on(loginActions.Login, (state, _) => ({
        ...state,
        loading: true
    })),
    on(loginActions.loginSuccess, (state, { success }) => ({
        ...state,
        success,
        loading: false
    })),
    on(loginActions.loginFail, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
);