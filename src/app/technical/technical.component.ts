import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
details : any;

  constructor() { }

  ngOnInit() {
    this.details = [{'no':1,'name':'Programming Languages','value':'Java, Basics of Groovy'},
    {'no':2,'name':'Framework','value':'Spring MVC, Spring Boot'},
    {'no':3,'name':'Web Technologies','value':'Angular 8'},
    {'no':4,'name':'Tools','value':'Eclipse, STS, IntelliJ'},
    {'no':5,'name':'OS','value':'Windows, Ubuntu 16.04'},
    {'no':6,'name':'Misc','value':'Maven, Putty, JIRA, Bugzilla'}]
  }

}
