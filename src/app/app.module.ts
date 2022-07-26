

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { Form1Component } from './form1/form1.component';
import { From2Component } from './from2/from2.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToolComponent } from './tool/tool.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import{CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

// import { TempmoduleModule } from './tempmodule/tempmodule.module';
// import { ValidationDirective } from './validation.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Form1Component,
    From2Component,
    LoginComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatChipsModule,
    MatGridListModule,
    MatExpansionModule,
    FormsModule,
    // TempmoduleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
