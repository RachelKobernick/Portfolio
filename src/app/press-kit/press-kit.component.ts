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
  getBackGroundImageURL() {
    return "background-image: url('/assets/pictures/background_black_and_white_blurred.jpg')" +
    "background-color: black; " +
    "background-repeat: no-repeat;" +
    "background-size: contain;" +
    "max-width: 1350px;" +
    "height: max-content;" +
    "width: 100%;" +
    "margin: 0 auto;"
    // return "url('/assets/pictures/background_black_and_white_blurred.jpg')";
  }
}
