import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/user.model';
import { ViewModel } from '../model/view.model';



@Injectable({
  providedIn: 'root',
})
export class UserService {
     baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private router: Router) {}

  login(user) {
    this.http
      .post<ViewModel>('http://localhost:8080/api/user/login', user)
      .subscribe((data) => {
        if (data.status == 'success') {
          localStorage.setItem('auth_username', data.data.username);
          localStorage.setItem('isCrudAppiLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      });
  }
  isLoggedIn(): Boolean {
    const isLogin = Boolean(localStorage.getItem('isCrudAppiLoggedIn'));
    return isLogin;
  }
  logout(): void {
    localStorage.removeItem('auth_username') ;
    localStorage.removeItem('isCrudAppiLoggedIn');
  }
  getusers(): Observable<User[]> {
     const response = this.http.get<User[]>(this.baseUrl + '/api/user/index');

     return response;
   }
   createuser(data): Observable<User> {
    const response = this.http.post<User>(this.baseUrl + '/api/user/save' , data);

    return response;
  }

 
}
