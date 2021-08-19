import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOneComponent } from './company-one.component';

describe('CompanyOneComponent', () => {
  let component: CompanyOneComponent;
  let fixture: ComponentFixture<CompanyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
