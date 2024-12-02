import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { HardskillsComponent } from './pages/hardskills/hardskills.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';


const routes: Routes = [
  {
    path: "", redirectTo: "/inicio", pathMatch: "full"
  },

  {
    path: "inicio", component: InicioComponent
  },

  {
    path: "sobremim", component: SobreMimComponent
  },

  {
    path: "formacao", component: FormacaoComponent
  },

  {
    path: "hardskills", component: HardskillsComponent
  },

  {
    path: "projetos", component: ProjetosComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
