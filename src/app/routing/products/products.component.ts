import { Component, OnInit } from '@angular/core';
import { SharedProductService } from 'src/app/shared/helpers/product/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  gender: number;
  idBrand: number;
  idCategory: number;

  constructor(private sharedProductService: SharedProductService) {
    this.gender = 1;
    this.idBrand = 1;
    this.idCategory = 1;
   }
}
