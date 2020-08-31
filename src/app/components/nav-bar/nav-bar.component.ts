import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _authFireService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this._authFireService.login();
    //this.router.navigate(['/catalog']);
  }
  logout(){
    this._authFireService.logout();
    this.router.navigate(['']);
  }
  isLogged(): boolean{
    return this._authFireService.isLogged();
  }
}
