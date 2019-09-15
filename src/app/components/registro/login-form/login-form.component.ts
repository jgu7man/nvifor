import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public usuario: UsuarioModel
  constructor() {
    this.usuario = new UsuarioModel('','','','','')
   }

  ngOnInit() {
  }

}
