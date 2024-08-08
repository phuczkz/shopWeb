import {Component} from '@angular/core';
import {Product} from "../../models/product.model";
import {StoreService} from "../../services/store.service";
import {ActivatedRoute} from "@angular/router";

// import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {
  detailProduct!: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, public storeService: StoreService) {
    const {id} = this.activatedRoute.snapshot.params;
    console.log(parseInt(id));
    this.detailProduct = this.storeService.products.find((element) => element.id == parseInt(id))
    console.log(this.detailProduct)
  }


}
