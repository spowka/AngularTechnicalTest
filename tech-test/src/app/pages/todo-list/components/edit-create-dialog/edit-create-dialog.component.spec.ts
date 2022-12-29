import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditCreateDialogComponent } from "./edit-create-dialog.component";

describe("EditCreateDialogComponent", () => {
  let component: EditCreateDialogComponent;
  let fixture: ComponentFixture<EditCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(EditCreateDialogComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    fixture.detectChanges();
    let inputElement = fixture.nativeElement.querySelector(
      `[formControlName="label"]`
    );
    inputElement.value = "label-value";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(`[formControlName="label"]`)
    ).toBe("label-value");
  });

  beforeEach(() => {
    fixture.detectChanges();
    let inputElement = fixture.nativeElement.querySelector(
      `[formControlName="label"]`
    );
    inputElement.value = "description-value";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(`[formControlName="description"]`)
    ).toBe("description-value");
  });

  beforeEach(() => {
    fixture.detectChanges();
    let inputElement = fixture.nativeElement.querySelector(
      `[formControlName="label"]`
    );
    inputElement.value = "category-value";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(`[formControlName="category"]`)
    ).toBe("category-value");
  });

  beforeEach(() => {
    fixture.detectChanges();
    let inputElement = fixture.nativeElement.querySelector(
      `[data-buttonId="createEdittestButton"]`
    );
    inputElement.value = "category-value";
    inputElement.dispatchEvent(new Event("click"));
  });
});
