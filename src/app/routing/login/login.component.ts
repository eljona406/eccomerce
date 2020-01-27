import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedUserService } from 'src/app/shared/helpers/user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  addressForm = this.formBuilder.group({
    company: null,
    username: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private sharedUserService: SharedUserService) { }

  onSubmit() {
    const controls = this.addressForm.controls;

    if (controls.username.value && controls.password.value) {
      this.sharedUserService.login(controls.username.value, controls.password.value).subscribe((done) => {
        if (done) {
          this.router.navigate(['./products']);
        } else {
          controls.username.setValue('');
          controls.password.setValue('');
        }
      });
    }
  }
}
