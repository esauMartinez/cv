import { Component, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'HTML',
      porcent: 70,
      prefix: 'fab',
      icon: 'html5',
      type: 'design'
    },
    {  
      name: 'CSS',
      porcent: 45,
      prefix: 'fab',
      icon: 'css3-alt',
      type: 'design'
    },
    {  
      name: 'JS',
      porcent: 90,
      prefix: 'fab',
      icon: 'js',
      type: 'front'
    },
    {  
      name: 'Node JS',
      porcent: 90,
      prefix: 'fab',
      icon: 'node-js',
      type: 'back'
    },
    {  
      name: 'ASP.NET Core',
      porcent: 90,
      prefix: 'fab',
      icon: 'node-js',
      type: 'back'
    },
    {  
      name: 'GitHub',
      porcent: 90,
      prefix: 'fab',
      icon: 'github',
      type: 'version_control'
    },
    {  
      name: 'Angular',
      porcent: 90,
      prefix: 'fab',
      icon: 'angular',
      type: 'front'
    },
    {  
      name: 'VueJS',
      porcent: 90,
      prefix: 'fab',
      icon: 'vuejs',
      type: 'front'
    },
    {  
      name: 'ReactJS',
      porcent: 90,
      prefix: 'fab',
      icon: 'react',
      type: 'front'
    },
    {  
      name: 'Bootstrap',
      porcent: 90,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'design'
    },
    {  
      name: 'SQL Server',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'db'
    },
    {  
      name: 'MongoDB',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'db'
    },
    {  
      name: 'Socket.io',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'framework'
    },
    {  
      name: 'SignalR',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'framework'
    },
    {  
      name: 'Express',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'framework'
    },
    {  
      name: 'PM2',
      porcent: 60,
      prefix: 'fab',
      icon: 'bootstrap',
      type: 'framework'
    },
    {  
      name: 'AWS EC2',
      porcent: 60,
      prefix: 'fab',
      icon: 'aws',
      type: 'cloud'
    },
    {  
      name: 'Windows',
      porcent: 60,
      prefix: 'fab',
      icon: 'aws',
      type: 'cloud'
    },
    {  
      name: 'Ubuntu',
      porcent: 60,
      prefix: 'fab',
      icon: 'aws',
      type: 'cloud'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


export interface Skill {
  name: string;
  porcent: number;
  prefix: 'fas' | 'fab' | 'far' | 'fal' | 'fad' | 'fac';
  icon: IconName;
  type?: string;
}