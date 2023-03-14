import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private diffInDays: number) { 
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com',
      'x-rapidapi-key': 'd27090fec0msh387177df716f00bp1c0b90jsnd9fbb05b10be'
    });

    //calendar code:
    //@Input() parentData;

    this.http.get<any>('https://flashlive-sports.p.rapidapi.com/v1/events/list?locale=en_INT&sport_id=16&timezone=-4&indent_days=' + this.parentData.toString(), {
		headers: headers
	  })
	  .subscribe(data => {
		  console.log(data);
    });  
  }
}
