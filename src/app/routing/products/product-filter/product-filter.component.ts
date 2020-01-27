import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedProductService } from 'src/app/shared/helpers/product/service/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input() gender: number;
  @Input() idBrand: number;
  @Input() idCategory: number;

  @Output() genderChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() idBrandChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() idCategoryChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(public shareProductService: SharedProductService) { }


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

  onGenderSelect(gender: number) {
    this.gender = gender;
    this.genderChange.emit(this.gender);
  }

  onBrandSelect(idBrand: number) {
    this.idBrand = idBrand;
    this.idBrandChange.emit(this.idBrand);
  }

  onCategorySelect(idCategory: number) {
    this.idCategory = idCategory;
    this.idCategoryChange.emit(this.idCategory);
  }
}
