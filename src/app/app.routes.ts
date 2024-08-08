import { Routes } from '@angular/router';
import {CartComponent} from "./pages/cart/cart.component";
import {DetailProductComponent} from "./pages/detail-product/detail-product.component";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ListProductComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'product/:id',
    component: DetailProductComponent
  }
];
