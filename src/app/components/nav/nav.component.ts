import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
 
  nombre='Login';

  logeado= localStorage.getItem('logeado'); 
 
  ngOnInit(): void {
    if(this.logeado == 'true'){
      this.nombre = 'LogOut'
    }else{
      this.nombre = 'Login'
    }

    
  }
  

  
  
 




  
}
