// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../app.module';
// import {FormGroup,FormBuilder,Validators} from '@angular/forms';
// import {Router} from '@angular/router';
// import {EmployeeService} from '../service/employee.service';
// import {first} from 'rxjs/operators';
// @Component({
//   selector: 'app-edit-emp',
//   templateUrl: './edit-emp.component.html',
//   styleUrls: ['./edit-emp.component.css']
// })
// export class EditEmpComponent implements OnInit {

//   user: Employee;
//   editForm: FormGroup;
//   constructor(private formBuilder: FormBuilder,private router: Router, private userService: 
//     EmployeeService) { }

//   ngOnInit() {
//     let userId = localStorage.getItem("editUserId");
//     if(!userId) {
//       alert("Invalid action.")
//       this.router.navigate(['list-user']);
//       return;
//     }
//     this.editForm = this.formBuilder.group({
//       id: [],
//       email: ['', Validators.required],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required]
//     });
//     this.userService.getEmployeeById(+userId)
//       .subscribe( data => {
//         this.editForm.setValue(data);
//       });
//   }

//   onSubmit() {
//     this.userService.updateEmployee(this.editForm.value)
//       .pipe(first())
//       .subscribe(
//         data => {
//           this.router.navigate(['list-user']);
//         },
//         error => {
//           alert(error);
//         });
//   }

// }
