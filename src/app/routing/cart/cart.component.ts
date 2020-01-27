import { Component } from '@angular/core';
import { Product } from 'src/app/shared/helpers/product/model/product';
import { SharedProductService } from 'src/app/shared/helpers/product/service/product.service';
import { SharedUserService } from 'src/app/shared/helpers/user/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(public sharedProductService: SharedProductService, public sharedUserService: SharedUserService) { }

  productGet(idProduct: number): Product {
    return this.sharedProductService.productGet(idProduct);
  }

  removeFromCart(idProduct: number) {
    if (this.sharedUserService.me) {
      this.sharedUserService.me.removeFromCart(idProduct);
    }
  }
}
