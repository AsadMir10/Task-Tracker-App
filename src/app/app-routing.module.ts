import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  // {path: '', component: TasksComponent, pathMatch: 'full'},
];

@NgModule({
  // declarations:[TasksComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
