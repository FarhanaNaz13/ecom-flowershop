import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
user : User = new User(0, '', '', '', '2020-10-20', '', '', '', '');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
login(){
  this.userService.login(this.user);

}
showSuccessAlert() {
  Swal.fire('Yikes!', 'Welcome to flory!', 'success')
}
}