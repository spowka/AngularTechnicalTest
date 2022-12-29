import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "task-list", pathMatch: "full" },
  {
    path: "task-list",
    loadChildren: () =>
      import("./pages/todo-list/task-list.module").then(
        (m) => m.TaskListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
