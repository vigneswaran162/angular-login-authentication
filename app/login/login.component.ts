import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router,  private service:UsersService) {
     sessionStorage.clear()
  }

  login: FormGroup = this.fb.group({})
  udata:any;
  ngOnInit(): void {

    this.login = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })

  }

  userlogin(){

    if(this.login.valid){

      this.service.users(this.login.value.email).subscribe(res  => {
        this.udata = res;
      if(this.udata.password === this.login.value.password){
        if(this.udata.isactive){
          sessionStorage.setItem("username",this.udata.id),
          this.router.navigate(['index'])
        }
        else{
          this.service.showerror('please contact admin','inactive user')
          this.login.reset()
        }
      }

      else{
        this.service.showerror('Invalid Credentials','')
        this.login.reset()
      }
    },err =>{
      this.service.showerror("user not found","")
      this.login.reset()
    });
    }


  }


  get email() {
    return this.login.get('email')
  }
  get password() {
    return this.login.get('password')
  }
}
