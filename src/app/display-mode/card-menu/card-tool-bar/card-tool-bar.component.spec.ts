import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToolBarComponent } from './card-tool-bar.component';

describe('ToolBarComponent', () => {
  let component: CardToolBarComponent;
  let fixture: ComponentFixture<CardToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
