import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {map} from "rxjs/operators";
/*import * as express from 'express';
import * as parser from 'body-parser';
import { error } from 'util';
import { request } from 'https';*/
@Injectable({
  providedIn: 'root'
})
export class ChatService {
url = "https://api.dialogflow.com/v1/query";
accessToken= "170825c2d8634631b5acbf93d50cbdfd";
//app= express();
result;
 
weatherAPIkey="cbaf2db11159fa47dd93f6a0ca6b815f";
  constructor(private http:Http) {
  //this.app.use(parser.json());
  //this.app.use(parser.urlencoded({extended:true}))
  
  }
  
  public send(message:string){
    let data={
      lang: "en",
      sessionId: "123321",
      query: message
    }
   
    let headers = new Headers();
    headers.append("Authorization","Bearer "+this.accessToken);
    
    return this.http.post(this.url,data,{headers:headers}).pipe(map(res=>{
      return res.json();
    }));
  }
  
  /*public weatherInfo(){
    return this.app.post('/weather',function(req,res){
      console.log('received request.')
      if(!req.body)
        return res.sendStatus(400)
      res.setHeader('Content-Type','application/json');
      var city = req.body.queryResult.parameters['geo-city'];
      var w=this.getWeather(city);
      let response;
      let responseObj={
        "fullfillmentText":response,
        "fullfillmentMessages": [{"text":{"text":[w]}}],
        "source": ""
      }
      return res.json(responseObj);
    })
  }
  public getWeather(city){
    this.result=undefined;
    var url ="api.openweathermap.org/data/2.5/weather?q={city}&units=imperial&appid={this.weatherAPIkey}"
    console.log(url);
    var req=request(url,this.getInfo)
    while(this.result== undefined)
    {
      require('deasync').runLoopOnce();
    }
    return this.result;
  }

  public getInfo(body){
    
    var weather=JSON.parse(body)
    if(weather.message == 'city not found'){
      this.result = "Unable to get weather info "+ weather.message;
    }
    else{
      this.result="Its "+weather.main.temp+" degrees with "+weather.weather[0].description;
    }
  }*/
}
