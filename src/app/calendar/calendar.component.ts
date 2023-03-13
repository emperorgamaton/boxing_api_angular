import { Component } from '@angular/core';

import * as moment from 'moment'; 
import { Moment } from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent {
  diffInDays: number = 5;

  handleFightDateChange(event: any) {
    const m: Moment = event.value;
    if(m){
      //let selectedDate = moment(m);
	    var today = new Date();
	    this.diffInDays = moment(m).diff(moment(today), 'days');
      console.log(this.diffInDays);
    }
  } 

}
