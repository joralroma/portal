import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { routing } from './app.routing';
import { PortalService } from './portal/portal.service';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppService,
    PortalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
