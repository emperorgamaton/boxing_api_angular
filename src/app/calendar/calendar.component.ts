import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment'; 
import { Moment } from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent {
  //diffInDays: number = 5;

  constructor(private http: HttpClient) {}

  handleFightDateChange(event: any) {
    const m: Moment = event.value;
    if(m){
      //let selectedDate = moment(m);
      var today = new Date();
      var diffInDays = moment(m).diff(moment(today), 'days');
      console.log(diffInDays);

      let headers = new HttpHeaders({
        'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com',
        'x-rapidapi-key': 'd27090fec0msh387177df716f00bp1c0b90jsnd9fbb05b10be'
      });
  
      //calendar code:
      //@Input() parentData;
  
      this.http.get<any>('https://flashlive-sports.p.rapidapi.com/v1/events/list?locale=en_INT&sport_id=16&timezone=-4&indent_days=' + diffInDays.toString(), {
      headers: headers
      })
      .subscribe(data => {
        console.log(data);
        for (let g = 0; g < data['DATA'].length; g++) {
          for (let i = 0; i < data['DATA'][g]['EVENTS'].length; i++) {
            
            var homeFighterPictureData = data['DATA'][g]['EVENTS'][i]['HOME_IMAGES'][0];
            var awayFighterPictureData = data['DATA'][g]['EVENTS'][i]['AWAY_IMAGES'][0];
            
            var div = document.createElement("div");
            div.classList.add("fightdiv");
            document.body.appendChild(div);
                      
            var LeagueName = document.createElement("div");
            LeagueName.classList.add("LeagueName");
            div.appendChild(LeagueName);
                      
            var timeBox = document.createElement("div");
            timeBox.classList.add("timeBox");
            div.appendChild(timeBox);
                      
            var fighterBox = document.createElement("div");
            fighterBox.classList.add("fighterBox");
            div.appendChild(fighterBox);
                      
            var names = document.createElement("div");
            names.classList.add("nameBox");
            div.appendChild(names);
                          
            var homeFighterName = document.createElement("span");
            homeFighterName.classList.add("homeFighterName");
            names.appendChild(homeFighterName);
                      
            var awayFighterName = document.createElement("span");
            awayFighterName.classList.add("awayFighterName");
            names.appendChild(awayFighterName);
                      
            var homeFighterPicture = document.createElement("img");
            homeFighterPicture.src = homeFighterPictureData;
            homeFighterPicture.classList.add("homeFighterPicture");
            fighterBox.appendChild(homeFighterPicture);
                      
            var awayFighterPicture = document.createElement("img");
            awayFighterPicture.src = awayFighterPictureData;
            awayFighterPicture.classList.add("awayFighterPicture");
            fighterBox.appendChild(awayFighterPicture);
                      
                          
                          
                      
            LeagueName.innerHTML = data['DATA'][g]['NAME_PART_2'];
            homeFighterName.innerHTML = data['DATA'][g]['EVENTS'][i]['HOME_PARTICIPANT_NAME_ONE'];
            awayFighterName.innerHTML = data['DATA'][g]['EVENTS'][i]['AWAY_PARTICIPANT_NAME_ONE'];
            timeBox.innerHTML = ("Date: " + new Date((data['DATA'][g]['EVENTS'][i]['START_TIME']) * 1000));
            console.log(timeBox);
          }
        }
      });
    }
  }      

    

    
  
}