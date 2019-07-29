import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavDrawer} from './NavDrawer/app.navDrawer';
import {ChatService} from '../app/services/chat/chat.service';
import {HttpModule} from'@angular/http';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'node_modules/bootstrap/dist/js/bootstrap.min.js';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { HomeComponent } from './home/home.component';
import {KnowMoreRoutingModule} from './know-more/knowMore-routing.module'
import {AboutMeComponent} from './know-more/about-me/about-me.component';
import { SkillsComponent } from './know-more/skills/skills.component';
import { ProjectsComponent } from './know-more/projects/projects.component';
import { ContactComponent } from './know-more/contact/contact.component'
@NgModule({
  declarations: [
    AppComponent,
    NavDrawer,
    ChatbotComponent,
    AboutMeComponent,
    KnowMoreComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent ],
  imports: [
    HttpModule,
    CommonModule,
    BrowserModule,
    KnowMoreRoutingModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
