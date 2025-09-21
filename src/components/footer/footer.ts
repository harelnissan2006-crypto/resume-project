import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
email: string = '';
message: string = '';

subscribe() {
  this.message = `Thank you for subscribing, ${this.email}!`;
}

}
