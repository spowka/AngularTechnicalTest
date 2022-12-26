import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateDialogComponent } from './edit-create-dialog.component';

describe('EditCreateDialogComponent', () => {
  let component: EditCreateDialogComponent;
  let fixture: ComponentFixture<EditCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
