import {Injectable} from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: any;

  constructor(private auth: Auth) {
  }

  async login() {
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.currentUser = credential.user;
    console.log(credential);
  }

  async logout() {
    this.auth.signOut();
    this.currentUser = null;
  }


}
