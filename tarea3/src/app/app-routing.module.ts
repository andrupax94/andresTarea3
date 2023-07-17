import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';

const routes: Routes = [

{
  path:'userInterface',
  component:UserComponentComponent
},
{
  path:'adminInterface',
  component:AdminComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
