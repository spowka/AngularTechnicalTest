import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskService } from "../../services/task.service";

import { TaskComponent } from "./task.component";

describe("TaskComponent", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TaskComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    let fixture = TestBed.createComponent(TaskComponent);
    let app = fixture.debugElement.componentInstance;
    let taskService = fixture.debugElement.injector.get(TaskService);
  });
});
