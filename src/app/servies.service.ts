import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  private isDarkMode = false; //This property is used to keep track of whether dark mode is enabled or not.

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
  }

  private updateBodyClass = () => {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);
  }

  isDarkModeEnabled = (): boolean => { // isDarkMode מחזירה ערך נוכחי של המשתנה 
    return this.isDarkMode;
  }

  constructor() { }

  private books: any[] = []; //מערך של ספרים

  addBook = (book: any) => { //ולוקחת אובייקט ספר ודוחפת אותו למערך הספרים, ומוסיפה למעשה ספר חדש לרשימה
    this.books.push(book);
  }

  getBooks = () => { //מחזירה את מערך הספרים, ומאפשרת גישה לרשימת הספרים מחוץ לסרביס.
    return this.books;
  }
}
//toggleDarkMode = () => { ... }: 
//מחליפה את המאפיין isDarkMode בין true ל-false 
//גם קורא ל-updateBodyClass כדי לעדכן את הגוף למצב החדש.

//private updateBodyClass מחליפה בין הכהה ולבהיר בהתבסס על המצב הנוכחי של המשתנה שלנו