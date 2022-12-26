import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-create-dialog',
  templateUrl: './edit-create-dialog.component.html',
  styleUrls: ['./edit-create-dialog.component.scss']
})
export class EditCreateDialogComponent implements OnInit {
  public form: FormGroup;
  public isNew: boolean;

  constructor(public dialogRef: MatDialogRef<EditCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, private fb: FormBuilder, private taskService: TaskService) {
    this.isNew = !data;
    this.form = this.fb.group({
      id: ['', Validators.required],
      label: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      done: [false],
    })
  }

  ngOnInit(): void {
    if (this.isNew) {
      this.form.get('id').setValue(this.taskService.getNewTaskId());
    } else {
      this.form.patchValue(this.data)
    }
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.dialogRef.close(this.form.value)
  }

}
