import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loginKey, UserLoginState } from "./login.reducer";


export const selectBedServiceState = createFeatureSelector<UserLoginState>(
    loginKey
);

export const selectLoginService = createSelector(
    selectBedServiceState,
    (state) => state.loading
);

export const selectLoginSuccessService = createSelector(
    selectBedServiceState,
    (state) => state.success
);

export const selectLoginFailService = createSelector(
    selectBedServiceState,
    (state) => state.fail
);