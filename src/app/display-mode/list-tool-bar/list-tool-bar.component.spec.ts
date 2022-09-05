import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolBarComponent } from './list-tool-bar.component';

describe('ListToolBarComponent', () => {
  let component: ListToolBarComponent;
  let fixture: ComponentFixture<ListToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
