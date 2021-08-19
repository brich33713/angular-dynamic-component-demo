import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTwoComponent } from './company-two.component';

describe('CompanyTwoComponent', () => {
  let component: CompanyTwoComponent;
  let fixture: ComponentFixture<CompanyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
