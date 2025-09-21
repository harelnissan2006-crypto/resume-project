import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  name: string = '';
  email: string = '';
  message: string = '';

  submittedData: string = '';

  submitForm() {
    this.submittedData =
      'Name: ' + this.name + ', Email: ' + this.email + ', Message: ' + this.message;

    this.name = '';
    this.email = '';
    this.message = '';
  }
}
