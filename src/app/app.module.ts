import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRightComponent } from './components/home/home-right/home-right.component';
import { HomeLeftComponent } from './components/home/home-left/home-left.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExpLeftComponent } from './components/experiences/exp-left/exp-left.component';
import { ExpRightComponent } from './components/experiences/exp-right/exp-right.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsContentComponent } from './components/skills/skills-content/skills-content.component';

export function startupServiceFactory(data: DataService) {
  return () => {
    // console.log('initialize');
    return data.getAllResumeInfo();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    HomeRightComponent,
    HomeLeftComponent,
    ExperiencesComponent,
    ExpLeftComponent,
    ExpRightComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    SkillsComponent,
    SkillsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    ScrollingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [DataService],
      multi: true
    },
    DeviceDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
