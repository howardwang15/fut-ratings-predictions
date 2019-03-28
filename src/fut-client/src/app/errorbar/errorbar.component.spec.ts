import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorbarComponent } from './errorbar.component';

describe('ErrorbarComponent', () => {
  let component: ErrorbarComponent;
  let fixture: ComponentFixture<ErrorbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
