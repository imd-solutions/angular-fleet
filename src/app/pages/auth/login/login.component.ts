import { Component, OnInit, TemplateRef } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from 'src/app/services/modal/modal.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  resetForm!: FormGroup
  submitted = false
  ModalService: any
  TEST: string = 'This is a test!'

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })

    this.resetForm = this.fb.group({
      forgottenPassword: new FormControl(null, Validators.required),
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

  openForgottenPasswordModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, {
        size: 'md',
        title: 'Forgotten Password',
        actionBtn: 'Reset Password',
      })
      .subscribe((action: string) => {
        console.log('Action', action)
      })
  }

  onResetFormSubmit(): void {
    this.submitted = true
    console.log('LoginForm', this.resetForm.controls)
  }
}
