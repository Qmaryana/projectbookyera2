import { Component } from '@angular/core';
import { ServiesService } from '../servies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newBook = { name: '', author: '', tags: '', quantity: 0, image: '' };
  isImageUploaded = false; // Flag to track if an image has been uploaded

  constructor(private ServiesService: ServiesService) { }

  addBook = (form: NgForm) => {
    if (this.isImageUploaded) { // Check if an image has been uploaded
      this.ServiesService.addBook(this.newBook);
      alert('Book added successfully!');
      this.newBook = { name: '', author: '', tags: '', quantity: 0, image: '' };
      this.isImageUploaded = false; // Reset the image uploaded flag
      form.resetForm(); // Reset the form including its state
    } else {
      alert('Please upload an image for the book.');
    }
  }

  onFileSelected = (event: any) => {
    const file: File = event.target.files[0]; //שורה זו מאחזרת את הקובץ שנבחר מהאירוע. זה מניח שרק קובץ אחד נבחר
    if (file) {
      const reader = new FileReader(); //וצר אובייקט חדש המשמש לקריאת התוכן של הקובץ שנבחר
      reader.onload = () => { //מטפל באירועים כאשר הקובץ נטען.
        this.newBook.image = reader.result as string;
        this.isImageUploaded = true; // Set the flag to true as the image is loaded
      };
      reader.readAsDataURL(file); //קוראת את התוכן של הקובץ  שצוין ככתובת URL של נתונים.
    }
  }
}
//הוא מחלץ את הקובץ שנבחר, קורא אותו ככתובת URL לנתונים באמצעות FileReader