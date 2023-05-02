import { Component ,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.scss']
})
export class UpdatepopupComponent implements OnInit {
 constructor(private fb:FormBuilder){}
 create:FormGroup = this.fb.group({});
 ngOnInit(): void {
  this.create = new FormGroup({
    'id':new FormControl(''),
    'email':new FormControl (''),
    'password':new FormControl (''),
    'isactive':this.fb.control(true)


  });

 }
}
