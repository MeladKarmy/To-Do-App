import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ditails-task',
  templateUrl: './ditails-task.component.html',
  styleUrls: ['./ditails-task.component.scss']
})
export class DitailsTaskComponent {
  constructor(private title:Title,private taskService:TaskService, private activRoute:ActivatedRoute,private router:Router){}
  taskDitails:any={}
  id:any
  err:string
  ngOnInit():void
  {
    this.title.setTitle("Update Task");

    this.activRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.id=params.get('id');
    })
    this.taskService.getTaskById(this.id).subscribe({
      next:data=>this.taskDitails=data,
      error:err=>this.err=err
    })
  }
  update() {
    this.taskDitails.time=new Date().toLocaleDateString()
    this.taskService.updateTask(this.id, this.taskDitails).subscribe()
    this.router.navigate(['/home']) 
  }
}
