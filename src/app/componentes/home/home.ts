import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faLandmark, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faLandmark = faLandmark;
  faBars = faBars;
  faBookmark = faBookmark;
  faUser = faUser;
  faCalendar = faCalendar;
  faCalendarCheck = faCalendarCheck;
}
