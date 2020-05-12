import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanialoginComponent } from './components/companialogin/companialogin.component';;
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: 'compania', component: CompanialoginComponent },
  { path: 'formulario', component: FormularioComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
