import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCreateDialogComponent } from './components/edit-create-dialog/edit-create-dialog.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    EditCreateDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    TaskListRoutingModule,
  ]
})
export class TaskListModule { }
