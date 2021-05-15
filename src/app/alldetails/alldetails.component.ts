import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.css']
})
export class AlldetailsComponent implements OnInit {

  constructor(private router:Router) { }
users:any
public value=""
show:boolean=false;
  ngOnInit(): void {
  }
check1(){
  this.show=true;
this.users=[{"facultyId":101,"facultyName":"Vivek","facultyMobile":"9998887771","facultyEmail":"vivek@abc.com","highestQualification":"Dr","workLocation":"Mysore"},
{"facultyId":102,"facultyName":"Pridhvi","facultyMobile":"6668887772","facultyEmail":"pridhvi@abc.com","highestQualification":"Dr","workLocation":"Bangalore"},
{"facultyId":103,"facultyName":"Patrick","facultyMobile":"8889997773","facultyEmail":"patrick@abc.com","highestQualification":"ME","workLocation":"Mysore"},
{"facultyId":104,"facultyName":"Rajesh","facultyMobile":"9988987674","facultyEmail":"rajesh@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
{"facultyId":105,"facultyName":"Bhargav","facultyMobile":"9898785671","facultyEmail":"bhargav@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
{"facultyId":106,"facultyName":"Ajay","facultyMobile":"8978187541","facultyEmail":"ajay@abc.com","highestQualification":"ME","workLocation":"Hyderabad"},
{"facultyId":107,"facultyName":"Bharath","facultyMobile":"7876527713","facultyEmail":"bharath@abc.com","highestQualification":"ME","workLocation":"Bangalore"},
{"facultyId":108,"facultyName":"Thiruppathi","facultyMobile":"9894147084","facultyEmail":"thiruppathi@abc.com","highestQualification":"ME","workLocation":"Mysore"}
];
}
// check2(){
//   this.router.navigate(['/onlycourse'])
// }
}
