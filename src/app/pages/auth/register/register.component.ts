import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  submitted = false

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      fleet: new FormControl(null, Validators.required),
      terms: [false, Validators.requiredTrue],
    })
  }

  get registerFormControl() {
    return this.registerForm.controls
  }

  onFormSubmit(): void {
    this.submitted = true
    if (this.registerForm.controls['terms'].value === 'on') {
      this.registerForm.controls['terms'].setErrors(null)
    }

    // this.registerForm.controls['terms']['status'] = true
    console.log('RegisterForm', this.registerForm.controls['terms'])
    if (this.registerForm.valid) {
    }
  }
}
