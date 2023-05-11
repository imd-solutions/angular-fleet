import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  submitted = false

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  get loginFormControl() {
    return this.loginForm.controls
  }

  onFormSubmit(): void {
    this.submitted = true
    console.log('LoginForm', this.loginForm.controls)
    if (this.loginForm.valid) {
    }
  }
}
