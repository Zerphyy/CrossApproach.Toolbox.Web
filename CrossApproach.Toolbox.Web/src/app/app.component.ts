import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
private API_URL = 'https://136.144.176.71:7088/';
constructor (private http: HttpClient) {};	

instanceName: string = '';
adminPassword: string = '';
adminEmail: string = '';
onSubmit() {
  const payload = {
    instance: this.instanceName,
    adminPass: this.adminPassword,
    adminEmail: this.adminEmail
  }
  this.http.post(`${this.API_URL}api/moodleapi/cmi`, payload, { responseType: 'text' })
  .subscribe({
    next: (response) => this.successMessage = response,
    error: (error) => this.errorMessage = error
  });
}
  title = 'CrossApproach.Toolbox.Web';
errorMessage: any;
successMessage: any;
}
