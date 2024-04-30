import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplayOtherPageComponent } from './product-display-other-page.component';

describe('ProductDisplayOtherPageComponent', () => {
  let component: ProductDisplayOtherPageComponent;
  let fixture: ComponentFixture<ProductDisplayOtherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDisplayOtherPageComponent]
    });
    fixture = TestBed.createComponent(ProductDisplayOtherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
