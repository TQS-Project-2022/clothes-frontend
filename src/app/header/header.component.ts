import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, tap} from "rxjs";
import {Router} from "@angular/router";
import {AddProductComponent} from "../add-product/add-product.component";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  filter = new FormControl();

  constructor(private router: Router,
              public tokenStorage: TokenStorageService) { }

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

  redirectToMainPage() {
    this.router.navigate(['']);
  }

}
