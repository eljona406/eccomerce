export enum UserRole {
    NotLogin = 0,
    Admin = 1,
    User = 2
}
export class User {
    username: string;
    password: string;
    role: UserRole;
    balance: number;
    displayBalance: string;
    purchases: number[];
    cart: number[];

    constructor(user: User) {
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
        this.balance = user.balance || 0;
        this.displayBalance = this.balance.toFixed(2);
        this.purchases = user.purchases;
        this.cart = [];
    }

    isInCart(idProduct: number) {
        return this.cart.includes(idProduct);
    }

    addToCart(idProduct: number) {
        if (!this.isInCart(idProduct)) {
            this.cart.push(idProduct);
        }
    }

    removeFromCart(idProduct: number) {
        if (this.isInCart(idProduct)) {
            const index = this.cart.indexOf(idProduct);
            this.cart.splice(index, 1);
        }
    }

    emptyCart() {
        this.cart = [];
    }
}
