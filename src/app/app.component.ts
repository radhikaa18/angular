import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user="";
  pass="";
  result="";
  

  login(){
    if(this.user=="admin"&& this.pass=="admin123")
    {
      this.result="Login successful";
      console.log("Login successful");
    }
    else{
      console.log("Login failed");
    }
  }

}
