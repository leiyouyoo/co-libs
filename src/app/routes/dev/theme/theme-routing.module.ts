import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeLayoutComponent } from './theme-layout.component';
import { ComponentStyleComponent } from './component-style/component-style.component';

const routes: Routes = [
  { path: '', component: ThemeLayoutComponent,
    children: [
      { path: '', component: ComponentStyleComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
