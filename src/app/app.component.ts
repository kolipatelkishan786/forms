import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggesteName = 'Superuser';
  }

  // onsubmit(form: NgForm) {
  //   console.log(form);
  // }

  onsubmit() {
    console.log(this.signupForm);
  }
}
