import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    NzSpinModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  signinForm!: FormGroup;
  isSpinning = false;

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.signinForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signin() {
    console.log(this.signinForm.value);
    this.service.login(this.signinForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
