import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-miniature',
  templateUrl: './product-miniature.component.html',
  styleUrls: ['./product-miniature.component.scss']
})
export class ProductMiniatureComponent implements OnInit {

  @Input() product?: Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetails(id: number){
    this.router.navigate(['product/' + id]);
  }

}
