import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyDetaileComponent } from './voy-detaile.component';

describe('VoyDetaileComponent', () => {
  let component: VoyDetaileComponent;
  let fixture: ComponentFixture<VoyDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyDetaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
