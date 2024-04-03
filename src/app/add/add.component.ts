import { Component } from '@angular/core';
import { ServiesService } from '../servies.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newBook = { name: '', author: '', tags: '', quantity: 0, image: '' }; //הגדרת אובייקט

  constructor(private ServiesService: ServiesService) { }

  addBook = () => {
    this.ServiesService.addBook(this.newBook); //קורא לפונקציה מהסרביס
    alert('Book added successfully!');
    this.newBook = { name: '', author: '', tags: '', quantity: 0, image: '' }; //איפוס האובייקט
  }

  onFileSelected = (event: any) => {
    const file: File = event.target.files[0]; // מכיל קובץ של התמונה
    if (file) {
      const reader = new FileReader(); //קורא את הקובץ Read the file as a data URL
      reader.onload = (e) => { //indicating that the file has been successfully loaded.
        // Set the data URL as the image source
        this.newBook.image = reader.result as string; //מכיל את נתוני הקובץ ככתובת URL לנתונים
      };
      reader.readAsDataURL(file); // קורא את הקובץ ככתובת URL לנתונים
    }
  }
}