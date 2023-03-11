import { Component } from '@angular/core';
import { FetchService } from '../shared/fetch.service';

@Component({
  selector: 'app-fight-info',
  templateUrl: './fight-info.component.html',
  styleUrls: ['./fight-info.component.css']
})
export class FightInfoComponent {

  constructor(fetchservice: FetchService) { 
    
  }
}
