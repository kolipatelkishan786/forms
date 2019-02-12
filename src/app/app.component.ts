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
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggesteName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggesteName,
        email: ''
      },
      secret: 'pet',
      QuestionAnswer: 'hii',
      gender: 'male'
    });*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggesteName
      }
    });
  }

  // onsubmit(form: NgForm) {
  //   console.log(form);
  // }

  onsubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.QuestionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
