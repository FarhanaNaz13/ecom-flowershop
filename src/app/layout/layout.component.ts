import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private us: UserService,private router: Router) { }

  ngOnInit(): void {
  }
logout(){
  this.us.logout();
  this.router.navigate(['login']);
}
}
