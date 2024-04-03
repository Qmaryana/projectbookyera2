import { Component } from '@angular/core';
import { ServiesService } from '../servies.service'; // import

@Component({
  selector: 'app-booksin',
  templateUrl: './booksin.component.html',
  styleUrls: ['./booksin.component.css']
})
export class BooksinComponent {
  books: any[] = []; //מערך ספרים

  constructor(private ServiesService: ServiesService) { //פונקציה מהסרביס שמחזירה לנו את הפרים
    this.books = this.ServiesService.getBooks();
  }
}