import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 

    this.correo = {

      titulo: "Titulo del Email",
      cuerpo: 'Lorem fistrum pecador ese pedazo de jarl.Consectetur qui eiusmod ut ad. De la pradera por la gloria de mi madre qué dise usteer a peich mamaar laboris tiene musho peligro amatomaa. Elit dolor diodenoo duis está la cosa muy malar no puedor adipisicing qui caballo blanco caballo negroorl se calle ustée torpedo. Nostrud papaar papaar magna esse a gramenawer jarl por la gloria de mi madre está la cosa muy malar. A gramenawer ut ese que llega benemeritaar llevame al sircoo te voy a borrar el cerito tiene musho peligro ut. Commodo me cago en tus muelas sed consectetur. Quietooor caballo blanco caballo negroorl por la gloria de mi madre exercitation ad duis elit consectetur pecador llevame al sircoo. Pecador ese hombree veniam ullamco jarl por la gloria de mi madre.      ',
      emisor: 'correoEmisor@gmail.com.inv',
      destinatario: 'correoDestinatario@gmail.com.inv'

    }

  }

  ngOnInit(): void {
  }

}
