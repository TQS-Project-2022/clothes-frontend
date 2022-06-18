import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../services/orders.service";
import {Observable, of} from "rxjs";
import {ProductOrder} from "../../model/ProductOrder";
import {Store} from "@ngrx/store";
import {Product} from "../../model/Product";
import {selectSelectedProduct} from "../store/products/product.selectors";
import {selectProduct} from "../store/products/product.actions";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order$: Observable<ProductOrder>;
  product$: Observable<Product | undefined> = of(undefined);

  constructor(private route: ActivatedRoute,
              private orderService: OrdersService,
              private store$: Store) {
    const orderId = Number(this.route.snapshot.paramMap.get("id"));
    this.order$ = this.orderService.getOrderById(orderId);
    let productId: number = 0;
    this.order$.subscribe(
      res => {
        productId = res.productId;
        this.store$.dispatch(selectProduct({id: productId}));
        this.product$ = this.store$.select(selectSelectedProduct);
      }
    );

  }

  ngOnInit(): void {
  }

  confirmDelivery() {
    this.order$ = this.orderService.confirmDelivery(Number(this.route.snapshot.paramMap.get("id")));
  }

}
