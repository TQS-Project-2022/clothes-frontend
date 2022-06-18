import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductOrder} from "../../model/ProductOrder";
import {CreateOrderDto} from "../../model/CreateOrderDto";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = "http://localhost:8081/orders";

  constructor(private http: HttpClient) { }

  createOrder(createOrderDto: CreateOrderDto): Observable<ProductOrder>{
    return this.http.post<ProductOrder>(this.url + "/create", createOrderDto);
  }

  getOrderById(id: number): Observable<ProductOrder> {
    return this.http.get<ProductOrder>(this.url + "/" + id);
  }

  confirmDelivery(id: number): Observable<ProductOrder>{
    return this.http.patch<ProductOrder>(this.url + "/confirm/" + id, "");
  }
}
