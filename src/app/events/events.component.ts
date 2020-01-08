import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as events_data from "../../assets/events.json";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FullCalendarComponent } from '@fullcalendar/angular';
import moment from "moment";
// JQuery
declare var $: any;

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements AfterViewInit {
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;
  
  calendarPlugins = [dayGridPlugin]
  public events = [];
  firstDate = "2020-04-01";
  
  ngAfterViewInit() {
    // Uncomment for calendar events
    // this.calendarComponent.getApi().gotoDate(this.firstDate);  
    // var now = moment();
    // let currentTimeDiff = moment.duration(moment(this.events[0].date).diff(now));
    // for(let event of this.events) {
    //   let date = moment(event.date);
    //   var timeUntil = moment.duration(date.diff(now));
    //   if (+timeUntil <= +currentTimeDiff && +timeUntil > 0) {
    //     currentTimeDiff = timeUntil;
    //     this.firstDate = event.date;
    //   }
    // }
  }

  renderEvent(event) {
    event.el.style.backgroundColor = 'white';
    event.el.style['border-color'] = 'white';
    event.el.style.color = 'black';
  }

  handleEventClick(event) {
    console.log('clicked', event)
  }
  
  constructor() {
    this.events = events_data.upcoming_events;

    // Scroll Calendar to next upcoming event

  }


}
