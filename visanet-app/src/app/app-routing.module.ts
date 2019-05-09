import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { ContenedorServiciosComponent } from './components/vista-dos/contenedor-servicios/contenedor-servicios.component';
import { ContenedorPrestamosComponent } from './components/vista-dos/contenedor-prestamos/contenedor-prestamos.component';
import { RedcontactosBotonesComponent } from './components/vista-dos/redcontactos-botones/redcontactos-botones.component';
import { CrecerNegocioComponent } from './components/vista-dos/crecer-negocio/crecer-negocio.component';
import { RedcontactosCardsComponent } from './components/vista-dos/redcontactos-cards/redcontactos-cards.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: VistaUnoComponent},
  { path: 'servicios', component: ContenedorServiciosComponent, 
    children: [
      { path: '', redirectTo: 'prestamos', pathMatch: 'full'},
      { path: 'prestamos', component: ContenedorPrestamosComponent},
      { path: 'crecernegocio', component: CrecerNegocioComponent},
      { path: 'redcontactos', component: RedcontactosBotonesComponent},
      { path: 'colaboradores', component: RedcontactosCardsComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
