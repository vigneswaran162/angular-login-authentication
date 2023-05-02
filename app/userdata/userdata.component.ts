import { Component ,OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';



@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent {
   constructor ( private user:UsersService , private dilog:MatDialog){
    this.loaduser()
   }
   userlist:any;
   datasource:any;

  loaduser(){
    this.user.userdata().subscribe(res=>{
      this.userlist = res;
      this.datasource = new MatTableDataSource(this.userlist)
    })
  }
  displayedColumns: string[] = ['username', 'email', 'password','isactive', 'action'];
  updateuser(code:any){
    this.dilog.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode:code
      }
    })
  }
  }


