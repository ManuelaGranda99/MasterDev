import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    let cedula = (document.getElementById("cedula") as HTMLInputElement).value
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value
    let apellido = (document.getElementById("apellido") as HTMLInputElement).value
    let correo = (document.getElementById("correo") as HTMLInputElement).value
    let celular = (document.getElementById("celular") as HTMLInputElement).value
    let user = (document.getElementById("user") as HTMLInputElement).value
    let clave = (document.getElementById("clave") as HTMLInputElement).value
    var usuario={
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      correo:correo,
      celular:celular,
      user:user,
      clave:clave
    }
    this.service.registrarUsuario(usuario);
    alert("registrando usuario");
  }

}
