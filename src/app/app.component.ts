import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';
import {NavbarComponent} from "./components/navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopweb';
  currentUser: any; // Tạo biến currentUser để lưu thông tin người dùng hiện tại
  constructor(private auth: Auth) {} // Inject Auth vào constructor
  async login(){ // Tạo hàm login
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    // Sử dụng signInWithPopup để đăng nhập bằng Google
    this.currentUser = credential.user; // Lưu thông tin người dùng vào biến currentUser
    console.log(this.currentUser); // Log ra thông tin người dùng
    const token = await credential.user.getIdToken(); // Lấy token của người dùng
    console.log(token); // Log ra token
  }
}
