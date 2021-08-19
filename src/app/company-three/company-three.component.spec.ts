import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyThreeComponent } from './company-three.component';

describe('CompanyThreeComponent', () => {
  let component: CompanyThreeComponent;
  let fixture: ComponentFixture<CompanyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
