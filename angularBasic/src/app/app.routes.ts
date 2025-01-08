import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { DirectiveComponent } from './components/directive/directive.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { CrudComponent } from './components/crud/crud.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PrimenumberComponent } from './components/primenumber/primenumber.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormComponent } from './components/form/form.component';
import { AutomobileComponent } from './assignment/automobile/automobile.component';
import { MobilesComponent } from './assignment/mobiles/mobiles.component';
import { BikeComponent } from './assignment/bike/bike.component';
import { ElectronicsComponent } from './assignment/electronics/electronics.component';

export const routes: Routes = [
  { path: '', component: ReactiveFormComponent }, //default routing
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'directive',
    canActivate: [authGuard],
    component: DirectiveComponent,
  }, //name routing
  { path: 'databind', canActivate: [authGuard], component: DataBindComponent },
  { path: 'child', canActivate: [authGuard], component: ChildComponent },
  { path: 'parent', canActivate: [authGuard], component: ParentComponent },
  { path: 'temp', canActivate: [authGuard], component: TemplateFormComponent },
  { path: 'react', canActivate: [authGuard], component: ReactiveFormComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'pipes', canActivate: [authGuard], component: PipeComponent },
  {
    path: 'viewchild',
    canActivate: [authGuard],
    component: ViewChildComponent,
  },
  {
    path: 'servicedata',
    component: UserdataComponent,
  },
  { path: 'crud', component: CrudComponent },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'prime',
    component: PrimenumberComponent,
  },
  // loadComponent : ()=> import('./components/pagination/pagination.component').then((m) => m.PaginationComponent),
  {
    path: 'customModule',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  },
  // { path: 'assignment/Automobile', component: AutomobileComponent},
  // { path: 'assignment/Mobiles', component: MobilesComponent},
  // { path: 'assignment/Bikes', component: BikeComponent},
  // { path: 'assignment/Electronics', component: ElectronicsComponent},
  { path: '**', component: PagenotfoundComponent }, //wild routing

  // { path: 'pipes', redirectTo: 'parent' }, //redirect routing
  // {
  //   path: 'form',
  //   component: FormComponent,
  //   children:[
  //     {
  //       path: 'temp',
  //       component: TemplateFormComponent,
  //     },
  //     {
  //       path: 'react',
  //       component: ReactiveFormComponent,
  //     },
  //   ],
  // },
  //child routing
];
