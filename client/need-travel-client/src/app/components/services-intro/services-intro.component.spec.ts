import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIntroComponent } from './services-intro.component';

describe('ServicesIntroComponent', () => {
  let component: ServicesIntroComponent;
  let fixture: ComponentFixture<ServicesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
