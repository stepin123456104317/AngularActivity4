import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatDialog} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { OnlycourseComponent } from './onlycourse/onlycourse.component';
import { OnlyspecificComponent } from './onlyspecific/onlyspecific.component';
import { NofacultyComponent } from './nofaculty/nofaculty.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlldetailsComponent,
    OnlycourseComponent,
    OnlyspecificComponent,
    NofacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    // MatDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
