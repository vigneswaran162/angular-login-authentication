import { Component,OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private toastr:UsersService){}
 ngOnInit(): void {
   
 }
 toast(){
   this.toastr.showsucess('welcome our team','')
 }
}
