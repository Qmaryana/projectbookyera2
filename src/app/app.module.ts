import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { BooksinComponent } from './booksin/booksin.component';
import { SettingsComponent } from './settings/settings.component';

import { RouterModule, Routes } from '@angular/router'; //import
import { FormsModule } from '@angular/forms'; //import
import { ServiesService } from './servies.service'; //import

const appRouting: Routes = [ // מערך של הדפים שלנו
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'booksin', component: BooksinComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    BooksinComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //שורה חשובה צריך להוסיף את זה כדי שה HTML יעבוד
    //עשינו לשורה הזאת import
    RouterModule.forRoot(appRouting), // Provide routes to RouterModule here העתקנו מהמצגת את זה
  ],
  providers: [ServiesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private serviesService: ServiesService) { } //import לסרביס כדי שנוכל להשתמש בו
}
