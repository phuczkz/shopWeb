import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(private authService: AuthService) {
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Sản Phẩm 1',
      price: 100000,
      description: 'This is product 1',
      inStock: 10,
      img: '../../assets/anh2.png',
      quantity: 10

    },
    {
      id: 2,
      name: 'Sản Phẩm 2',
      price: 200000,
      description: 'This is product 2',
      inStock: 20,
      img: '../../assets/anh3.png',
      quantity: 20
    },
    {
      id: 3,
      name: 'Sản Phẩm 3',
      price: 100000,
      description: 'This is product 3',
      inStock: 30,
      img: '../../assets/anh4.png',
      quantity: 30
    },
    {
      id: 4,
      name: 'Sản Phẩm 4',
      price: 150000,
      description: 'This is product 4',
      inStock: 40,
      img: '../../assets/anh7.png',
      quantity: 40
    }

  ]
  cart: any[] = []
  total: number = 0;

  addToCart(product: any) {
    if (this.authService.currentUser == null) {
      alert('Đăng nhập để thêm vào giỏ hàng');
      return;
    }
    console.log(product);
    console.log(product.id);
    console.log(this.cart);

    let findIndex = this.cart.findIndex((element) => element.id == product.id);
    let findIndex1 = this.products.findIndex((element) => element.id == product.id);

    if (this.products[findIndex1].quantity == 0) {
      return;
    }

    if (findIndex != -1) {
      this.cart[findIndex].quantity += 1;
      this.products[findIndex1].quantity -= 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.img,
      });
      this.products[findIndex1].quantity -= 1;
    }
    console.log(this.products[findIndex1].quantity);
    this.totalcost();
  }

  deletefromCart(product: Product) {
    if (this.authService.currentUser) {
      let productIndexInCart = this.cart.findIndex((p: any) => p.id === product.id);
      let productIndexInStock = this.products.findIndex((p: any) => p.id === product.id);

      if (productIndexInCart !== -1 && productIndexInStock !== -1) {
        if (this.cart[productIndexInCart].quantity === 1) {
          this.cart.splice(productIndexInCart, 1);
        } else {
          this.cart[productIndexInCart].quantity--;
        }
        this.products[productIndexInStock].quantity++;
        console.log(this.cart);
      }
    } else {
      alert('Please login to remove product from cart');
    }
    this.totalcost();
  }
  deleteAllFromCart() {
    for (let product of this.cart) {
      for (let product2 of this.products) {
        if (product.id == product2.id) {
          product2.quantity += product.quantity;
          console.log(product2.quantity)
        }
      }
    }
    this.cart = [];
    this.total = 0;
  }

  totalcost() {
    this.total = 0;

    for (let i = 0; i < this.cart.length; i++) {
      this.total = this.total + this.cart[i].price * this.cart[i].quantity;
    }
  }
}
