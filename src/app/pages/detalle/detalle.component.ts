import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  usuarios:any[]=[];

  constructor(private usuarioService:UsuarioService, private route:Router, private router: ActivatedRoute){}
  id!:string|null;

  regresar(){
    this.route.navigate(['/users'])
  }

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get('id')
    this.usuarioService.getMostrar().subscribe(res=>{
      for (let i of res){
        if(i.id==Number(this.id)){
          this.usuarios = [i.name, i.phone, i.website]
          break
        }
      }
    })
  }
}
