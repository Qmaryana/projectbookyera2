import { Component } from '@angular/core';
import { ServiesService } from '../servies.service'; // import

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  newAdmin: string = ''; // משתנה
  admins: string[] = []; //משתנה של מערך

  constructor(private serviesService: ServiesService) { } //הגדרנו סרביס כדי שיעבוד

  SetDarkMode = (event: Event) => { // קריאה לפונקציה של הסרביס
    this.serviesService.toggleDarkMode();
  }

  addAdmin = () => {
    if (this.admins.length < 2 && this.newAdmin.trim() !== '') { // בודק אם האינפוט קטן מ2 וגם שהמחרוזת לא ריקה
      this.admins.push(this.newAdmin.trim()); //אם התנאים יתקיימו הוסיף אותם למערך
      this.newAdmin = ''; //מאפס מחדש
    } else {
      alert('Maximum 2 administrators allowed');
    }
  }
}
//trim זה מבטיח שאם המשתמש מזין בטעות רווחים נוספים לפני או אחרי שם המנהל, רווחים אלה יוסרו לפני בדיקת אורך השם או הוספתו למערך המנהלים