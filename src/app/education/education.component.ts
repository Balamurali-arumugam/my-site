import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
public details : any;
  constructor() { }

  ngOnInit() {

    this.details = [{'course':'B.Tech Information Technology','institution':'Velammal Engineering College','year':'2016','mark':'7.89 CGPA'},
    {'course':'XII','institution':'The Sivaksi Lions Matriculation Higher Secondary School','year':'2012','mark':'85.8%'},
    {'course':'X','institution':'SDA Matriculation High School','year':'2010','mark':'81.2%'},
  ]

  }

}
