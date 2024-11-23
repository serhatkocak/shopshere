import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { Validators: this.passwordMatchValidator });

  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmpassword = form.get('confirmpassword')?.value;
    return password === confirmpassword ? null : { passwordMismatch: true };
  }

  getControlName(controlName: string) {
    const control = this.registerForm.controls[controlName]
    return control.invalid && control.touched;
  }


  register() {
    this.router.navigate(['/home'])
  }


}
