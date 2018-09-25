import { Component, OnInit } from '@angular/core';
import { AddformserviceService } from "./addformservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers:[AddformserviceService]
})
export class AddFormComponent implements OnInit {
  newfname:String;
  newlname:String;
  newaddress:string;
  newstate:string;
  newmobile:String;
  model:any={};
  constructor(private _AddformserviceService:AddformserviceService,private router:Router) { }

 
  ngOnInit() {
  }

 

  add(){
    
    console.log("%%"+this.model.newaddress.toUTCString())
     this._AddformserviceService.add(this.model.newfname,this.model.newlname,this.model.newaddress.toLocaleDateString("en-US"),this.model.newstate.toLocaleDateString("en-US"),this.model.newmobile).subscribe(data =>{
    //this._AddformserviceService.add(this.model.newfname,this.model.newlname,this.model.newaddress.toUTCString(),this.model.newstate.toUTCString(),this.model.newmobile).subscribe(data =>{
     
      console.log("data is "+ data)
    
      this.router.navigate(['dashboard']);
    })
  }

}
