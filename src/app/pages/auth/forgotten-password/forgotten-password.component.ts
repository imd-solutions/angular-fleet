import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from 'src/app/services/modal/modal.service'

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
})
export class ForgottenPasswordComponent implements OnInit {
  resetForm!: FormGroup
  submitted = false

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      forgottenPassword: new FormControl(null, Validators.required),
    })
  }

  get resetFormControl() {
    return this.resetForm.controls
  }

  onResetFormSubmit(): void {
    this.submitted = true
    console.log('resetForm', this.resetForm.controls)
  }
}
