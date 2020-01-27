import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from '../shared/service/guard/auth.guard';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';



const appRoutes: Routes = [

  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductFilterComponent,
    ProfileComponent,
    ProductListComponent,
    ContactUsComponent,
    UsersComponent,
    CartComponent,
    HelpComponent,
    ProductListComponent
  ]
})
export class RoutingModule { }
