import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  add_form:FormGroup;
  flagadd_form:boolean=false;

  
  detailslist:any=[]
  state =[{
    "name":"Uttar Pradesh"
  },
  {
    "name":"Punjab"
  },
  {
    "name":"Delhi"
  }
]
dist =[{
  "name":"Ambedkar Nagar"
},
{
  "name":"noida"
},
{
  "name":"south delhi"
}
]
constructor( private fb: FormBuilder) { 
    
}

  ngOnInit(): void {

    this.checkvalidation()
  }

  checkvalidation()
  {
    this.add_form = this.fb.group({
      fullname: ["", [Validators.required]],
      state: ["" ,[Validators.required]],
      district: ["" ,[Validators.required]]
     
    })
  }

  submitdata()
  {
    debugger;
    this.flagadd_form = true
    if (this.add_form.invalid) {
      return
    }

    this.add_form.value;
    console.log(this.add_form.value);
    this.detailslist.push(this.add_form.value)
    
  }

  resetdata()
  {
    this.add_form.reset();
    
  }
}

