import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component'
import {KnowMoreComponent} from './know-more.component'
import {SkillsComponent} from './skills/skills.component'
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  {
      path: 'know-more',
      component: KnowMoreComponent,
      children:[
          {
              path: 'about-me',
              component:AboutMeComponent
          },
          {
              path: 'skills',
              component:SkillsComponent
          },
          {
              path: 'projects',
              component: ProjectsComponent
          },
          {
              path: 'contact',
              component: ContactComponent
          }
      ]
  }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class KnowMoreRoutingModule {} 