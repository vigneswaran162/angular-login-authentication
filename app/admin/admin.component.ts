import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor ( private fb:FormBuilder,private router:Router , private user:UsersService){
    sessionStorage.clear()
  }
  admin:FormGroup = this.fb.group({})
  adata:any
  ngOnInit(): void {
    this.admin = new FormGroup ({
      'name':new FormControl ('',[Validators.required,Validators.minLength(4)]),
      'password':new FormControl ('',[Validators.required,Validators.minLength(4)])
    })
  }
  adminlogin(){
    if(this.admin.valid){
      this.user.adminuser(this.admin.value.name).subscribe(res =>{
        this.adata =res;
        if(this.adata.password === this.admin.value.password){
          sessionStorage.setItem("name",this.adata.id)
          this.router.navigate(['userdata'])
        }
        else{
          this.user.showerror('Invalid Credentials','')
          this.admin.reset()
        }

      },err=>{
        this.user.showerror('usernot not found','')
        this.admin.reset()
      })}

    }


  }

