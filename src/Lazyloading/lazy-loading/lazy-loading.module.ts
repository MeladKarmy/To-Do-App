import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LazyLoadingModule { }
