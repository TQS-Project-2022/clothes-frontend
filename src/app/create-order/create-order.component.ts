import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from "../services/orders.service";
import {Router} from "@angular/router";
import {catchError, map, of} from "rxjs";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  @Input() productId?: number;

  errorMessage = "";

  constructor(private orderService: OrdersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createOrder() {
    if(!this.productId) return;
    this.orderService.createOrder({productId: this.productId}).subscribe(
     res => {
       if(res)
          this.router.navigate(['order/' + res.id]);
       else this.errorMessage = "Could not create order, all riders are busy";
      });

  }

}
