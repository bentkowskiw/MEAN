import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*import { AppRoutingModule } from './app-routing.module';*/
import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {HeaderComponent}  from './header/header.component';
import { ExpansionComponent } from './expansion/expansion.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule}  from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
   /* AppRoutingModule,*/
    PostCreateComponent,
    HeaderComponent,
    ExpansionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
