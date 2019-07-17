import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstname: string;
  email: string;
  phone: string;
  message: string;

  constructor(private myService: EmailService) {

   }

  ngOnInit() {
  }

  submitForm() {
    this.myService.sendEmail(new Email(this.firstname, this.email, this.phone, this.message)).subscribe(
      () => {
        alert('Mail envoyé');
      },
      error => {
        alert('Une erreur est survenue');
      }
    );
  }
}
