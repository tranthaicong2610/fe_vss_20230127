import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroAntdModule } from './zorro-antd.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ZorroAntdModule,

  ],
  providers: [
  ]

})
export class SharedModule {}
