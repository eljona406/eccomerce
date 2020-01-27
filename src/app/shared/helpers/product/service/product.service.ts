import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { Brand } from '../model/brand';
import { Category } from '../model/category';
import { Product } from '../model/product';


@Injectable()
export class SharedProductService {
  productsLoaded: boolean;
  products: Product[];

  categoriesLoaded: boolean;
  categories: Category[];

  brandsLoaded: boolean;
  brands: Brand[];

  constructor(private httpClient: HttpClient) {
    this.productsLoaded = false;
    this.products = [];

    this.categoriesLoaded = false;
    this.categories = [];

    this.brandsLoaded = false;
    this.brands = [];
  }

  productsGet() {
    if (this.productsLoaded) {
      return new Observable<Product[]>((subscriber: Subscriber<Product[]>) => subscriber.next(this.products)).pipe(take(1));
    }

    return this.productsRequest();
  }

  productGet(idProduct: number) {
    let result: Product | null = null;
    this.productsGet().subscribe(products => {
      const filteredProducts = products.filter(product => {
        return product.id === idProduct;
      });

      if (filteredProducts.length > 0) {
        result = filteredProducts[0];
      }
    });

    return result;
  }

  categoriesGet() {
    if (this.categoriesLoaded) {
      return new Observable<Category[]>((subscriber: Subscriber<Category[]>) => subscriber.next(this.categories)).pipe(take(1));
    }

    return this.categoriesRequest();
  }

  categoryGet(idCategory: number) {
    let result: Category | null = null;
    this.categoriesGet().subscribe(categories => {
      const filteredCategories = categories.filter(category => {
        return category.id === idCategory;
      });

      if (filteredCategories.length > 0) {
        result = filteredCategories[0];
      }
    });

    return result;
  }

  brandsGet() {
    if (this.brandsLoaded) {
      return new Observable<Brand[]>((subscriber: Subscriber<Brand[]>) => subscriber.next(this.brands)).pipe(take(1));
    }

    return this.brandsRequest();
  }

  brandGet(idBrand: number) {
    let result: Brand | null = null;
    this.brandsGet().subscribe(brands => {
      const filteredBrands = brands.filter(brand => {
        return brand.id === idBrand;
      });

      if (filteredBrands.length > 0) {
        result = filteredBrands[0];
      }
    });

    return result;
  }

  private productsRequest(): Observable<Product[]> {
    return this.httpClient.get<any>('./assets/server/product.json').pipe(take(1),
      catchError((error: any, caught) => {
        return caught;
      }), map(productResponse => {
        this.productsLoaded = true;

        for (const product of productResponse) {
          this.products.push(new Product(product));
        }

        return this.products;
      }));
  }

  private categoriesRequest(): Observable<Category[]> {
    return this.httpClient.get<any>('./assets/server/category.json').pipe(take(1),
      catchError((error: any, caught) => {
        return caught;
      }), map(categoryResponse => {
        this.categoriesLoaded = true;

        for (const category of categoryResponse) {
          this.categories.push(new Category(category));
        }

        return this.categories;
      }));
  }

  private brandsRequest(): Observable<Brand[]> {
    return this.httpClient.get<any>('./assets/server/brand.json').pipe(take(1),
      catchError((error: any, caught) => {
        return caught;
      }), map(brandResponse => {
        this.brandsLoaded = true;

        for (const brand of brandResponse) {
          this.brands.push(new Brand(brand));
        }

        return this.brands;
      }));
  }
}
