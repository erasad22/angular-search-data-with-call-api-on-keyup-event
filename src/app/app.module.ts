import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routing
import { routing } from './app.routing'; 

// services
import { AuthenticationService } from './services/authentication.service';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchPageComponent } from './search-page/search-page.component';

// custom pipes
import { SearchPipe } from './pipe/search.pipe';
import { ArraySortPipe } from './pipe/sorting.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, routing ],
  declarations: [ AppComponent, LoginComponent, SearchPageComponent, SearchPipe, ArraySortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthenticationService]
})
export class AppModule { }
