import { createAction, props } from "@ngrx/store";


export const Login = createAction(
    '[Login] login',
    props<{ payload: any }>()
);

export const loginSuccess = createAction(
    '[Login] Login Success',
    props<{ success: any }>()
);

export const loginFail = createAction(
    '[Login] Login Fail',
    props<{ error: any }>()
);