import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcuuielComponent } from './acuuiel/acuuiel.component';

import { ErroreComponent } from './errore/errore.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component';

import { AdmineComponent } from './Admine/admine/admine.component';
import { LoginComponent } from './login/login/login.component';
import { ContacteComponent } from './contacte/contacte.component';
import { VoyDetaileComponent } from './voy-detaile/voy-detaile.component';
import { ModifierComponent } from './modifier/modifier.component';
const routes: Routes = [
  {path:'acuiel',component:AcuuielComponent},

  {path:'log',component:LoginComponent},
  {path:'cont',component:ContacteComponent },
 {path:'ad',component:AdmineComponent},
 {path:'modif/:id',component:ModifierComponent},
  {path:'voyage',component:ListvoyageComponent },
  {path:'voyage/:id',component:VoyDetaileComponent},
  {path:'',redirectTo:'acuiel',pathMatch:'full'},
  {path:'**',component:ErroreComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
