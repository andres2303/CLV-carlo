import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagoRealizadoComponent } from './components/pago-realizado/pago-realizado.component';

const routes: Routes = [
  { path: 'pagos', component: PagosComponent },
  { path: 'pago-realizado', component: PagoRealizadoComponent },
  { path: '', redirectTo: '/pagos', pathMatch: 'full' } // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
