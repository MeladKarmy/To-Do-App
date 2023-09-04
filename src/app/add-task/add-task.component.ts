import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { ITask } from '../../services/TaskInterface';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  constructor(private title:Title,private tsakService:TaskService,private fb:FormBuilder){}
  counter:number;
  num:number=0
  listTask:any
  animate:boolean=false;
  colorAnimate:boolean=false
  err:string
  ngOnInit():void
    {
      this.title.setTitle("Add Task")
      this.tsakService.getAllTasks().subscribe({
        next: data => {this.listTask = data; this.counter = this.listTask.length;},
        error: err => {this.err = err}
      });
    }
  todoForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
    title:['',[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
    content:['',[Validators.required]],
    image:['',[Validators.required,Validators.pattern(/\.(gif|jpe?g|png)$/i)]],
    time:new Date().toLocaleDateString(),
    completed:['',[Validators.required]]
  })

  taskIncCounter(value:any)
  {
    if(this.todoForm.valid){
      this.animatChange()
      this.tsakService.addTask(value).subscribe()
      ++this.counter
      ++this.num
      this.todoForm.reset()
    }
  }
  taskDecCounter()
  {
    if(this.counter)
    {
      if(this.counter){
        this.colorAnimate = true;
        this.tsakService.deleteTask(this.counter).subscribe()
        --this.counter
        --this.num
        this.animatChange()
      }
    }
  }
  animatChange()
  {
    this.animate=true
    setTimeout(()=>
    {
     this.animate=false
     this.colorAnimate=false
    },400)
  }
}
