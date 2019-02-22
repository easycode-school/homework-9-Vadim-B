import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeWorkComponent } from './components/home-work/home-work.component';
import { SortArrPipe } from './pipes/sort-arr.pipe';
import { MyDatePipePipe } from './pipes/my-date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeWorkComponent,
    SortArrPipe,
    MyDatePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
