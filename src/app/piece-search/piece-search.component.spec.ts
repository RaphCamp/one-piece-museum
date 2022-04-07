import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceSearchComponent } from './piece-search.component';

describe('PieceSearchComponent', () => {
  let component: PieceSearchComponent;
  let fixture: ComponentFixture<PieceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
