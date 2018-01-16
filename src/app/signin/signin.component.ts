import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],  
})
export class SigninComponent implements OnInit {
constructor( private router:Router ) { }

  doSignin(e){    
    e.preventDefault();
    console.log(e);

    var companyCode   = e.target.elements[0].value;
    var userId        = e.target.elements[1].value;
    var userPassword  = e.target.elements[2].value;

    console.log(companyCode, userId, userPassword );

    if(userId == 'admin' && userPassword == '123qwe!')
    { 
      this.router.navigate(['/home']);
    }

    return false;

  }

  ngOnInit() {
  }

}
