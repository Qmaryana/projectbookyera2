import { Component } from '@angular/core';
import { ServiesService } from '../servies.service'; // import

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  newAdmin: string = '';

  constructor(private serviesService: ServiesService) { }

  SetDarkMode = (event: Event) => {
    this.serviesService.toggleDarkMode();
  }

  addAdmin = () => {
    const result = this.serviesService.addAdmin(this.newAdmin);
    alert(result); // Show the result as an alert (success or error message)
    this.newAdmin = ''; // Reset input field
  }

  get admins() {
    return this.serviesService.getAdmins(); // Retrieve the list of admins from the service
  }
}