import { Component } from '@angular/core';


@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent {
  ImagePath: string;
  
  constructor() {
    //image location
    this.ImagePath = 'src\assets\Image\Facebook.png'
  }

}
