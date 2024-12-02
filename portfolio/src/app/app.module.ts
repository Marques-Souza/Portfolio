import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { HardskillsComponent } from './pages/hardskills/hardskills.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SobreMimComponent,
    FormacaoComponent,
    HardskillsComponent,
    ProjetosComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
