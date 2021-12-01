import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  constructor(private service: UbicacionService) { }

  ngOnInit(): void {
  }

  registrarUbicacion(){
    let barrio = (document.getElementById("Zona") as HTMLInputElement).value
    let zona = (document.getElementById("Barrio") as HTMLInputElement).value
    var ubicacion={
      barrio:barrio,
      zona:zona,
    }
    this.service.registrarUbicacion(ubicacion);
    alert("registrando ubicacion");
  }

}
