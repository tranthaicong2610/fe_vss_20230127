import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginKey, loginReducer } from './store/login.reducer';
import { LoginEffects } from './store/login.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(loginKey, { loginReducer }),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [UserService]
})
export class LoginModule { }
