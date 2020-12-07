import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user;
  userlist: User[];
  isSubmitted;
  constructor(private userService: UserService) {
    this.user = new User(0, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  //  this. getusers();
  }
  // tslint:disable-next-line:typedef
  submit() {
    this.isSubmitted = true;
    this.user.dob='2020-02-02';
    this.userService.createuser(this.user).subscribe((data) => {
      console.log(data);
      this.user = data;
      this.showSuccessAlert();
});
  }
  getusers(): void {
    this.userService.getusers().subscribe((data) => {console.log(data);
                                                     this.userlist = data;
    });
    return null;
  }
  // Success
  showSuccessAlert() {
    Swal.fire('Yikes!', 'Sign Up Successful!', 'success')
  }

}
