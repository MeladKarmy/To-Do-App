import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent {
  constructor(private title:Title,private taskComplete:TaskService,private router:Router){}
  compeletedTask:any=0
  err:string
  ngOnInit():void
  {
    this.title.setTitle("Completed Tasks");
   this.taskComplete.getCompletedTasks().subscribe({
    next:data=>this.compeletedTask=data,
    error:err=>this.err=err
   })
  }
  deleteTask(id:number,i:any)
  {
    this.taskComplete.deleteTask(id).subscribe()
    this.compeletedTask.splice(i,1)
    console.log(id)
  }
  toAdd()
  {
    this.router.navigate([''])

  }
  searchByUser(value:any)
  {
    if(value)
    {
      this.taskComplete.searchByUser(value).subscribe(
        {
          next:data=>this.compeletedTask=data,
          error:err=>err=this.err
        })
    }else
    {
      this.taskComplete.getCompletedTasks().subscribe(
        {
          next:data=>this.compeletedTask=data,
          error:err=>err=this.err
        })
    }
  }
  searchByTitle(value:any)
  {
    if(value)
    {
      this.taskComplete.searchByTitle(value).subscribe(
        {
          next:data=>this.compeletedTask=data,
          error:err=>err=this.err
        })
    }else
    {
      this.taskComplete.getCompletedTasks().subscribe(
        {
          next:data=>this.compeletedTask=data,
          error:err=>err=this.err
        })
    }
  }
}
