import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseeComponent } from './musee.component';

describe('MainViewComponent', () => {
  let component: MuseeComponent;
  let fixture: ComponentFixture<MuseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
