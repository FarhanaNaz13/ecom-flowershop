import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmodificationComponent } from './productmodification.component';

describe('ProductmodificationComponent', () => {
  let component: ProductmodificationComponent;
  let fixture: ComponentFixture<ProductmodificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmodificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
