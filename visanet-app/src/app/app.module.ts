import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreService } from './services/firestore.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { NavBarComponent } from './components/vista-dos/nav-bar/nav-bar.component';
import { PasosNavComponent } from './components/vista-dos/pasos-nav/pasos-nav.component';
import { CalculaPrestamoComponent } from './components/vista-dos/calcula-prestamo/calcula-prestamo.component';
import { IngresarDatosComponent } from './components/vista-dos/ingresar-datos/ingresar-datos.component';
import { CompararPrestamosComponent } from './components/vista-dos/comparar-prestamos/comparar-prestamos.component';
import { SolicitarPrestamosComponent } from './components/vista-dos/solicitar-prestamos/solicitar-prestamos.component';
import { RecibirPrestamosComponent } from './components/vista-dos/recibir-prestamos/recibir-prestamos.component';
import { RedcontactosBotonesComponent } from './components/vista-dos/redcontactos-botones/redcontactos-botones.component';
import { RedcontactosCardsComponent } from './components/vista-dos/redcontactos-cards/redcontactos-cards.component';
import { CrecerNegocioComponent } from './components/vista-dos/crecer-negocio/crecer-negocio.component';
import { AtencionClienteComponent } from './components/vista-dos/atencion-cliente/atencion-cliente.component';
import { OtrosServiciosComponent } from './components/otros-servicios/otros-servicios.component';
import { ContenedorServiciosComponent } from './components/vista-dos/contenedor-servicios/contenedor-servicios.component';
import { ContenedorPrestamosComponent } from './components/vista-dos/contenedor-prestamos/contenedor-prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaUnoComponent,
    NavBarComponent,
    PasosNavComponent,
    CalculaPrestamoComponent,
    IngresarDatosComponent,
    CompararPrestamosComponent,
    SolicitarPrestamosComponent,
    RecibirPrestamosComponent,
    RedcontactosBotonesComponent,
    RedcontactosCardsComponent,
    CrecerNegocioComponent,
    AtencionClienteComponent,
    OtrosServiciosComponent,
    ContenedorServiciosComponent,
    ContenedorPrestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
