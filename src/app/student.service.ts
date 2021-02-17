import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

studentData:any[]=[
  {rollno:100,name:"ravi",branch:"CIVIL",fee:20000},
  {rollno:101,name:"rani",branch:"CSE",fee:20000},
  {rollno:102,name:"raju",branch:"EEE",fee:20000},
  {rollno:103,name:"rupa",branch:"ECE",fee:20000},
];



  constructor() { }
}
