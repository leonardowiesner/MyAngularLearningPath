import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePlatziComponent } from './store-platzi.component';

describe('StorePlatziComponent', () => {
  let component: StorePlatziComponent;
  let fixture: ComponentFixture<StorePlatziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePlatziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePlatziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
