import { Component, OnInit } from '@angular/core';
import { AplistService } from '../aplist.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  apiList:any=[]
  constructor(private serice:AplistService) { }

  ngOnInit(): void {
    this.getList()
  }
getList(){
  this.serice.getList().subscribe((result:any)=>{
this.apiList=result
  })

}
}
