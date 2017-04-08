import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { Mycomponent2Component } from './mycomponent2/mycomponent2.component';
import { Mycomponent3Component } from './mycomponent3/mycomponent3.component';
import { Mycomponent4Component } from './mycomponent4/mycomponent4.component';
import { Mycomponent5Component } from './mycomponent5/mycomponent5.component';
// import { InputTextModule } from 'primeng/primeng';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '1', component: MycomponentComponent },
  {
    path: '2',
    component: Mycomponent2Component,
    data: { title: '2 component' }
  },
  { path: '3',
    component: Mycomponent3Component
  },
  { path: '4',
    component: Mycomponent4Component
  },
  { path: '5',
    component: Mycomponent5Component
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
    PagenotfoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }