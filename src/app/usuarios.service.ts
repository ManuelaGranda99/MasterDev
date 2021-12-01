import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario:Data){
    this.http.put("http://localhost:900/registrarUsuario",usuario).subscribe( data => {
      console.log("llego al servicio ?#$%");
      console.log(data)
    },
    err => console.log(err));
  };
}
