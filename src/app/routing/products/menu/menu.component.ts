import { Component } from '@angular/core';
import { SharedProductService } from 'src/app/shared/helpers/product/service/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public shareProductService: SharedProductService) {
   }
}
