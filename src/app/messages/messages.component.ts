import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private messages: any[];
  msg: Object;
  displayConfirmation: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    return this.messageService.get()
      .toPromise()
      .then(messages => this.messages = messages);
  }

  delMessage() {
    console.log(this.msg);
    return this.messageService.delete(this.msg['id'])
      .subscribe(data => {
        this.getMessages();
        return true;
      }, error => {
        console.error("Error deleting food!");
        return Observable.throw(error);
      }
      )
  }

  showDialog(message: object) {
    console.log(message);
    this.msg = message;
  }

}
