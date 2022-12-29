import {
  Component,
  OnInit,
  Input,
  Inject,
  LOCALE_ID,
  EventEmitter,
  Output,
} from "@angular/core";
import { formatDate } from "@angular/common";

import { Task } from "../../models/task.interface";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() edit: EventEmitter<Task> = new EventEmitter();
  @Output() done: EventEmitter<number> = new EventEmitter();

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  onDone(id: number) {
    this.done.emit(id);
  }

  onEdit(task: Task) {
    this.edit.emit(task);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
