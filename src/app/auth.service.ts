import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "Auth"

  users: any[] = [
    {
      id: 0,
      name: 'David',
      username: 'david',
      password: 'abc',
    },
    {
      id: 1,
      name: 'Matheus',
      username: 'matboing',
      password: 'abc',
    }
  ];
  session: any;

  constructor(private router: Router, private http: HttpClient) {
    let session: any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    }

    this.session = session;
  }

  login(username: string, password: string) {
    let user = this.users.find((u)=>u.username=== username&& u.password===password);

    if(user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }

  // login(username: string, password: string) : Observable<any>{
  //   const loginData = { username, password };

  //   return this.http.post<any>(`${environment.apiUrl}/${this.url}/login`, loginData)
  // }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
