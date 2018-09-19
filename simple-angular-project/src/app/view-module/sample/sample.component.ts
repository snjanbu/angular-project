import { Component, OnInit, Input } from '@angular/core';
import { SimpleServiceService } from '../../simple-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  response:any;
  userName:string;
  constructor(service:SimpleServiceService,private http:HttpClient) {
    service.printArgument('Welcome to Angular JS');
   }

  ngOnInit() {
  }

  searchRepository(){
    this.http.get('https://api.github.com/users/'+this.userName).subscribe((response)=>{
      this.response=response;
    });
  }

}
