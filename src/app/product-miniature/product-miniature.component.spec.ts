import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMiniatureComponent } from './product-miniature.component';

describe('ProductMiniatureComponent', () => {
  let component: ProductMiniatureComponent;
  let fixture: ComponentFixture<ProductMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMiniatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
