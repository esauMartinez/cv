import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './views/home/home.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faAws, faBootstrap, faCss3Alt, faGithub, faHtml5, faJs, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { SkillFrontComponent } from './components/skill-front/skill-front.component';
import { SkillDBComponent } from './components/skill-db/skill-db.component';
import { SkillBackComponent } from './components/skill-back/skill-back.component';
import { SkillDesignComponent } from './components/skill-design/skill-design.component';
import { SkillCloudComponent } from './components/skill-cloud/skill-cloud.component';
import { SkillFrameworkComponent } from './components/skill-framework/skill-framework.component';
import { SkillSOComponent } from './components/skill-so/skill-so.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    SkillsComponent,
    HomeComponent,
    SkillFrontComponent,
    SkillDBComponent,
    SkillBackComponent,
    SkillDesignComponent,
    SkillCloudComponent,
    SkillFrameworkComponent,
    SkillSOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCss3Alt, faGithub, faJs, faHtml5, faNodeJs, faAngular, faVuejs, faReact, faBootstrap, faAws);
  }
}
