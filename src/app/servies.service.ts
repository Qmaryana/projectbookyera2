import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  private isDarkMode = false;
  private books: any[] = [];
  private admins: string[] = []; // Add administrators array

  constructor() { }

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
  }

  private updateBodyClass = () => {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);
  }

  isDarkModeEnabled = (): boolean => {
    return this.isDarkMode;
  }

  addBook = (book: any) => {
    this.books.push(book);
  }

  getBooks = () => {
    return this.books;
  }

  // New methods for managing administrators
  addAdmin = (newAdmin: string) => {
    if (newAdmin.trim() === '') {
      return 'Empty field!';
    }
    if (this.admins.length < 2) {
      this.admins.push(newAdmin.trim());
      return 'Administrator added successfully';
    } else {
      return 'Maximum 2 administrators allowed';
    }
  }

  getAdmins = () => {
    return this.admins;
  }
}

//toggleDarkMode = () => { ... }:
//מחליפה את המאפיין isDarkMode בין true ל-false
//גם קורא ל-updateBodyClass כדי לעדכן את הגוף למצב החדש.

//private updateBodyClass מחליפה בין הכהה ולבהיר בהתבסס על המצב הנוכחי של המשתנה שלנו
