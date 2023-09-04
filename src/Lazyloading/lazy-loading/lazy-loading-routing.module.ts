import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'completed',component:CompletedTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
