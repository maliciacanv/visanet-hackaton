import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { ContenedorServiciosComponent } from './components/vista-dos/contenedor-servicios/contenedor-servicios.component';
import { ContenedorPrestamosComponent } from './components/vista-dos/contenedor-prestamos/contenedor-prestamos.component';
import { RedcontactosBotonesComponent } from './components/vista-dos/redcontactos-botones/redcontactos-botones.component';
import { CrecerNegocioComponent } from './components/vista-dos/crecer-negocio/crecer-negocio.component';
import { RedcontactosCardsComponent } from './components/vista-dos/redcontactos-cards/redcontactos-cards.component';
import { CalculaPrestamoComponent } from './components/vista-dos/calcula-prestamo/calcula-prestamo.component';
import { IngresarDatosComponent } from './components/vista-dos/ingresar-datos/ingresar-datos.component';
import { CompararPrestamosComponent } from './components/vista-dos/comparar-prestamos/comparar-prestamos.component';
import { SolicitarPrestamosComponent } from './components/vista-dos/solicitar-prestamos/solicitar-prestamos.component';
import { RecibirPrestamosComponent } from './components/vista-dos/recibir-prestamos/recibir-prestamos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: VistaUnoComponent},
  { path: 'servicios', component: ContenedorServiciosComponent, 
    children: [
      { path: '', redirectTo: 'prestamos', pathMatch: 'full'},
      { path: 'prestamos', component: ContenedorPrestamosComponent, 
        children: [
          { path: '', redirectTo: 'calcularprestamo', pathMatch: 'full' },
          { path: 'calcularprestamo', component: CalculaPrestamoComponent },
          { path: 'ingresardatos', component: IngresarDatosComponent },
          { path: 'compararprestamos', component: CompararPrestamosComponent },
          { path: 'solicitarprestamos', component: SolicitarPrestamosComponent },
          { path: 'recibirprestamo', component: RecibirPrestamosComponent }        
      ]},
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
