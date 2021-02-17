import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

name:string="hello batch 18";
salary:number=50000;
rateofinterest=0.25;
today=new Date();
n:number=20;
  constructor() { }

  ngOnInit(): void {
  }

}
