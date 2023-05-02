import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient, private toastr:ToastrService) { }

  apiurl ='http://localhost:3000/users';
  adminurl ="http://localhost:3000/admin"

  userdata(){
    return this.http.get(this.apiurl)
  }
  createuser(data:any){
    return this.http.post(this.apiurl ,data)
  }
  users(code:any){
    return this.http.get(this.apiurl+'/'+ code)
  }
  adminuser(code:any){
    return this.http.get(this.adminurl+ '/' + code)
  }

  showsucess(message:any,title:any){
    this.toastr.success(message,title)
  }
  showwarning(message:any,title:any){
    this.toastr.warning(message,title)
  }
 showerror(message:any,title:any){
    this.toastr.error(message,title)
 }
 isloggedin(){
   return sessionStorage.getItem("username")
}
isadminlogin(){
  return sessionStorage.getItem("name")
}
}
