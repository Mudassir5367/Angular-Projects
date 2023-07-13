import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Auth-guard';
  username='';
  password='';
  aunthenticateUser ='admin'
  aunthenticatePassword ='admin'

constructor(    private router: Router){

}

  ngOnInit(){
    this.username = JSON.parse(localStorage.getItem('user') || '')
    this.password = JSON.parse(localStorage.getItem('password') || '')
  }
  
  checkPasword(){
    localStorage.setItem('user',JSON.stringify(this.username))
    localStorage.setItem('password',JSON.stringify(this.password))

    if(this.aunthenticateUser === this.username && this.aunthenticatePassword  === this.password){
      console.log('called');
      
      this.router.navigate(['dashboard'])
    }
    
  
  }

}
