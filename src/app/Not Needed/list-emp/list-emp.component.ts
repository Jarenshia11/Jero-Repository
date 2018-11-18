// import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
// import { Employee } from '../app.module';
// import {Router} from '@angular/router';
// import {EmployeeService} from '../service/employee.service';

// @Component({
//   selector: 'app-list-emp',
//   templateUrl: './list-emp.component.html',
//   styleUrls: ['./list-emp.component.css'],
//   exportAs:'CourseList'
// })
// export class ListEmpComponent{
//    @Output() onRegister=new EventEmitter<string>();
//   course:any;
//   constructor()
//   {
//   this.course=[];
//   }
// courses=[
//   {courseId:1,CourseName:"Node Js"},
//   {
//     courseId:2,CourseName:"Angular Js"
//   },
//   {
// courseId:3,CourseName:"Typescript"
//   },
//   {
//     courseId:4,CourseName:"React Js"
//   }
// ]
// @Input() set cname(name:string)
// {
//   // this.course=[];
//   for(var i=0;i<this.courses.length;i++)
//   {
//     if(name==this.courses[i].CourseName)
//     {
//       this.course.push(this.courses[i]);
//     }
//   }
// }
// CourseRegistered(eve:string)
// {
// this.onRegister.emit(eve);
// }
// }
