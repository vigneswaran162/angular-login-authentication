import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkComponent } from './work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { UserdataComponent } from './userdata/userdata.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
     UserdataComponent,
     AdminComponent,
     PagenotfoundComponent,
     UpdatepopupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
     timeOut:3000,
     positionClass: 'toast-top-right',
     preventDuplicates:true

    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
