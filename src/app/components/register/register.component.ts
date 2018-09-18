import { Component, OnInit } from '@angular/core';

import { regexpPatterns } from '../../shared/patterns';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pattern = regexpPatterns;

  constructor() { }

  ngOnInit() { }

  registerUser(form) {
    console.log('form:', form.value);
  }

}
