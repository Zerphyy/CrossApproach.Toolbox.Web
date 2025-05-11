import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
private API_URL = 'http://localhost:5170/';
constructor (private http: HttpClient) {};	
onSubmit() {
  this.http.get(`${this.API_URL}api/createMoodle`, { responseType: 'text' })
    .subscribe({
      next: (response) => alert(response),
      error: (err) => console.error(err)
    });
}
  title = 'CrossApproach.Toolbox.Web';
errorMessage: any;
successMessage: any;
}
