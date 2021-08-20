import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
// {
//   path: 'flights',
//   loadChildren: () => import('dashboard/Module').then(m => m.FlightsModule)
// },
{
  path: 'flights',
  loadChildren: () => loadRemoteModule({
    remoteName: 'dashboard',
    exposedModule: './Module'
  })
    .then(m => m.FlightsModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
