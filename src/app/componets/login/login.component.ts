import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type:string = "password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor (
    private fb: FormBuilder,
    private auth: AuthService,
    private router:Router,
    private toast: NgToastService
     ){}



  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon ="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text-" : this.type = "password";
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send to database

      this.auth.Login(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res.message);
          this.loginForm.reset();
          this.toast.success({detail:"SUCCESS", summary:res.message, duration:5000});
          this.router.navigate(['dashboard']);

        },
        error:(err)=>{
          this.toast.error({detail:"ERROR", summary:"something went wrong", duration:5000});
          console.log(err)
          
        }
      })
    }
    else{
      console.log("Form is not valid")
      //throw the error using toaster
      this.validateAllFormFields(this.loginForm);
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
