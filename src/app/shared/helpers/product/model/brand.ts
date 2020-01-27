export class Brand {
    id: number;
    name: string;

    constructor(brand: Brand) {
        this.id = brand.id;
        this.name = brand.name;
    }
}
