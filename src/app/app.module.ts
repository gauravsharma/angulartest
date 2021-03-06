import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LightboxModule, TooltipModule, DataTableModule, 
  SharedModule, ButtonModule, DialogModule, MessagesModule, PanelModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { Mycomponent2Component } from './mycomponent2/mycomponent2.component';
import { Mycomponent3Component } from './mycomponent3/mycomponent3.component';
import { Mycomponent4Component } from './mycomponent4/mycomponent4.component';
import { Mycomponent5Component } from './mycomponent5/mycomponent5.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ImagegridComponent } from './imagegrid/imagegrid.component';
import { MessageService } from './services/message.service';
import { SearchService } from './services/search.service';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginService } from './services/login.service';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  { path: '', component: Mycomponent5Component, data: { title: 'Home' } },
  { path: '1', component: MycomponentComponent, data: { title: 'About' } },
  { path: '2', component: Mycomponent2Component, data: { title: 'Services' } },
  { path: '3', component: Mycomponent3Component, data: { title: 'Blog' } },
  { path: '4', component: Mycomponent4Component, data: { title: 'Contact' } },
  { path: 'messages', component: MessagesComponent, data: { title: 'Messages' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'logout', component: LogoutComponent, data: { title: 'Logout' } },
  { path: '**', component: PagenotfoundcomponentComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    Mycomponent2Component,
    Mycomponent3Component,
    Mycomponent4Component,
    Mycomponent5Component,
    PagenotfoundcomponentComponent,
    ImagegridComponent,
    MessagesComponent,
    LoginComponent,
    NavigationComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJ0AS4e2VWVBIjgbLcXFIt-VGkL64bt9s'
    }),
    TooltipModule,
    LightboxModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule,
    MessagesModule,
    PanelModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService, SearchService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
