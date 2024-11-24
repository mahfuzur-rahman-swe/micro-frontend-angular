import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App1RoutingModule } from './app1-routing.module';
import { App1Component } from './app1.component';


@NgModule({
  declarations: [
    App1Component
  ],
  imports: [
    CommonModule,
    App1RoutingModule
  ]
})
export class App1Module { }
