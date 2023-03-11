import { Injectable } from '@angular/core';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd27090fec0msh387177df716f00bp1c0b90jsnd9fbb05b10be',
		'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
	}
};

const url = 'https://flashlive-sports.p.rapidapi.com/v1/events/list?locale=en_INT&sport_id=16&timezone=-4&indent_days=';
async function getResponse() {
  const response = await fetch(url, options)
  if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
  }
                
  const data = await response.json();
  //console.log(data);
  //console.log(data['DATA']);
  return data;
}

@Injectable({
  providedIn: 'root'
})
export class FetchService {


  
}
