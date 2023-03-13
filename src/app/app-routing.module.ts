import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PedidosComponent } from './component/pedidos/pedidos.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ContactanosComponent } from './component/contactanos/contactanos.component';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { CrearcuentaComponent } from './component/crearcuenta/crearcuenta.component';
import { PerfilComponent } from './component/perfil/perfil.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'inicio'},
  {path:'catalogo',component:CatalogoComponent},
  {path:'inicio' ,component:InicioComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'carrito' ,component:CarritoComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'iniciosesion' ,component:IniciosesionComponent},
  {path:'crearcuenta', component:CrearcuentaComponent},
  {path:'perfil',component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
