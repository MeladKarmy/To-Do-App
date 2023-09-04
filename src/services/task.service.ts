import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, catchError, throwError } from 'rxjs';
import { ITask } from './TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) { }
  err:string
  baseUrl="http://localhost:3000/tasks";
  serchUrl="http://localhost:3000/tasks?username=";
  serchUrlTitle="http://localhost:3000/tasks?title=";
  trueUrl="http://localhost:3000/tasks?completed=true";
  falseUrl="http://localhost:3000/tasks?completed=false";

  
  
  getAllTasks() :Observable<any>
    {
      return this.http.get<any>(this.baseUrl).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
  getAllTasksF() :Observable<any>
    {
      return this.http.get<any>(this.falseUrl).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
  getCompletedTasks() :Observable<any>
    {
      return this.http.get<ITask[]>(this.trueUrl).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
  searchByUser(value:any) :Observable<any>
    {
      return this.http.get<ITask[]>(this.serchUrl+value).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
  searchByTitle(value:any) :Observable<any>
    {
      return this.http.get<ITask[]>(this.serchUrlTitle+value).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
    addTask(value: any): Observable<any> {
      return this.http.post<any>(this.baseUrl, value).pipe(
        catchError((err) => {
          return throwError(() => err.message);
        })
      );
    }
    deleteTask(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => err.message);
        })
      );
    }
    updateTask(id:number, value: string): Observable<any> {
      const taskUpdate = value ;
      return this.http.put<any>(`${this.baseUrl}/${id}`, taskUpdate).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(() => err.message);
        })
      );
    }
  getTaskById(id:number) :Observable<any>
    {
      return this.http.get<any>(`${this.baseUrl}/${id}`).pipe(catchError((err)=>
      {
        return throwError(()=>{
          err.massage 
        })
      }))
    }
}
