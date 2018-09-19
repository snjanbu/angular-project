import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {

  @Input("employee")employee :Employee;
  buttonEnable:boolean=false;
  textValue:string;

  constructor() {  
  }
  
  ngOnInit() {
        
  }

  OnToggle(){
    this.buttonEnable=!this.buttonEnable;
  }

}
