import { Component } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    jarallax(document.querySelectorAll('.jarallax'));
  }
  // title = 'rachel-kobernick-portfolio';
}
