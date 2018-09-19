import { Component } from '@angular/core';
import { Employee } from './employee-component/employee.model';
import { SimpleServiceService } from './simple-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'simple-angular-project';
  employee:Employee;
  constructor(service:SimpleServiceService,private http:HttpClient){
      this.employee=new Employee();
      this.employee.name='Sanjay Anbu';
      this.employee.empId=2013506100;
      this.employee.project='HUE';
      this.employee.phone=[9944246660,7871556090];

      service.printArgument('Sanjay');
  }

  ngOnInit(http:HttpClient){
      let obs=this.http.get('https://api.github.com/users/snjanbu');
      obs.subscribe((response)=>console.log(response));
  }
}
