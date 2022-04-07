import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MuseeComponent} from './musee/musee.component';
import { IdentificationComponent  } from './identification/identification.component';


const routes: Routes = [
  { path: 'detail', component: DetailViewComponent },
  { path: 'musee', component: MuseeComponent },
  { path: 'identification', component: IdentificationComponent }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }