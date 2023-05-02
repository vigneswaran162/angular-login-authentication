import { Component ,OnInit} from '@angular/core';
import { MediaChange } from '@angular/flex-layout/core';
import { MediaObserver } from '@angular/flex-layout/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'crm';
  private mediasub!:Subscription;
  /*category= "phone";
  list=[{'name':'vicky','lname':'k','age':'21'},
        {'name':'thannu','lname':'k','age':'22'},
        {'name':'nandha','lname':'s','age':'21'},
        {'name':'sabari','lname':'p','age':'22'},
        {'name':'vetri','lname':'l','age':'21'} ,
        {'name':'sudhan','lname':'r','age':'21'},
        {'name':'vimal','lname':'a.m','age':'21'}   ]
        */

    
    constructor () {}
     
    ngOnInit(): void {
       
        

    }
  
}
