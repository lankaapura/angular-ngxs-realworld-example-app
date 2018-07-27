import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { SharedState } from './store/shared.state';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxsModule.forFeature([SharedState])
  ]
})
export class SharedStateModule {
  static forRoot() {
    return {
      ngModule: SharedStateModule
    };
  }
}
