import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:any = {};
  constructor(public _authfireService: AngularFireAuth) {
    this._authfireService.authState.subscribe( user=>{
      console.log(user)
      if (!user){
        return
      }
      this.user.name= user.displayName;
      this.user.uid= user.uid;
      this.user.email = user.email;
      this.user.profilePic = user.photoURL;
    })
  }

  login(){
    this._authfireService.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout(){
    this.user={};
    this._authfireService.signOut();
  }

  isLogged(){
    if(this.user.uid){
      return true;
    }
    return false;
  }
}
