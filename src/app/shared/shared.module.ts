import { NgModule } from '@angular/core';

import { ProfileComponent } from './helpers/user/components/profile/profile.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ProfileComponent,
    MaterialModule
  ]
})
export class SharedModule { }
