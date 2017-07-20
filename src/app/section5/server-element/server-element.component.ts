import { Component, Input, OnInit, ViewEncapsulation, ViewChild, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {  }

  ngOnInit() {
    console.log('Text Content: ' + this.header.nativeElement.textContent)
  }

  ngAfterViewInit() {
     console.log('Text Content: ' + this.header.nativeElement.textContent)
     console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

}
