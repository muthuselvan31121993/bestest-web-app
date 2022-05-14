import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotingPollPage } from './voting-poll.page';

const routes: Routes = [
  {
    path: '',
    component: VotingPollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotingPollPageRoutingModule {}
