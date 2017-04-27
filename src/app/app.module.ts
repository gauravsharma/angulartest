import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LightboxModule, TooltipModule } from 'primeng/primeng';

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


const appRoutes: Routes = [
  { path: '', component: Mycomponent5Component },
  { path: '1', component: MycomponentComponent },
  {
    path: '2',
    component: Mycomponent2Component,
    data: { title: '2 component' }
  },
  {
    path: '3',
    component: Mycomponent3Component
  },
  {
    path: '4',
    component: Mycomponent4Component
  },
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
    ImagegridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJ0AS4e2VWVBIjgbLcXFIt-VGkL64bt9s'
    }),
    TooltipModule,
    LightboxModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
