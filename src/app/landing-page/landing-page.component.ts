import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  host: {
    'window:resize' : 'onResize()'
  },
})
export class LandingPageComponent implements OnInit, AfterViewInit  {

  constructor(private elementRef: ElementRef) { 
    this.currentWindowWidth = window.innerWidth;
  }
  public currentWindowWidth: number;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'beige';
 }

 @HostListener('window:resize')
 onResize() {
   this.currentWindowWidth = window.innerWidth
 }

}
