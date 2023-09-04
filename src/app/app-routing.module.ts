import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DitailsTaskComponent } from './ditails-task/ditails-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',component:AddTaskComponent},
  { path: 'home',loadChildren: () => import('../Lazyloading/lazy-loading/lazy-loading-routing.module').then(m => m.LazyLoadingRoutingModule)},
  {path:'addTask/:id', component:DitailsTaskComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
