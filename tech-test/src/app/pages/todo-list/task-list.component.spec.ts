import { ComponentFixture, TestBed } from "@angular/core/testing";
import { equal } from "assert";
import { TaskComponent } from "./components/task/task.component";
import { TaskService } from "./services/task.service";
import { TaskListComponent } from "./task-list.component";

describe("TaskComponent", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    let fixture = TestBed.createComponent(TaskListComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let taskService = fixture.debugElement.injector.get(TaskService);
    let spy = spyOn(taskService, "fetchTasks").and.returnValue();
    fixture.whenStable().then(() => {
      expect(app.tasks$).toBe([]);
    });
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("#createButtonId")?.textContent).toContain(
      "Create task"
    );
  });
});
