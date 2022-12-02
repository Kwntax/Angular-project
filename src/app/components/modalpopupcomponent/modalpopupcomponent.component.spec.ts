import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpopupcomponentComponent } from './modalpopupcomponent.component';

describe('ModalpopupcomponentComponent', () => {
  let component: ModalpopupcomponentComponent;
  let fixture: ComponentFixture<ModalpopupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalpopupcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalpopupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
