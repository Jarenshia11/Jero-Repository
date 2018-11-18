import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
yellow="blue";
  Password:string;
  UserName:string;
  textColor="red";
  colorName="Yellow";
  fontWeight="bold";
  message="God Please Save me";
CourseName:string="angular";
borderStyle="1px solid black";
ChangeName()
{
  this.CourseName='TypeScript';
}

}
