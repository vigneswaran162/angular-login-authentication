import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
   worklist=[{}]

   constructor (private user:UsersService){}
  
   ngOnInit(): void {
    
}

}
