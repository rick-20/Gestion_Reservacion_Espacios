import { Component } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faBookOpen, faMapLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faBookOpen = faBookOpen;
  faMapLocation = faMapLocation
  faUserGraduate = faUserGraduate;
  faUser = faUser;
}
