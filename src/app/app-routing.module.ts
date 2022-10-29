import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlumcakeComponent,} from './plumcake/plumcake.component';
import { RedwelvetComponent} from './redwelvet/redwelvet.component';
import { BlackforestComponent} from './blackforest/blackforest.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
  {path:"redwelvetcake",component:RedwelvetComponent},
  {path:"plumcake",component:PlumcakeComponent},
  {path:"blackforestcake",component:BlackforestComponent},
  {path:"cupcake",component:CupcakeComponent},
  {path:"ordernow",component:OrdernowComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
