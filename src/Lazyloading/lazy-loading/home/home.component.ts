import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../services/TaskInterface';
import { Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private title:Title,private taskService:TaskService,private router:Router){}
  listTask:ITask[]=[]
  compelet:any
  arr:{}[]=[]
  err:any

  ngOnInit():void
  { 
    this.title.setTitle("Home");
    this.taskService.getAllTasksF().subscribe(
    {
      next:data=>this.listTask=data,
      error:err=>err=this.err
    })

  }
  navigat(id:number)
  {
    this.router.navigate(['/addTask/',id])
  }
  status(id:number,i:number)
  {
    this.compelet=this.listTask.filter(ele=>ele.id == id)[0]
    let x= this.compelet.completed ? (this.compelet.completed=false):(this.compelet.completed=true)
    this.taskService.updateTask(id,this.compelet).subscribe()


    this.listTask.splice(i,1)
  }
  toAdd()
  {
    this.router.navigate([''])
  } 
  searchByUser(value:any)
  {
    if(value)
    {
      this.taskService.searchByUser(value).subscribe(
        {
          next:data=>this.listTask=data,
          error:err=>err=this.err
        })
    }else
    {
      this.taskService.getAllTasksF().subscribe(
        {
          next:data=>this.listTask=data,
          error:err=>err=this.err
        })
    }
  }
  searchByTitle(value:any)
  {
    if(value)
    {
      this.taskService.searchByTitle(value).subscribe(
        {
          next:data=>this.listTask=data,
          error:err=>err=this.err
        })
    }else
    {
      this.taskService.getAllTasksF().subscribe(
        {
          next:data=>this.listTask=data,
          error:err=>err=this.err
        })
    }
  }
}
