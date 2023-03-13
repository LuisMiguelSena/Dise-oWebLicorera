import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ContactanosComponent } from './component/contactanos/contactanos.component';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { CrearcuentaComponent } from './component/crearcuenta/crearcuenta.component';
import { PerfilComponent } from './component/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    InicioComponent,
    PedidosComponent,
    CarritoComponent,
    ContactanosComponent,
    IniciosesionComponent,
    CrearcuentaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
