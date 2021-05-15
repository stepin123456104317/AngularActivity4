import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldetailsComponent } from './alldetails/alldetails.component';
import { NofacultyComponent } from './nofaculty/nofaculty.component';
import { OnlycourseComponent } from './onlycourse/onlycourse.component';
import { OnlyspecificComponent } from './onlyspecific/onlyspecific.component';

const routes: Routes = [
  {path:'alldetails',component:AlldetailsComponent},
  {path:'onlycourse',component:OnlycourseComponent},
  {path:'onlyspecific',component:OnlyspecificComponent},
  {path:'nofaculty',component:NofacultyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
