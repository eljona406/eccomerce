import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedUserService } from 'src/app/shared/helpers/user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  message: string;
  done: boolean;
  addressForm = this.formBuilder.group({
    company: null,
    username: [null, Validators.required],
    password: [null, Validators.required],
    repeatPassword: [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private sharedUserService: SharedUserService) {
    this.message = '';
    this.done = false;
  }

  onSubmit() {
    const controls = this.addressForm.controls;
    if (controls.password.value &&
      controls.repeatPassword.value &&
      controls.password.value !== controls.repeatPassword.value) {
      controls.repeatPassword.setErrors({ noMatch: true });
      return;
    }

    if (controls.username.value &&
      controls.password.value) {
      this.sharedUserService.register(
        controls.username.value,
        controls.password.value
      ).subscribe((done) => {
        this.done = done;
        if (this.done) {
          this.message = 'Registered Successfully';
        } else {
          this.message = 'User might exist';
        }

        controls.username.setValue('');
        controls.username.setErrors(null);

        controls.password.setValue('');
        controls.password.setErrors(null);

        controls.repeatPassword.setValue('');
        controls.repeatPassword.setErrors(null);

        this.addressForm.markAsUntouched();
      });
    }
  }
}
