import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
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
    ExpRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [DataService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
