import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
 ReceivedData:any[]=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.makeAHttpReq().subscribe((result)=>{
      console.log(result);
      this.ReceivedData=result;
    })
  }

}
