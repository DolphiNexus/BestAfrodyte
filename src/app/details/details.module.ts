import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';
import { DetailsResolver } from './details.resolver';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage,
    resolve: {
      data: DetailsResolver
    }
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPage],
  providers:[DetailsResolver]
})
export class DetailsPageModule {}