import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/homepage/homepage.module').then((m) => m.HomepageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('src/app/task/task.module').then((c) => c.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
