import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SignupRequestPayload } from './signup-request.payload';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  signRequestPayload: SignupRequestPayload;
    
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signRequestPayload = {
      username:'',
      email:'',
      password:''
    };
   }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  signup() {
    this.signRequestPayload.username = this.signupForm.get('username').value;
    this.signRequestPayload.email = this.signupForm.get('email').value;
    this.signRequestPayload.password = this.signupForm.get('password').value;
    this.authService.signup(this.signRequestPayload).subscribe(() => {
      this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
    }, () => {
      this.toastr.error('Registration Failed! Please try again');
    });
  }

}
