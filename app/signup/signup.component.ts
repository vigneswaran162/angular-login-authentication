import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements  OnInit {
  constructor ( private fb:FormBuilder , private router:Router,private toast:UsersService, private users:UsersService ){}
  create:FormGroup = this.fb.group({});
  ngOnInit(): void {
      this.create = new FormGroup({
        'id':new FormControl('',[Validators.required,Validators.minLength(4)]),
        'email':new FormControl ('',[Validators.required]),
        'password':new FormControl ('',[Validators.required,Validators.minLength(6)]),
        'isactive':this.fb.control(true)


      });

  }

  savedata(){
    if(this.create.valid){
      this.users.createuser(this.create.value).subscribe( res =>{
        this.toast.showsucess('sucessfully registered','');
        this.router.navigate([''])
      })
    }
    else{
      this.toast.showerror('please enter a valid data','')

    }
  }



  get id(){
    return this.create.get('id')
  }
  get email(){
    return this.create.get('email')
  }
  get password(){
     return this.create.get('password')
  }

}
