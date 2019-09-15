import { Component, OnInit } from '@angular/core';
// import { ChatService, MensajeModel } from '../../../services/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public chat: boolean = false;
  public open: boolean = false;
  public mensajes: any
  public msjVal: string

  constructor(
    // private _chat: ChatService
  ) { }

  ngOnInit() {
    // var mjs
    // mjs =  this._chat.conversacion.asObservable().pipe(
    //   scan((acc, val) => acc.concat(val)
    //   ));
    // mjs.subscribe(val => {
    //   this.mensajes = val
    // })
  }

  sendMsj() {
    // this._chat.convers(this.msjVal);
    this.msjVal = ''
    $("#chatBox").stop().animate({ scrollTop: $("#chatBox")[0].scrollHeight}, 1000);
  }

  openChat(){
    this.chat = !this.chat
    this.open = !this.open
    if (!this.open) {
      $("#chat").animate({width: '83px'}, 300)
    } else {
      $("#chat").animate({width: '280px'}, 300)
    }
  }

}
