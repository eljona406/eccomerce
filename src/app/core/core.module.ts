import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../routing/routing.module';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared/service/shared.service';
import { SharedUserService } from '../shared/helpers/user/service/user.service';
import { SharedProductService } from '../shared/helpers/product/service/product.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RoutingModule
  ],
  exports: [
    SharedModule,
    NavigationComponent
  ],
  providers: [SharedService, SharedUserService, SharedProductService]
})
export class CoreModule { }
