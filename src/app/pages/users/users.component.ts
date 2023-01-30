import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{

  usuarios:any=[];

  constructor(private data: UsuarioService, private router:Router){}

  detalles(id:string){
    this.router.navigate(['/detalle', id])
  }

  ngOnInit(): void {
    this.data.getMostrar().subscribe(
      res => {
        console.log(res)
        this.usuarios = res;
      }, err =>{
        
      }
    );
  }
 
}
