import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent
  },
  { 
    path: 'blog', 
    loadChildren: () => import(`./blog/blog.module`).then(m => m.BlogModule) 
  },
  { 
    path: 'profile', 
    loadChildren: () => import(`./profile/profile.module`).then(m => m.ProfileModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
