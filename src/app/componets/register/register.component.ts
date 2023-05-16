import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type:string = "password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash";
  registerForm!: FormGroup;
  constructor (private fb: FormBuilder,private auth: AuthService, private router: Router, private toast: NgToastService){}


  ngOnInit(): void {
    this.registerForm = this.fb.group({

      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Email: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required],      
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text-" : this.type = "password";
  }

  onRegister(){
    if(this.registerForm.valid){
      // console.log(this.loginForm.value)
      //send to database

      this.auth.Register(this.registerForm.value)
      .subscribe({
        next:(res)=>{
          this.toast.success({detail:"SUCCESS", summary:res.message, duration:5000});
          this.registerForm.reset();
          this.router.navigate(['login']);

        },
        error:(err)=>{
          this.toast.error({detail:"ERROR", summary:"something went wrong", duration:5000});
        }
      })
      console.log(this.registerForm.value)
    }
    else{
      console.log("Form is not valid")
      //throw the error using toaster
      this.validateAllFormFields(this.registerForm);
      //alert("Your Form Is Invalid");
    }
  }


  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup)
      {
        this.validateAllFormFields(control)
      }
    })
}
}
