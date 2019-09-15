import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  public usuario: UsuarioModel
  constructor() {
    this.usuario = new UsuarioModel('','','','','')
   }

  ngOnInit() {
  }

}
