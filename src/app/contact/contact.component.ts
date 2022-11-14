import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  conactform:FormGroup;
  detailslist:any=[]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.checkvalidationconact()
  }

  checkvalidationconact()
  {
    this.conactform = this.fb.group({
      fullname: [""],
      emailid: [""],
      phonenumber: [""],
     
    })
  }

  conatctdata()
  {
this.conactform.value;
console.log(this.conactform.value);
    this.detailslist.push(this.conactform.value)
  }

  conatctReset()
  {
    this.conactform.reset();
  }

  

}
