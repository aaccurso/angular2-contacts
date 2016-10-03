import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit() {
    this.userService.login(this.user.username, this.user.password)
      .subscribe(() => this.router.navigate(['contacts']));
  }

  ngOnInit() {
    this.user = new User();
  }

}
