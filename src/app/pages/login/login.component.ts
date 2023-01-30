import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  constructor(private usuarioService: UsuarioService, private router:Router){}
  
  formulario = new FormGroup({
    usuarioControl: new FormControl ('', [Validators.required, Validators.minLength(3)]),
    contraseñaControl: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  ngOnInit(): void {
    localStorage.setItem('logeado','false')
  }

  usuarios:any[]=[]
  
  login(){
    this.usuarioService.getMostrar().subscribe(res=>{
      for (let i of res){
        this.usuarios.push({usuario:i.username, contraseña:i.email})
      }
    })
    for(let i of this.usuarios){
      if(i.usuario==this.formulario.get('usuarioControl')?.value && i.contraseña==this.formulario.get('contraseñaControl')?.value){
        localStorage.setItem('logeado','true')
        
        swal.fire({
          icon: 'success',
          title: 'Usuario Correcto',
          showConfirmButton: false,
          timer: 1500
        })

        this.formulario.reset()
        this.router.navigate(['/users'])
        break
      }else{
        
        swal.fire({
          icon: 'error',
          title: 'Usuario Incorrecto',          
        })
        
        localStorage.setItem('logeado','false')
       
      }
    }
  }


}
