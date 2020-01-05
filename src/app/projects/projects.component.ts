import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
details:any
  constructor() { }

  ngOnInit() {

    this.details = [
    {'org':'Gavs Technologies','role':'Engineer','duration':'Sept 2019 - Till Date','domain':'Health Insurance'},
    {'org':'Bankbazaar.com','role':'Integration Developer','duration':'Nov 2017 - Sept 2019','domain':'Fintech'},
    {'org':'Excelacom Technologies','role':'Programmer Analyst','duration':'Jun 2016 - Nov 2017','domain':'Telecom'}
    ]
  }

}
