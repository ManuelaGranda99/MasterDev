import { Component, OnInit } from '@angular/core';
import { ConsultaInmueblesService } from '../consulta-inmuebles.service';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.css']
})
export class InmobiliariaComponent implements OnInit {

  constructor(private service: ConsultaInmueblesService) { }

  ngOnInit(): void {
  }

  registrarInmueble(){
    let nombre = (document.getElementById("Nombre") as HTMLInputElement).value
    let tipo = (document.getElementById("Tipo") as HTMLInputElement).value
    //let barrio = (document.getElementById("Barrio") as HTMLInputElement).value
    let transaccion = (document.getElementById("Transaccion") as HTMLInputElement).value
    let area = (document.getElementById("Area") as HTMLInputElement).value
    let banios = (document.getElementById("Banios") as HTMLInputElement).value
    let habitaciones = (document.getElementById("Habitaciones") as HTMLInputElement).value
    let estrato = (document.getElementById("Estrato") as HTMLInputElement).value
    let precio = (document.getElementById("Precio") as HTMLInputElement).value
    var inmueble={
      nombre:nombre,
      tipo:tipo,
      //barrio:barrio,
      transaccion:transaccion,
      area:area,
      banios:banios,
      habitaciones:habitaciones,
      estrato:estrato,
      precio:precio
    }
    this.service.registrarInmueble(inmueble);
    alert("registrando inmueble");
  }

}
