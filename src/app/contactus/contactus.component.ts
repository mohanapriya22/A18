import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
     name:string="nirmaan";
     n:number=100;
     imgurl="../../assets/images/boy.jpg";
    m:string="hello";
   test(data:string):void{
      console.log("test is calling" ,data);
   }

   counter:number=1;
   incrementnumber()
   {
       this.counter++;
   }

 status:boolean=true;
   changestatus()
   {
     this.status=!this.status;
   }


   numbers:number[]=[10,20,30,40,50];
   
   names:string[]=[];
   addName(na:string)
   {
    this.names.push(na);
   }
   









  

  ngOnInit(): void {}

}
