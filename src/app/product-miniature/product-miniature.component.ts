import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'app-product-miniature',
  templateUrl: './product-miniature.component.html',
  styleUrls: ['./product-miniature.component.scss']
})
export class ProductMiniatureComponent implements OnInit {

  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
