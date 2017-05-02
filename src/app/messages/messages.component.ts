import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private messages: any[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    return this.messageService.get()
      .toPromise()
      .then(messages => this.messages = messages);
  }

}
