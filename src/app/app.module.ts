import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DitailsTaskComponent } from './ditails-task/ditails-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CompletedTasksComponent } from 'src/Lazyloading/lazy-loading/completed-tasks/completed-tasks.component';
import { HomeComponent } from 'src/Lazyloading/lazy-loading/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    DitailsTaskComponent,
    AddTaskComponent,
    CompletedTasksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
