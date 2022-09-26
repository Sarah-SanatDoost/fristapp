import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserSidebarComponent } from './add-user-sidebar.component';

describe('AddUserSidebarComponent', () => {
  let component: AddUserSidebarComponent;
  let fixture: ComponentFixture<AddUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
