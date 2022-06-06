import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  filter = new FormControl();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.filter.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(text => this.updateSearchFilter(this.filter.value))
    ).subscribe();
  }

  updateSearchFilter(filter: string){

  }

}
