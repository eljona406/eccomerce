import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/helpers/product/model/product';
import { SharedProductService } from 'src/app/shared/helpers/product/service/product.service';
import { map } from 'rxjs/operators';
import { SharedUserService } from 'src/app/shared/helpers/user/service/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() gender: number;
  @Input() idBrand: number;
  @Input() idCategory: number;

  constructor(public sharedProductService: SharedProductService, public sharedUserService: SharedUserService) { }

  ngOnInit() {
    if (!this.gender) {
      throw new Error('app-product-filter, [gender] attribute is required');
    }

    if (!this.idBrand) {
      throw new Error('app-product-filter, [idBrand] attribute is required');
    }

    if (!this.idCategory) {
      throw new Error('app-product-filter, [idCategory] attribute is required');
    }
  }

  productsGet(): Observable<Product[]> {
    const self = this;
    return this.sharedProductService.productsGet().pipe(map(products => {
      const filteredProducts = products.filter(product => {
        return product.gender === self.gender && product.idBrand === self.idBrand && product.idCategory === self.idCategory;
      });

      return filteredProducts;
    }));
  }

  addToCart(idProduct: number) {
    if(this.sharedUserService.me) {
      this.sharedUserService.me.addToCart(idProduct);
    }
  }

  removeFromCart(idProduct: number) {
    if(this.sharedUserService.me) {
      this.sharedUserService.me.removeFromCart(idProduct);
    }
  }
}
