import { Component, OnInit } from '@angular/core';
import media_data from '../../assets/media.json';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  picture_names = [];
  video_links = [];

  constructor() {
  }
  
  ngOnInit() {
    this.video_links = media_data.video_links;
    this.picture_names = media_data.picture_names;
  }

}
