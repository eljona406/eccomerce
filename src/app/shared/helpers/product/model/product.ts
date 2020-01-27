export class Product {
    id: number;
    gender: number;
    idBrand: number;
    idCategory: number;
    price: number;
    displayPrice: string;
    imgUrl: string;

    constructor(product: Product) {
        this.id = product.id;
        this.gender = product.gender;
        this.idBrand = product.idBrand;
        this.idCategory = product.idCategory;
        this.price = product.price || 0;
        this.displayPrice = this.price.toFixed(2);
        this.imgUrl = product.imgUrl;
    }
}
