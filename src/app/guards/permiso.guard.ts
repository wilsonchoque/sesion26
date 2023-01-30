import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let logeado = localStorage.getItem('logeado');
      if(logeado == 'true'){
        return true
      }else {

        swal.fire({
          icon: 'error',
          title: 'Tiene que Loguearse',
          text: 'Es necesario para poder ingresar',
        })

        return false;
      }


    
  }
  
}
