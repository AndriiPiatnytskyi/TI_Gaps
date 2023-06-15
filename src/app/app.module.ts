import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './directives/custom.directive';
import { MyImpurePipe } from './pipes/impure.pipe';
import { MyPurePipe } from './pipes/pure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    MyPurePipe,
    MyImpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
