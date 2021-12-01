import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConsultaInmueblesService {

  constructor(private http: HttpClient) { }

  registrarInmueble(inmueble:Data){
    this.http.put("http://localhost:900/registrarInmueble",inmueble).subscribe( data => {
      console.log("llego al servicio ?#$%");
      console.log(data)
    },
    err => console.log(err));
  };

/*
  getInmueble(){
    //funcion con la que se va a conectar con el api
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    this.http.get("http://localhost:900/consulta",{headers:headers}).subscribe(data=>{
      console.log(data) 
    })
  }
*/

}
