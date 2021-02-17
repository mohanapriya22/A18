import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
 imageData:any[]=[];
  constructor(private img:ImageService) { }

  ngOnInit(): void {
    this.img.getImageData().subscribe((result)=>{
      console.log(result);
     this.imageData=result["data"];
    })
  }

}
