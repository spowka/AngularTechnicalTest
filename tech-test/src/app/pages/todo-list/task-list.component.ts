import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditCreateDialogComponent } from './components/edit-create-dialog/edit-create-dialog.component';
import { Task } from './models/task.interface';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public loading$: Observable<boolean>;
  public tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService, private dialog: MatDialog) {
    this.loading$ = this.taskService.loading$;
    this.tasks$ = this.taskService.tasks$;
  }

  ngOnInit(): void {
    this.taskService.fetchTasks()
  }

  onCreateTask(): void {
    const dialogRef = this.dialog.open(EditCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.taskService.createTask(result);
    });
  }

  onEditTask(data: Task): void {
    const dialogRef = this.dialog.open(EditCreateDialogComponent, { data });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.taskService.editTask(result);
    });

  }

  onMarkAsDone(id: number) {
    this.taskService.markAsDone(id);
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id)
  }

}
