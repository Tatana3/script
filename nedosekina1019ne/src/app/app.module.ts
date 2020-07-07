import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpisokComponent } from './spisok/spisok.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilteringPipe } from './shared/filtering.pipe';
import {NgxMaskModule} from 'ngx-mask';
import { SortPipe } from './shared/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpisokComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    FilteringPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
