import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() {

    const correo1 = {
      titulo: "Titulo del 1",
      cuerpo: 'Lorem fistrum ese hombree diodeno está la cosa muy malar te voy a borrar el cerito. Jarl diodenoo ese que llega se calle ustée a wan qué dise usteer a gramenawer. Diodenoo mamaar benemeritaar está la cosa muy malar condemor fistro fistro amatomaa. Hasta luego Lucas llevame al sircoo se calle ustée está la cosa muy malar. Caballo blanco caballo negroorl tiene musho peligro qué dise usteer ese pedazo de qué dise usteer mamaar papaar papaar ese pedazo de te voy a borrar el cerito.',
      emisor: 'correoEmisor1@gmail.com',
      destinatario: 'correoDestino1@gmail.com'
    };

    const correo2 = {
      titulo: "Titulo del 2",
      cuerpo: 'Lorem fistrum ese hombree diodeno está la cosa muy malar te voy a borrar el cerito. Jarl diodenoo ese que llega se calle ustée a wan qué dise usteer a gramenawer. Diodenoo mamaar benemeritaar está la cosa muy malar condemor fistro fistro amatomaa. Hasta luego Lucas llevame al sircoo se calle ustée está la cosa muy malar. Caballo blanco caballo negroorl tiene musho peligro qué dise usteer ese pedazo de qué dise usteer mamaar papaar papaar ese pedazo de te voy a borrar el cerito.',
      emisor: 'correoEmisor2@gmail.com',
      destinatario: 'correoDestino@gmail2.com'
    };

    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);

  }

  ngOnInit(): void {
  }

}
