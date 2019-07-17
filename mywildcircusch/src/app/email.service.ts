import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private myService: HttpClient;

  constructor(http: HttpClient) {
    this.myService = http;
  }

  public sendEmail(email: Email): Observable<any> {

    return this.myService.post(
      environment.domain + '/sendemail',
      {
        firstname: email.getFirstname(),
        email: email.getEmail(),
        phone: email.getPhone(),
        message: email.getMessage()
      }
    );
  }
}
