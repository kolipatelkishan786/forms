import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  suggestUserName() {
    const suggesteName = 'Superuser';
  }

  onsubmit(form: NgForm) {
    console.log(form);
  }
}
