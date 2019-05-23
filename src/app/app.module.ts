import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';
import { NovaTarefaModalPage } from './nova-tarefa-modal/nova-tarefa-modal.page';

import {NovaTarefaModalPageModule} from './nova-tarefa-modal/nova-tarefa-modal.module';
import { NovaCompraModalPage } from './nova-compra-modal/nova-compra-modal.page';
import { NovaCompraModalPageModule } from './nova-compra-modal/nova-compra-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    NovaTarefaModalPageModule,
    NovaCompraModalPageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
