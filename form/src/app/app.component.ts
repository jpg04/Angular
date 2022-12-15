import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  name = new FormControl('');

  // registerLocaleData(regForm:NgForm){
  //   console.log(regForm)
  // }
  

  // formreg:FromGroup
  // constructor
  // ngOnInit(){
  //   this.formreg=FormGroup({
  //     Name: new FormControl('',Validators.required);
  //     email: new FormControl('',Validators.compose(Validators.required,Validators.));
  //     Name: new FormControl('',Validators.required);
  //   })
// }
}

