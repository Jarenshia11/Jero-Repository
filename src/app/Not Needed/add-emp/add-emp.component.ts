// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../service/employee.service';
// import { Employee } from '../app.module';
// import {Router} from '@angular/router';
// import { FormBuilder, FormGroup,Validators } from '@angular/forms';
// @Component({
//   selector: 'app-add-emp',
//   templateUrl: './add-emp.component.html',
//   styleUrls: ['./add-emp.component.css']
// })
// export class AddEmpComponent implements OnInit {
// addForm:FormGroup;
//   constructor(private empservice:EmployeeService,private router:Router,private formBuilder:FormBuilder) { }

//   ngOnInit() {
//     this.addForm = this.formBuilder.group({
//       id: [],
//       email: ['', Validators.required],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required]
//     });

//   }
//   onSubmit() {
//     this.empservice.createUser(this.addForm.value)
//       .subscribe( data => {
//         this.router.navigate(['app-list-emp']);
//       });
//   }
// }