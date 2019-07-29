import { Component, OnInit } from '@angular/core';
import { Message } from './models/message.model';
import {ChatService} from '../app/services/chat/chat.service';
import anime from '../assets/lib/anime.es.js';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chatbot';
  messages: Message[]=[];
  ngOnInit(){
    //let message = new Message("Welcome","assets/user.svg",new Date())
  //  this.messages.push(message);
  let ani= anime({
    targets:'h1',
    translateY: 80,
 duration: 10000
  })
  ani.play();
  }
  constructor(private chatservice:ChatService){}
  sendMessage(message_content){
    let message = new Message(message_content,"other",new Date())
    this.messages.push(message);
    console.log(message_content)
    this.chatservice.send(message_content).subscribe(res =>{
      
      console.log(res);
      let message = new Message(res.result.speech,"self",new Date())
      this.messages.push(message)
      message_content ="";
    },err =>{
      console.log(err)
    })
  
  }

 

}
