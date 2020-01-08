import { Component, OnInit } from '@angular/core';
import { jarallax } from "jarallax";

@Component({
  selector: 'press-kit',
  templateUrl: './press-kit.component.html',
  styleUrls: ['./press-kit.component.scss']
})
export class PressKitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jarallax(document.querySelectorAll('.jarallax'));
  }

}
