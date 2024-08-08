import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Product} from "../../models/product.model";
import {TotalcostComponent} from "../../components/totalcost/totalcost.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TotalcostComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() product!: Product;
  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }

}
