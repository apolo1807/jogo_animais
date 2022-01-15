import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAdvinharComponent } from '../animal-advinhar.component';

describe('AnimalAdvinharComponent', () => {
  let component: AnimalAdvinharComponent;
  let fixture: ComponentFixture<AnimalAdvinharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAdvinharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAdvinharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
